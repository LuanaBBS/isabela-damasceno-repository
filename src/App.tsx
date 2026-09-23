import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specialties } from './components/Specialties';
import { ResultsGallery } from './components/ResultsGallery';
import { WhyTrust } from './components/WhyTrust';
import { MidCTA } from './components/MidCTA';
import { HowItWorks } from './components/HowItWorks';
import { ExpertGallery } from './components/ExpertGallery';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 font-sans selection:bg-stone-200 selection:text-stone-900 pb-16 md:pb-0">
      {/* Top Bar Navigation */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Dobra Principal */}
        <Hero />

        {/* 2. Quem Sou Eu */}
        <About />

        {/* 3. Áreas de Atuação */}
        <Specialties />

        {/* 4. Resultados Reais & Casos Clínicos com Lightbox */}
        <ResultsGallery />

        {/* 5. Por Que Confiar Em Mim */}
        <WhyTrust />

        {/* 6. CTA Intermediário */}
        <MidCTA />

        {/* 7. Como Funciona o Atendimento */}
        <HowItWorks />

        {/* 8. Expert & Bastidores */}
        <ExpertGallery />

        {/* 9. CTA Final */}
        <FinalCTA />
      </main>

      {/* 10. Rodapé */}
      <Footer />

      {/* Mobile Sticky Floating CTA */}
      <MobileStickyCTA />
    </div>
  );
}
