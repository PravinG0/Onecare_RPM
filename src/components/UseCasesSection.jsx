import React from 'react';
import { useCases, deviceTypes } from '../data/content';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';
import { Shield, Activity, Radio, HeartHandshake } from 'lucide-react';

export function UseCasesSection() {
  return (
    <section className="w-full bg-bg-alt py-20 lg:py-28 border-b border-gray-200/70 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft border border-accent-border text-accent-ink text-xs font-bold tracking-wider uppercase mb-4">
              <Activity className="w-3.5 h-3.5 text-accent" />
              Specialty Coverage
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-dark tracking-tight leading-tight">
              {useCases.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              {useCases.intro}
            </p>
          </Reveal>
        </div>

        {/* 4 Clinical Use Cases Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {useCases.cards.map((card, idx) => (
            <Reveal key={card.num} delay={0.1 * idx}>
              <div className="group h-full p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-300 hover:border-accent flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl sm:text-3xl font-black font-display text-gray-300 group-hover:text-accent transition-colors">
                      {card.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                      <Icon name={card.icon} className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-dark group-hover:text-accent-ink transition-colors mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span>Standard Clinical Pathway</span>
                  <span className="text-accent font-semibold">24/7 AI Triage</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Works with Devices Patients Already Use Strip */}
        <Reveal delay={0.3}>
          <div className="rounded-3xl bg-slate-dark text-white p-8 sm:p-10 border border-slate-800 shadow-xl">
            <div className="max-w-2xl text-left mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold mb-2 inline-block">
                Interoperability
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {deviceTypes.heading}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                {deviceTypes.intro}
              </p>
            </div>

            {/* 6 Category Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {(deviceTypes.items || []).map((cat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/60 hover:bg-white/10 transition-all text-center flex flex-col items-center justify-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0">
                    <Icon name={cat.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-gray-200 leading-tight">
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-gray-400 mt-8 font-medium">
              {deviceTypes.outro}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
