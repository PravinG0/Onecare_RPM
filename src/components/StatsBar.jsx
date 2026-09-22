import React from 'react';
import { CountUp } from './ui/CountUp';
import { stats } from '../data/content';
import { ShieldCheck, Cloud, RefreshCw } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function StatsBar() {
  return (
    <section className="w-full bg-slate-dark text-white py-10 border-y border-slate-800 relative overflow-hidden">
      {/* Subtle background dot matrix */}
      <div className="absolute inset-0 bg-dot-matrix-light opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {/* Stat 1 */}
          <Reveal delay={0.1} className="flex items-center gap-5 pt-6 md:pt-0 md:pl-0">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent">
              <span className="text-2xl font-black">4×</span>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white flex items-baseline">
                <CountUp value={stats[0].value} suffix={stats[0].suffix} />
              </div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mt-1 font-medium">
                {stats[0].label}
              </p>
            </div>
          </Reveal>

          {/* Stat 2 */}
          <Reveal delay={0.2} className="flex items-center gap-5 pt-6 md:pt-0 md:pl-8">
            <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <RefreshCw className="w-6 h-6 text-accent animate-spin" style={{ animationDuration: '10s' }} />
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white flex items-baseline">
                <CountUp value={stats[1].value} suffix={stats[1].suffix} />
              </div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mt-1 font-medium">
                {stats[1].label}
              </p>
            </div>
          </Reveal>

          {/* Stat 3 */}
          <Reveal delay={0.3} className="flex items-center gap-5 pt-6 md:pt-0 md:pl-8">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent">
              <Cloud className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white flex items-baseline gap-2">
                <CountUp value={stats[2].value} decimals={1} suffix={stats[2].suffix} />
                <span className="text-[10px] tracking-widest uppercase font-bold text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/30">
                  Cloud SLA
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mt-1 font-medium">
                {stats[2].label}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
