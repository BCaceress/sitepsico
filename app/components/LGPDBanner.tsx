"use client";

import { useState, useEffect } from "react";

export default function LGPDBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("lgpd-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("lgpd-consent", "accepted");
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("lgpd-consent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-cream-dark p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">
              Sua privacidade é importante
            </h3>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Utilizamos cookies para melhorar sua experiência de navegação e
              personalizar conteúdo. Ao clicar em &quot;Aceitar todos&quot;,
              você concorda com o uso de cookies conforme nossa{" "}
              <a href="#" className="text-sage-dark underline hover:text-sage">
                Política de Privacidade
              </a>
              , em conformidade com a LGPD.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={acceptEssential}
              className="px-5 py-2.5 text-sm border border-charcoal/20 text-charcoal rounded-full hover:bg-cream transition-colors duration-300"
            >
              Apenas essenciais
            </button>
            <button
              onClick={acceptAll}
              className="px-5 py-2.5 text-sm bg-sage text-white rounded-full hover:bg-sage-dark transition-colors duration-300"
            >
              Aceitar todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
