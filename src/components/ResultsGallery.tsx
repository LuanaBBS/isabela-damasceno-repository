import React, { useState } from 'react';
import { ZoomIn, AlertCircle } from 'lucide-react';
import { RESULTS_IMAGES } from '../data/dentistData';
import { LightboxModal } from './LightboxModal';

export const ResultsGallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % RESULTS_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + RESULTS_IMAGES.length) % RESULTS_IMAGES.length);
  };

  return (
    <section id="resultados" className="py-14 sm:py-20 bg-stone-100/60 border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2 block">
            Provas Visuais & Casos Clínicos
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-stone-900 leading-tight mb-4 text-balance">
            Resultados que você pode conhecer de perto
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Acompanhe alguns registros fotográficos de procedimentos e reabilitações conduzidos com foco em harmonia, saúde e precisão.
          </p>
        </div>

        {/* Gallery Grid (Mobile-first 2 columns, desktop 3 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
          {RESULTS_IMAGES.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 aspect-square flex flex-col justify-end"
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Hover Zoom Indicator */}
              <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 p-1.5 sm:p-2 rounded-full bg-stone-900/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Legal & Ethical Disclaimer */}
        <div className="mt-8 sm:mt-10 max-w-xl mx-auto p-4 rounded-xl bg-white border border-stone-200/80 text-center shadow-xs">
          <p className="text-xs sm:text-sm font-medium text-stone-700 flex items-center justify-center gap-1.5 mb-1">
            <AlertCircle className="w-4 h-4 text-stone-500 shrink-0" />
            <span>Resultados podem variar de pessoa para pessoa.</span>
          </p>
          <p className="text-[11px] sm:text-xs text-stone-500 leading-normal">
            Cada planejamento depende de exame clínico detalhado e das características biológicas individuais do paciente.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={RESULTS_IMAGES}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
