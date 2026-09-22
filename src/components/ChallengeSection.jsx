import React from 'react';
import { challenge } from '../data/content';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight, AlertCircle } from 'lucide-react';

export function ChallengeSection() {
  return (
    <section id="challenges" className="w-full bg-bg-alt py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header (Slide 3 Style) */}
        <div className="max-w-3xl mb-14 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft border border-accent-border text-accent-ink text-xs font-bold tracking-wider uppercase mb-4">
              <AlertCircle className="w-3.5 h-3.5 text-accent" />
              Clinical Capacity Dilemma
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-dark tracking-tight leading-tight">
              {challenge.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              {challenge.intro}
            </p>
          </Reveal>
        </div>

        {/* 6 Challenge Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenge.cards.map((card, idx) => (
            <Reveal key={card.num} delay={0.08 * idx}>
              <div className="group h-full flex flex-col justify-between p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                <div>
                  {/* Top Numeral Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-9 h-9 rounded-full bg-slate-dark text-white font-mono text-xs font-bold flex items-center justify-center shadow-sm group-hover:bg-accent transition-colors">
                      {card.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={card.icon} className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-dark group-hover:text-accent-ink transition-colors mb-2.5">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Card Footer Micro Bar */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-medium group-hover:text-accent-ink transition-colors">
                  <span>Continuous Telemetry</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Dark Dilemma Bar (Slide 3 Style) */}
        <Reveal delay={0.4} className="mt-14">
          <div className="rounded-3xl bg-slate-dark text-white overflow-hidden border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 text-left">
              <span className="text-xs uppercase font-mono tracking-widest text-accent font-bold mb-2 inline-block">
                The Executive Bottleneck
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug tracking-tight mb-4">
                "India has one doctor for every 834 patients. How do you extend quality care without burning out staff?"
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
                Beds are limited, OPDs are overloaded, and post-discharge follow-up falls through the cracks. OneCare RPM lets your hospital extend quality care beyond the ward — at scale, and without adding headcount.
              </p>
            </div>
            <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden">
              <img
                src="/assets/hospital-challenge.jpg"
                alt="Hospital Administration and Clinical Capacity"
                className="w-full h-full object-cover object-center grayscale contrast-125 opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-dark via-slate-dark/40 to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
