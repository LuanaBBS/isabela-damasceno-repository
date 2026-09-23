import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  images: ReadonlyArray<{
    readonly id: number;
    readonly url: string;
    readonly alt: string;
    readonly title?: string;
    readonly tag?: string;
  }>;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagem em alta resolução"
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/92 backdrop-blur-md p-2 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar inside modal */}
      <div 
        className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-white z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          {currentImage.tag && (
            <span className="text-xs uppercase tracking-wider text-stone-300 font-medium bg-white/10 px-2.5 py-1 rounded-md">
              {currentImage.tag}
            </span>
          )}
          <span className="text-xs text-stone-400 font-medium">
            {currentIndex + 1} de {images.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Fechar visualizador"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div 
        className="relative max-w-4xl max-h-[80vh] flex flex-col items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.url}
          alt={currentImage.alt}
          className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl transition-transform select-none"
          referrerPolicy="no-referrer"
        />
        
        {/* Caption below image */}
        <div className="mt-3 text-center">
          {currentImage.title && (
            <p className="text-sm font-medium text-stone-200">
              {currentImage.title}
            </p>
          )}
          <p className="text-xs text-stone-400 mt-0.5">
            Registro clínico · Resultados individuais podem variar
          </p>
        </div>
      </div>

      {/* Navigation Buttons (Desktop & Mobile) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700/60 shadow-lg min-h-[48px] min-w-[48px] flex items-center justify-center transition-all"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700/60 shadow-lg min-h-[48px] min-w-[48px] flex items-center justify-center transition-all"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
