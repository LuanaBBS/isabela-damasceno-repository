import React from 'react';
import { BACKSTAGE_PHOTOS } from '../data/dentistData';

export const ExpertGallery: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2 block">
            Proximidade & Cuidado
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-stone-900 leading-tight mb-4 text-balance">
            Bastidores de uma prática centrada em você
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            A presença da Dra. Isabela Damasceno em cada etapa do atendimento odontológico.
          </p>
        </div>

        {/* 3 Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BACKSTAGE_PHOTOS.map((photo, index) => (
            <div
              key={index}
              className="group flex flex-col bg-[#FAF8F5] rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                  src={photo.url}
                  alt={`Dra. Isabela Damasceno - ${photo.caption}`}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-80" />
                
                {/* Bottom caption overlaid */}
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <span className="text-[11px] font-medium tracking-wide uppercase text-amber-200/90 block mb-1">
                    {photo.sub}
                  </span>
                  <p className="font-serif text-base sm:text-lg font-medium leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </div>

              {/* Quiet footer below photo */}
              <div className="p-4 bg-white border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>Dra. Isabela Damasceno</span>
                <span className="text-stone-400">Salvador, BA</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
