import React from 'react';
import { Layers, Activity, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { SPECIALTIES, DENTIST_INFO } from '../data/dentistData';

export const Specialties: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Implantes':
        return <Layers className="w-6 h-6 text-emerald-800" />;
      case 'Prótese':
        return <Activity className="w-6 h-6 text-emerald-800" />;
      case 'Laserterapia':
        return <Sparkles className="w-6 h-6 text-emerald-800" />;
      default:
        return <Activity className="w-6 h-6 text-emerald-800" />;
    }
  };

  return (
    <section id="especialidades" className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2 block">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-stone-900 leading-tight mb-4 text-balance">
            Tratamentos especializados conduzidos com precisão e cuidado
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Conheça as principais frentes de atendimento clínico e saiba como podemos cuidar da sua saúde bucal.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SPECIALTIES.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                    {getIcon(item.title)}
                  </div>
                  <span className="text-xs font-serif font-medium text-stone-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Tag */}
                <span className="text-xs font-medium text-emerald-800 mb-2 block">
                  {item.highlight}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action trigger */}
              <div className="pt-4 border-t border-stone-100">
                <a
                  href={DENTIST_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-800 hover:text-emerald-800 transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Tirar dúvidas sobre {item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle helper note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-stone-500 max-w-lg mx-auto">
            Cada tratamento é precedido de análise clínica minuciosa para determinar a indicação adequada para a sua saúde e bem-estar.
          </p>
        </div>

      </div>
    </section>
  );
};
