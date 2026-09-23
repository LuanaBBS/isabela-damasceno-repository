import React from 'react';
import { MessageCircle, Instagram, Heart } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 sm:py-16 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-stone-800">
          
          {/* Identity */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-white tracking-tight">
              {DENTIST_INFO.name}
            </h3>
            <p className="text-sm text-stone-400 mt-1">
              {DENTIST_INFO.title} · {DENTIST_INFO.city}
            </p>
            <p className="text-xs text-stone-500 mt-0.5">
              {DENTIST_INFO.specialtiesText}
            </p>
          </div>

          {/* Direct Social & WhatsApp Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={DENTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-stone-300 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4 text-stone-400" />
              <span>{DENTIST_INFO.instagramHandle}</span>
            </a>

            <a
              href={DENTIST_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: {DENTIST_INFO.phoneFormatted}</span>
            </a>
          </div>

        </div>

        {/* Bottom notes & ethical disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {currentYear} Isabela Damasceno. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-stone-400">
            A prática odontológica segue os preceitos éticos do CFO/CRO-BA. Informações de caráter orientativo.
          </p>
        </div>
      </div>
    </footer>
  );
};
