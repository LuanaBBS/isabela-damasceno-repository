import React from 'react';
import { 
  UserCheck, 
  MessageSquare, 
  HeartHandshake, 
  ClipboardCheck, 
  Smile, 
  ShieldCheck 
} from 'lucide-react';
import { TRUST_PILLARS } from '../data/dentistData';

export const WhyTrust: React.FC = () => {
  const getIcon = (index: number) => {
    const icons = [
      <UserCheck key="1" className="w-5 h-5 text-emerald-800" />,
      <MessageSquare key="2" className="w-5 h-5 text-emerald-800" />,
      <HeartHandshake key="3" className="w-5 h-5 text-emerald-800" />,
      <ClipboardCheck key="4" className="w-5 h-5 text-emerald-800" />,
      <Smile key="5" className="w-5 h-5 text-emerald-800" />,
      <ShieldCheck key="6" className="w-5 h-5 text-emerald-800" />,
    ];
    return icons[index] || icons[0];
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2 block">
            Critérios & Princípios
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-stone-900 leading-tight mb-4 text-balance">
            Por que confiar o cuidado do seu sorriso a mim?
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Uma prática odontológica pautada pelo respeito à sua individualidade, clareza nas orientações e compromisso com o seu conforto.
          </p>
        </div>

        {/* 6 Differential Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TRUST_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 hover:border-emerald-700/30 transition-all duration-200 flex flex-col items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/80 flex items-center justify-center mb-4 shadow-2xs">
                {getIcon(index)}
              </div>
              
              <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">
                {pillar.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
