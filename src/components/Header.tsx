import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-luxury border-b border-stone-200/70 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-stone-900 hover:text-stone-700 transition-colors"
        >
          {DENTIST_INFO.name}
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a href="#sobre" className="hover:text-stone-900 transition-colors">
            Sobre
          </a>
          <a href="#especialidades" className="hover:text-stone-900 transition-colors">
            Especialidades
          </a>
          <a href="#resultados" className="hover:text-stone-900 transition-colors">
            Resultados
          </a>
          <a href="#atendimento" className="hover:text-stone-900 transition-colors">
            Como Funciona
          </a>
        </nav>

        {/* Zone 3: Primary Action CTA & Mobile Trigger */}
        <div className="flex items-center gap-2.5">
          <a
            href={DENTIST_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-emerald-800 hover:bg-emerald-900 active:scale-[0.98] rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap"
            aria-label="Falar com a Dra. Isabela pelo WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span className="hidden sm:inline">Falar pelo WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#FAF8F5] px-4 py-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2 text-base font-medium text-stone-700">
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-stone-100 transition-colors"
            >
              Sobre a Dra. Isabela
            </a>
            <a
              href="#especialidades"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-stone-100 transition-colors"
            >
              Especialidades (Implante, Prótese, Laser)
            </a>
            <a
              href="#resultados"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-stone-100 transition-colors"
            >
              Resultados Reais
            </a>
            <a
              href="#atendimento"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-stone-100 transition-colors"
            >
              Como Funciona o Atendimento
            </a>
          </nav>
          <div className="pt-2 border-t border-stone-200/70">
            <a
              href={DENTIST_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Falar comigo pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
