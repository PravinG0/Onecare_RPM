import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { HeroDesign2 } from './components/HeroDesign2';
import { HeroDesign3 } from './components/HeroDesign3';
import { HeroDesign4 } from './components/HeroDesign4';
import { HeroDesign5 } from './components/HeroDesign5';
import { StatsBar } from './components/StatsBar';
import { ChallengeSection } from './components/ChallengeSection';
import { DevicesSection } from './components/DevicesSection';
import { HowItWorks } from './components/HowItWorks';
import { CarePlanSection } from './components/CarePlanSection';
import { UseCasesSection } from './components/UseCasesSection';
import { WhyOneCareSection } from './components/WhyOneCareSection';
import { FaqSection } from './components/FaqSection';
import { ClosingCta } from './components/ClosingCta';

export default function App() {
  const [currentDesign, setCurrentDesign] = useState(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      if (p.includes('/design5') || params.get('design') === '5') return '5';
      if (p.includes('/design4') || params.get('design') === '4') return '4';
      if (p.includes('/design3') || params.get('design') === '3') return '3';
      if (p.includes('/design2') || params.get('design') === '2') return '2';
    }
    return '1';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const p = window.location.pathname.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      if (p.includes('/design5') || params.get('design') === '5') setCurrentDesign('5');
      else if (p.includes('/design4') || params.get('design') === '4') setCurrentDesign('4');
      else if (p.includes('/design3') || params.get('design') === '3') setCurrentDesign('3');
      else if (p.includes('/design2') || params.get('design') === '2') setCurrentDesign('2');
      else setCurrentDesign('1');
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return (
    <div className={`min-h-screen bg-white text-brand-body relative flex flex-col font-sans theme-design${currentDesign}`}>
      {/* Scroll Progress Bar at the top */}
      <ScrollProgress />

      {/* Main Content Flow — Without Header and Without Footer */}
      <main className="flex-1 w-full">
        {/* 1. Hero: Render Hero based on active design */}
        {currentDesign === '5' ? <HeroDesign5 /> : currentDesign === '4' ? <HeroDesign4 /> : currentDesign === '3' ? <HeroDesign3 /> : currentDesign === '2' ? <HeroDesign2 /> : <Hero />}

        {/* 2. Hero Stats Dark Slate Strip */}
        <StatsBar />

        {/* 3. The Challenge Section */}
        <ChallengeSection />

        {/* 4. RPM Devices Showcase (Images + Name + Description) */}
        <DevicesSection />

        {/* 5. How It Works (7-Stage Clinical Roadmap) */}
        <HowItWorks />

        {/* 6. Care Plan & Personalisation (6 Structured Protocols) */}
        <CarePlanSection />

        {/* 7. Use Cases & Supported Device Types */}
        <UseCasesSection />

        {/* 8. Why OneCare RPM (5 Enterprise Architecture Pillars) */}
        <WhyOneCareSection />

        {/* 9. Frequently Asked Questions */}
        <FaqSection />

        {/* 10. Closing Call to Action & Brand Accreditation */}
        <ClosingCta />
      </main>
    </div>
  );
}
