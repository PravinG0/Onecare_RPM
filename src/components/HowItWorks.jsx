import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { howItWorks } from '../data/content';
import { Reveal } from './ui/Reveal';
import { ArrowRight, CheckCircle2, ShieldAlert, Activity, Smartphone, Truck, Users } from 'lucide-react';

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    Users,          // Step 1: Enrollment
    Truck,          // Step 2: Device Ordering
    Smartphone,     // Step 3: Tech Verification
    Activity,       // Step 4: Device Provisioning
    Activity,       // Step 5: Patient Onboarding
    ShieldAlert,    // Step 6: Alerts & Recovery
    CheckCircle2,   // Step 7: Provider Visibility
  ];

  return (
    <section id="how-it-works" className="w-full bg-slate-dark text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background Dotted Matrix & Radial Accent Glow */}
      <div className="absolute inset-0 bg-dot-matrix-light opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header (Slide 6 Style) */}
        <div className="max-w-3xl mb-16 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-accent text-xs font-mono font-bold tracking-wider uppercase mb-4 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-accent" />
              The Care Protocol
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {howItWorks.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
              {howItWorks.intro}
            </p>
          </Reveal>
        </div>

        {/* 2-Column Split Layout: Step Rail (Left) & Active Step Canvas (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 7 Staggered Steps (Slide 6 Hexagon Badge Style) */}
          <div className="lg:col-span-7 space-y-3 text-left">
            {howItWorks.steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const StepIcon = stepIcons[idx] || Activity;
              const stepLabel = `0${idx + 1}`;

              return (
                <div
                  key={step.step || idx}
                  onClick={() => setActiveStep(idx)}
                  className={`group cursor-pointer rounded-2xl p-5 border transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-card border-accent shadow-lg shadow-accent/10 translate-x-2'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Hexagon / Pill Number Badge */}
                    <div
                      className={`w-11 h-11 rounded-xl shrink-0 flex items-center justify-center font-mono font-black text-sm transition-colors ${
                        isActive
                          ? 'bg-accent text-white shadow-md'
                          : 'bg-slate-dark text-gray-400 border border-slate-700 group-hover:text-white'
                      }`}
                    >
                      {stepLabel}
                    </div>

                    <div className="flex-1 min-w-0 flex items-center justify-between gap-4">
                      <h3
                        className={`text-base font-bold leading-snug transition-colors ${
                          isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        }`}
                      >
                        {step.title}
                      </h3>
                      
                      {isActive && (
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider bg-accent/20 text-accent px-2 py-0.5 rounded-full border border-accent/40">
                          Active Step
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Stage Telemetry Simulator */}
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <div className="rounded-3xl bg-slate-card border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Background architectural glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 text-left">
                <div className="flex items-center justify-between text-xs text-gray-400 font-mono border-b border-slate-700 pb-4 mb-6">
                  <span>Step {activeStep + 1} of 7</span>
                  <span className="text-accent font-bold">Automated Clinical Flow</span>
                </div>

                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-lg bg-accent/20 border border-accent/40 text-accent text-xs font-mono font-bold">
                    {howItWorks.steps[activeStep]?.step || `Step ${activeStep + 1}`} · {howItWorks.steps[activeStep]?.title}
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                    {howItWorks.steps[activeStep]?.title}
                  </h4>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {howItWorks.steps[activeStep].desc}
                  </p>

                  {/* Simulated Output Deliverable Box */}
                  <div className="mt-6 p-4 rounded-2xl bg-black/40 border border-slate-700 text-xs">
                    <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Clinical Milestone Deliverables:
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span>Real-time FHIR record creation in OneCare EMR</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span>Encrypted IoT device certificate provisioned</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span>Automated patient care plan rules synced to clinician dashboard</span>
                      </li>
                    </ul>
                  </div>

                  {/* Navigation Stepper Buttons */}
                  <div className="pt-6 flex items-center justify-between border-t border-slate-700 text-xs">
                    <button
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                      className="px-4 py-2 rounded-full border border-slate-700 text-gray-300 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition-all"
                    >
                      Previous Step
                    </button>
                    <button
                      disabled={activeStep === 6}
                      onClick={() => setActiveStep((prev) => Math.min(6, prev + 1))}
                      className="flex items-center gap-1 px-4 py-2 rounded-full bg-accent text-white font-bold hover:bg-accent-hover disabled:opacity-30 disabled:pointer-events-none transition-all"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
