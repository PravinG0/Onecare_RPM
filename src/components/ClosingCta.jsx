import React from 'react';
import { closingCta } from '../data/content';
import { Button } from './ui/Button';
import { ArrowRight, MessageSquare, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function ClosingCta() {
  return (
    <section id="demo" className="w-full bg-gradient-to-b from-white to-accent-soft py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Full-Bleed Dark Slate Presentation Card */}
        <Reveal>
          <div className="relative rounded-3xl bg-slate-dark text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl overflow-hidden text-left">
            {/* Ambient Electric Blue Radial Glow & Dot Texture */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-dot-matrix-light opacity-5 pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-accent text-xs font-mono font-bold tracking-wider uppercase mb-6 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Zero Obligation Pilot
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                {closingCta.heading}
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                {closingCta.sub}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Button
                  variant="primary"
                  size="lg"
                  href="mailto:sales@onecarehealth.com"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {closingCta.primary || 'Book Free Demo'}
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="tel:+917845496222"
                  icon={<MessageSquare className="w-4 h-4 text-accent" />}
                >
                  {closingCta.secondary || 'Speak with Expert'}
                </Button>
              </div>

              {/* Bottom Partner Trust & Global Offices Strip */}
              <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center">
                  <div className="bg-white px-3.5 py-1.5 rounded-xl shadow-sm">
                    <img
                      src="/assets/Onecare_Horizontal.png"
                      alt="OneCare"
                      className="h-7 object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    Enterprise Cloud Architecture
                  </span>
                  <span>·</span>
                  <span>India Data Sovereignty</span>
                  <span>·</span>
                  <span>© {new Date().getFullYear()} OneCare. All Rights Reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
