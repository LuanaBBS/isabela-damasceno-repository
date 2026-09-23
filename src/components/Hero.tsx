import React from 'react';
import { MessageCircle, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { DENTIST_INFO, DOCTOR_IMAGES } from '../data/dentistData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-12 sm:pb-20 border-b border-stone-200/60">
      {/* Subtle organic background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 translate-y-12 -translate-x-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content Column (Mobile First) */}
          <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1 text-left">
            
            {/* Subtle city & clinical indicator */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-600 mb-3 sm:mb-4">
              <span className="flex items-center gap-1.5 text-emerald-800">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Salvador, BA</span>
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-500">Implante · Prótese · Laserterapia</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-900 leading-[1.15] tracking-tight mb-4 sm:mb-6 text-balance">
              Eu sou <span className="text-emerald-950 font-medium">Isabela Damasceno</span>, Cirurgiã-Dentista em Salvador.
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Cuidado individualizado, precisão técnica e acolhimento para devolver a função mastigatória, a harmonia e a tranquilidade ao seu sorriso.
            </p>

            {/* Main CTA & Microcopy */}
            <div className="w-full sm:w-auto flex flex-col items-stretch sm:items-start gap-3">
              <a
                href={DENTIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-4 text-base font-semibold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                <span className="whitespace-nowrap">Falar comigo pelo WhatsApp</span>
              </a>

              {/* Microcopy without false commercial promises */}
              <p className="text-xs sm:text-sm text-stone-500 flex items-center justify-center sm:justify-start gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Entre em contato e saiba mais sobre o atendimento.</span>
              </p>
            </div>

            {/* Quick Specialization Tags */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 w-full grid grid-cols-3 gap-2 sm:gap-4 text-center sm:text-left">
              <div>
                <span className="block text-xs uppercase tracking-wider text-stone-400 font-medium">Foco</span>
                <span className="text-sm font-semibold text-stone-800">Implantes</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-stone-400 font-medium">Função</span>
                <span className="text-sm font-semibold text-stone-800">Prótese Dental</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-stone-400 font-medium">Conforto</span>
                <span className="text-sm font-semibold text-stone-800">Laserterapia</span>
              </div>
            </div>
          </div>

          {/* Hero Image Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-xl shadow-stone-900/5 aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src={DOCTOR_IMAGES.hero}
                  alt="Dra. Isabela Damasceno, Cirurgiã-Dentista em Salvador"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Subtle scrim at bottom for text contrast */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-lg sm:text-xl font-medium tracking-wide">
                        Dra. Isabela Damasceno
                      </p>
                      <p className="text-xs text-stone-300">
                        Cirurgiã-Dentista · Salvador, BA
                      </p>
                    </div>
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-md">
                      <Sparkles className="w-4 h-4 text-amber-300" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
