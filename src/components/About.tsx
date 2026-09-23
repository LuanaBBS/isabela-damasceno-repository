import React from 'react';
import { Heart, CheckCircle2, Shield, Eye } from 'lucide-react';
import { DENTIST_INFO, DOCTOR_IMAGES } from '../data/dentistData';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-14 sm:py-20 bg-white border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/90 shadow-md aspect-[4/5]">
                <img
                  src={DOCTOR_IMAGES.about}
                  alt="Dra. Isabela Damasceno em ambiente de atendimento odontológico"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Minimalist bottom card */}
                <div className="absolute inset-x-3 bottom-3 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-stone-200/80 shadow-sm">
                  <p className="text-xs font-medium text-stone-800 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span>Prática clínica humanizada e atenta</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              Quem Sou Eu
            </span>
            
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-stone-900 leading-tight mb-5 text-balance">
              Dedicação ao cuidado com foco em saúde, precisão e bem-estar.
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                Olá! Sou Isabela Damasceno, Cirurgiã-Dentista em Salvador. Minha prática clínica é dedicada às áreas de <strong className="text-stone-900 font-semibold">Implante, Prótese e Laserterapia</strong>.
              </p>
              <p>
                Acredito que o tratamento odontológico deve ser uma experiência de confiança mútua. Por isso, prezo por uma conversa clara e transparente desde o primeiro contato, entendendo as particularidades, receios e objetivos de quem senta na minha cadeira.
              </p>
              <p>
                Seja para repor dentes perdidos, restabelecer a harmonia da mordida ou proporcionar maior conforto biológico através do laser terapêutico, meu compromisso é aliar técnica rigorosa a um atendimento próximo, respeitoso e acolhedor.
              </p>
            </div>

            {/* Core Values / Differences */}
            <div className="mt-6 pt-6 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-stone-700 font-medium">
                  Planejamento clínico individualizado
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-stone-700 font-medium">
                  Comunicação clara em todas as etapas
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-stone-700 font-medium">
                  Foco na função mastigatória e saúde oral
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-stone-700 font-medium">
                  Atendimento acolhedor em Salvador, BA
                </span>
              </div>
            </div>

            {/* Micro link to contact */}
            <div className="mt-7">
              <a
                href={DENTIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4 flex items-center gap-1.5 transition-colors"
              >
                <span>Falar diretamente comigo pelo WhatsApp &rarr;</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
