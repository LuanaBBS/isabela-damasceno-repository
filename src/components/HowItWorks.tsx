import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/dentistData';

export const HowItWorks: React.FC = () => {
  return (
    <section id="atendimento" className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2 block">
            Fluxo Transparente
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-stone-900 leading-tight mb-4 text-balance">
            Como funciona o atendimento
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Três etapas simples para você tirar dúvidas e planejar seu cuidado odontológico em Salvador.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="relative bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Step Number */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800">
                    {stepItem.step}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                    Etapa {idx + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-stone-900 mb-3">
                  {stepItem.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-stone-600 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs font-medium text-stone-400">
                <span>Passo {idx + 1} de 3</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical clarification */}
        <div className="mt-8 text-center">
          <p className="text-xs text-stone-500 max-w-lg mx-auto">
            Avaliações clínicas definitivas, diagnósticos e planos de tratamento são estabelecidos após exame clínico presencial no consultório.
          </p>
        </div>

      </div>
    </section>
  );
};
