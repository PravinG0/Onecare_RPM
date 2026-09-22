import React from 'react';
import { carePlan } from '../data/content';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';
import { Check, ClipboardList } from 'lucide-react';

export function CarePlanSection() {
  return (
    <section id="care-plan" className="w-full bg-slate-dark text-white py-20 lg:py-28 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header (Slide 4 Style) */}
        <div className="max-w-3xl mb-14 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/10 text-accent text-xs font-mono font-bold tracking-wider uppercase mb-4">
              <ClipboardList className="w-3.5 h-3.5 text-accent" />
              Tailored Clinical Protocols
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {carePlan.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
              {carePlan.intro}
            </p>
          </Reveal>
        </div>

        {/* 6 Floating White Cards on Dark Slate (Slide 4 Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carePlan.cards.map((card, idx) => (
            <Reveal key={card.num} delay={0.08 * idx}>
              <div className="group h-full flex flex-col justify-between p-7 rounded-2xl bg-white text-slate-dark border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                <div>
                  {/* Top Row: Pill Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-full bg-slate-dark text-white font-mono text-xs font-bold flex items-center justify-center group-hover:bg-accent transition-colors">
                      {card.num}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-accent-soft text-accent-ink border border-accent-border">
                      {card.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-dark group-hover:text-accent-ink transition-colors mb-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Micro Protocol Feature Row */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span>Configured in Clinician Dashboard</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
