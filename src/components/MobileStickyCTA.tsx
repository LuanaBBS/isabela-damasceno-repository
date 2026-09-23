import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

export const MobileStickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-stone-200/90 shadow-2xl transition-all duration-300 pb-safe animate-in slide-in-from-bottom duration-200"
      style={{ maxHeight: '12vh' }}
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col truncate">
          <span className="text-xs font-semibold text-stone-900 truncate">
            Dra. Isabela Damasceno
          </span>
          <span className="text-[11px] text-stone-500 truncate">
            Salvador · WhatsApp Direto
          </span>
        </div>

        <a
          href={DENTIST_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 active:scale-[0.97] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shrink-0 transition-transform min-h-[44px]"
          aria-label="Iniciar conversa com a Dra. Isabela pelo WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
