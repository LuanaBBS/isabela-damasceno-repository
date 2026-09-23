import React from 'react';
import { MessageCircle, ShieldCheck, Heart } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden border-b border-stone-200/60">
      {/* Decorative ambient gradients */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-6">
          <Heart className="w-3.5 h-3.5 text-emerald-700" />
          <span>Atendimento em Salvador, BA</span>
        </div>

        {/* Suggested Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-900 leading-tight mb-5 text-balance">
          Seu próximo passo começa com uma conversa.
        </h2>

        {/* Body Text */}
        <p className="text-base sm:text-lg text-stone-600 max-w-xl mx-auto mb-9 leading-relaxed">
          Entre em contato pelo WhatsApp e saiba mais sobre o atendimento da Dra. Isabela Damasceno.
        </p>

        {/* Max Contrast CTA */}
        <div className="flex flex-col items-center gap-3">
          <a
            href={DENTIST_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 sm:py-5 text-base sm:text-lg font-semibold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-[0.98] rounded-2xl shadow-xl shadow-emerald-950/15 transition-all"
          >
            <MessageCircle className="w-6 h-6 text-emerald-300 shrink-0" />
            <span className="whitespace-nowrap">Falar com a Dra. Isabela pelo WhatsApp</span>
          </a>

          <p className="text-xs sm:text-sm text-stone-500 flex items-center justify-center gap-1.5 mt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Atendimento individualizado e seguro.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
