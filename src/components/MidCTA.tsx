import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

export const MidCTA: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-emerald-950 text-white relative overflow-hidden">
      {/* Subtle organic lighting accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-80 h-80 bg-emerald-800/30 rounded-full blur-3xl pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
        <span className="inline-block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-3">
          Conversa Direta e Sem Burocracia
        </span>
        
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4 text-balance">
          Quer saber qual opção faz mais sentido para você?
        </h2>
        
        <p className="text-sm sm:text-base text-emerald-100/90 max-w-xl mx-auto mb-8 leading-relaxed">
          Entre em contato pelo WhatsApp para conversar sobre seu caso e conhecer melhor o atendimento.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={DENTIST_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-emerald-950 bg-white hover:bg-stone-100 active:scale-[0.98] rounded-xl shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 text-emerald-800 shrink-0" />
            <span>Falar pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-stone-600" />
          </a>
        </div>

        <p className="text-xs text-emerald-200/70 mt-4">
          Atendimento personalizado com a Dra. Isabela Damasceno em Salvador, BA.
        </p>
      </div>
    </section>
  );
};
