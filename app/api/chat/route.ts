// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const MAX_RETRIES = 2;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error: {
          type: "config_error",
          message: "ANTHROPIC_API_KEY nao configurada no servidor.",
        },
      },
      { status: 500 }
    );
  }

  let res: Response | null = null;
  let data: unknown = null;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
    res = await fetch(ANTHROPIC_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(body),
    });

    data = await res.json();

    const providerMessage =
      typeof (data as { error?: { message?: string } })?.error?.message === "string"
        ? (data as { error?: { message?: string } }).error!.message!
        : "";

    const errorType =
      (data as { error?: { type?: string } })?.error?.type ?? "";

    const shouldRetry =
      !res.ok &&
      (res.status === 529 ||
        res.status === 503 ||
        errorType === "overloaded_error" ||
        /overloaded/i.test(providerMessage));

    if (!shouldRetry || attempt === MAX_RETRIES) {
      break;
    }

    await sleep(700 * (attempt + 1));
  }

  if (!res) {
    return NextResponse.json(
      {
        error: {
          type: "provider_error",
          message: "Falha ao conectar com a Anthropic.",
        },
      },
      { status: 502 }
    );
  }

  if (!res.ok) {
    const providerMessage =
      typeof (data as { error?: { message?: string } })?.error?.message === "string"
        ? (data as { error?: { message?: string } }).error!.message!
        : "Falha ao gerar resposta com a Anthropic.";

    const errorType =
      (data as { error?: { type?: string } })?.error?.type === "invalid_request_error" &&
      /credit balance is too low/i.test(providerMessage)
        ? "billing_error"
        : (data as { error?: { type?: string } })?.error?.type ?? "provider_error";

    return NextResponse.json(
      {
        error: {
          type: errorType,
          message: providerMessage,
        },
      },
      { status: res.status }
    );
  }

  return NextResponse.json(data, { status: res.status });
}
