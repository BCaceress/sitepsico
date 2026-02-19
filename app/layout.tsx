import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dra. Simone Caceres | Psicóloga Clínica - CRP 07/31309",
  description:
    "Psicóloga clínica especializada em ansiedade, depressão, terapia de casal e desenvolvimento pessoal. Atendimento presencial e online. Agende sua consulta.",
  keywords: [
    "psicóloga",
    "terapia",
    "ansiedade",
    "depressão",
    "saúde mental",
    "psicologia",
    "terapia online",
    "terapia de casal",
    "psicóloga clínica",
  ],
  openGraph: {
    title: "Dra. Simone Caceres | Psicóloga Clínica",
    description:
      "Cuidar da sua saúde emocional é um ato de coragem. Agende sua consulta.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
