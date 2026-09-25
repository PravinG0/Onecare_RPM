import React from 'react';
import { motion } from 'framer-motion';
import { hero } from '../data/content';
import { Button } from './ui/Button';
import { LiveTelemetryHud } from './LiveTelemetryHud';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-accent-tint via-accent-soft to-white overflow-hidden pt-8 lg:pt-10">
      {/* Background Architectural Mesh & Dotted Texture */}
      <div className="absolute inset-0 bg-dot-matrix opacity-[0.08] pointer-events-none" />
      
      {/* Enhanced Pink Glow Orbs */}
      <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-accent blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[30rem] h-[30rem] rounded-full bg-accent blur-[120px] opacity-15 pointer-events-none" />

      {/* Top Integrated Branding Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
          {/* OneCare Logo */}
          <div className="flex items-center">
            <img
              src="/assets/Onecare_Horizontal.png"
              alt="OneCare"
              className="h-8 sm:h-9 object-contain"
            />
          </div>

          {/* Program Pill Badge & Design 2 Link */}
          <div className="flex items-center gap-3">
            <a
              href="/design2"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-mono transition-all"
            >
              <span>Design 2 (Monochrome)</span>
              <span className="text-[10px] text-accent font-bold">→</span>
            </a>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent text-white text-xs font-bold tracking-wide uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              Enterprise RPM Program
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Hero Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Visual 3D Stack + Telemetry HUD Card */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            {/* Ambient background glow behind the card */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent to-accent-tint blur-2xl opacity-30 pointer-events-none" />
            
            {/* Angular Faceted Background Card Frame */}
            <div className="relative rounded-3xl bg-white/90 backdrop-blur-sm border border-accent/20 p-3 sm:p-4 shadow-2xl overflow-hidden">
              {/* Subtle background 3D graphic watermark */}
              <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
                <img
                  src="/assets/hero-workstation.jpg"
                  alt="Remote Patient Monitoring Clinician Workstation"
                  className="w-full h-full object-cover object-center grayscale contrast-125"
                />
              </div>

              {/* The Live Telemetry HUD */}
              <LiveTelemetryHud />
            </div>

            {/* Micro Caption */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500 px-2 font-mono">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                HIPAA & FHIR Standard Telemetry
              </span>
              <span>Encrypted Cloud Telemetry</span>
            </div>
          </div>

          {/* Right Column: Hero Content (From Brief & Slide 1) */}
          <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-6 text-left">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft border border-accent-border text-accent-ink text-xs font-bold tracking-wider uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {hero.eyebrow}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-dark leading-[1.08] tracking-tight mb-5">
                {hero.headline} <br />
                <span className="text-accent">{hero.headlineAccent}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
                {hero.sub}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="#demo"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {hero.primaryCta}
                </Button>
                <Button variant="secondary" size="lg" href="#challenges">
                  {hero.secondaryCta}
                </Button>
              </div>
            </Reveal>

            {/* Quick trust proofs row */}
            <Reveal delay={0.5}>
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-6 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Zero Upfront Platform Cost
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Native Hospital EMR Integration
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  India Data Sovereignty
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
