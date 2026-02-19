"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import LGPDBanner from "./components/LGPDBanner";
import Hero from "./components/sections/Hero";
import Sobre from "./components/sections/Sobre";
import Especialidades from "./components/sections/Especialidades";
import ComoFunciona from "./components/sections/ComoFunciona";
import Depoimentos from "./components/sections/Depoimentos";
import Contato from "./components/sections/Contato";
import FAQ from "./components/sections/FAQ";
import { useReveal } from "./hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Especialidades />
        <ComoFunciona />
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
      <LGPDBanner />
    </>
  );
}
