import React from 'react';
import { whyOneCare } from '../data/content';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';
import { ShieldCheck, Cloud, CheckCircle, Database } from 'lucide-react';

export function WhyOneCareSection() {
  return (
    <section id="why" className="w-full bg-white py-20 lg:py-28 relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft border border-accent-border text-accent-ink text-xs font-bold tracking-wider uppercase mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              Enterprise Architecture
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-dark tracking-tight leading-tight">
              {whyOneCare.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              {whyOneCare.intro}
            </p>
          </Reveal>
        </div>

        {/* Split Grid: Left Cloud Architecture Card / Right 5 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Cloud Infrastructure Showcase */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-dark text-white p-8 border border-slate-800 shadow-2xl relative overflow-hidden text-left">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-accent">
                  Cloud Backbone
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-gray-300 border border-white/10">
                  99.5% SLA
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white leading-snug mb-3">
                High-Throughput Medical Cloud Backbone
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                High-throughput medical device ingestion with sub-second vital dispatch, role-based access, automated audit trails, and data guaranteed to never leave Indian shores.
              </p>

              {/* Photo Backdrop */}
              <div className="relative rounded-2xl overflow-hidden mb-6 border border-slate-700">
                <img
                  src="/assets/healthcare-cloud.jpg"
                  alt="Enterprise Healthcare Cloud Infrastructure"
                  className="w-full h-48 object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark via-transparent to-transparent" />
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>Enterprise Well-Architected Healthcare Framework</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>99.5% Guaranteed Device Data Uptime SLA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>End-to-End TLS 1.3 Encryption at Rest & in Transit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Pillars List (Slide 9 Style) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            {(whyOneCare.cards || []).map((card, idx) => (
              <Reveal key={idx} delay={0.08 * idx}>
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-300 hover:border-accent hover:-translate-y-0.5 group">
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-xl bg-slate-dark text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                      0{idx + 1}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-bold text-slate-dark group-hover:text-accent-ink transition-colors leading-snug">
                          {card.title}
                        </h4>
                      </div>

                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
