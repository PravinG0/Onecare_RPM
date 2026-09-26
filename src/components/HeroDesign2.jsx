import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { hero } from '../data/content';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Activity,
  HeartPulse,
  Radio,
  Sparkles,
  Lock,
  Cpu
} from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function HeroDesign2() {
  const [activeSignal, setActiveSignal] = useState('cardiac'); // 'cardiac' | 'pleth' | 'arterial'
  const canvasRef = useRef(null);
  const mousePosRef = useRef({ x: -100, y: -100, active: false });

  // Real-time dynamic bio-telemetry waveform renderer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let offset = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const midY = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Grid lines (faint precision medical telemetry grid)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const step = 24;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Base Wave Calculation based on selected bio-signal
      const period = 180;
      offset += 1.8;

      ctx.beginPath();
      ctx.lineWidth = 2.5;

      // Gradient stroke for electric indigo medical glow
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, 'rgba(85, 99, 235, 0.15)');
      grad.addColorStop(0.3, 'rgba(85, 99, 235, 0.7)');
      grad.addColorStop(0.7, 'rgba(129, 140, 248, 1)');
      grad.addColorStop(1, 'rgba(85, 99, 235, 0.3)');
      ctx.strokeStyle = grad;

      for (let x = 0; x <= w; x += 2) {
        const cycleX = (x + offset) % period;
        let yDelta = 0;

        if (activeSignal === 'cardiac') {
          // Authentic Lead II ECG waveform
          if (cycleX > 30 && cycleX < 45) {
            // P wave
            yDelta = -Math.sin(((cycleX - 30) / 15) * Math.PI) * 10;
          } else if (cycleX >= 55 && cycleX < 60) {
            // Q dip
            yDelta = 6;
          } else if (cycleX >= 60 && cycleX < 68) {
            // R tall spike
            yDelta = -Math.sin(((cycleX - 60) / 8) * Math.PI) * 44;
          } else if (cycleX >= 68 && cycleX < 74) {
            // S dip
            yDelta = 12;
          } else if (cycleX > 90 && cycleX < 120) {
            // T wave
            yDelta = -Math.sin(((cycleX - 90) / 30) * Math.PI) * 16;
          }
        } else if (activeSignal === 'pleth') {
          // Smooth dicrotic pulse oximetry waveform
          const t = cycleX / period;
          yDelta = -Math.sin(t * Math.PI * 2) * 22;
          if (cycleX > 60 && cycleX < 110) {
            // Dicrotic notch
            yDelta += Math.sin(((cycleX - 60) / 50) * Math.PI) * 9;
          }
        } else {
          // Arterial pressure wave
          const t = cycleX / period;
          yDelta = -Math.sin(t * Math.PI * 2) * 28 + Math.cos(t * Math.PI * 4) * 6;
        }

        // Mouse hover interactive ripple distortion
        if (mousePosRef.current.active) {
          const dist = Math.abs(x - mousePosRef.current.x);
          if (dist < 80) {
            const ripple = Math.sin((dist / 80) * Math.PI) * 14;
            yDelta += (dist < 40 ? -ripple : ripple);
          }
        }

        const y = midY + yDelta;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();

      // Glowing leading laser sweep beam
      const sweepX = (offset * 1.5) % w;
      const sweepGrad = ctx.createLinearGradient(sweepX - 40, 0, sweepX + 10, 0);
      sweepGrad.addColorStop(0, 'rgba(85, 99, 235, 0)');
      sweepGrad.addColorStop(0.8, 'rgba(165, 180, 252, 0.4)');
      sweepGrad.addColorStop(1, 'rgba(255, 255, 255, 0.8)');

      ctx.fillStyle = sweepGrad;
      ctx.fillRect(sweepX - 40, 0, 50, h);

      // Interactive cursor reticle
      if (mousePosRef.current.active && mousePosRef.current.x >= 0 && mousePosRef.current.x <= w) {
        const mx = mousePosRef.current.x;
        ctx.strokeStyle = 'rgba(85, 99, 235, 0.6)';
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(mx, 0);
        ctx.lineTo(mx, h);
        ctx.stroke();
        ctx.setLineDash([]);

        // Reticle target circle
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(mx, midY, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeSignal]);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mousePosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    };
  };

  const handleMouseLeave = () => {
    mousePosRef.current.active = false;
  };

  return (
    <section className="relative w-full min-h-[92vh] bg-gradient-to-br from-indigo-50 via-white to-white text-slate-800 overflow-hidden flex flex-col justify-between border-b border-indigo-100">
      
      {/* Full-Bleed Atmospheric Medical Backdrop with Vignettes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/hero-workstation.jpg"
          alt="Remote Patient Monitoring Workstation"
          className="w-full h-full object-cover object-center grayscale contrast-125 opacity-[0.08] scale-105"
        />
        {/* Cinematic Multi-Stop Lighting Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_35%,rgba(85,99,235,0.1),transparent_75%)]" />
        <div className="absolute inset-0 bg-dot-matrix opacity-[0.04]" />
      </div>

      {/* Top Integrated Branding & Route Navigation Bar */}
      <div className="w-full border-b border-indigo-100 bg-white/60 backdrop-blur-md relative z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-4">
          
          {/* OneCare Brand Logo on Crisp White Badge */}
          <div className="flex items-center gap-3.5">
            <a
              href="/"
              title="OneCare Health"
              className="bg-white px-3.5 py-1.5 rounded-xl shadow-md hover:opacity-95 transition-opacity inline-flex items-center"
            >
              <img
                src="/assets/Onecare_Horizontal.png"
                alt="OneCare"
                className="h-7 sm:h-8 object-contain"
              />
            </a>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-slate-600 bg-slate-100 border border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Continuous Hospital-to-Home RPM
            </span>
          </div>

          {/* Quick Route Switcher & Live Fleet Status */}
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 text-xs font-mono transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Design 1 (Rose)</span>
            </a>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent text-white text-xs font-mono font-bold tracking-wide uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              Live Telemetry
            </div>
          </div>

        </div>
      </div>

      {/* Main Centered Editorial Stage (Zero Content Clutter, Pure Cinematic Impact) */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 pt-6 pb-6 sm:pt-8 sm:pb-8 text-center flex-1 flex flex-col justify-center items-center">
        
        {/* High-Tech Eyebrow Pill */}
        <Reveal delay={0.06}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-[11px] font-mono font-bold tracking-widest uppercase mb-3 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>CONTINUOUS REMOTE PATIENT MONITORING</span>
          </div>
        </Reveal>

        {/* Monumental Headline */}
        <Reveal delay={0.12}>
          <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-3 max-w-3xl">
            Your patients are at home. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-500">
              Your care continues without interruption.
            </span>
          </h1>
        </Reveal>

        {/* Refined Subtitle */}
        <Reveal delay={0.18}>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-5 font-normal">
            {hero.sub}
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.24}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#FF5196] to-[#2E68FF] hover:from-[#E63E82] hover:to-[#1A50E5] text-white font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-[#2E68FF]/30 hover:shadow-[#FF5196]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#challenges"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm tracking-wide shadow-sm transition-all duration-200"
            >
              <span>{hero.secondaryCta}</span>
            </a>
          </div>
        </Reveal>

        {/* ========================================================================= */}
        {/* "THINK DIFFERENTLY": THE BIO-SIGNAL HORIZON (Visual & Interactive Canvas) */}
        {/* Zero fake cards, zero text clutter — Pure dynamic medical telemetry        */}
        {/* ========================================================================= */}
        <Reveal delay={0.3} className="w-full max-w-4xl">
          <div className="w-full rounded-2xl bg-white/80 border border-indigo-100/60 backdrop-blur-xl p-3.5 sm:p-4 shadow-2xl ring-1 ring-black/5 text-left">
            
            {/* Bio-Signal Header & Interactive Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-200 text-xs font-mono">
              
              <div className="flex items-center gap-2 text-slate-600">
                <Radio className="w-3.5 h-3.5 text-accent animate-pulse" />
                <span className="font-bold text-slate-800 text-[11px] sm:text-xs tracking-wide">
                  Active Continuous Bio-Stream
                </span>
                <span className="hidden sm:inline-block text-gray-500">·</span>
                <span className="hidden sm:inline-block text-[11px] text-slate-500">Glide cursor across telemetry</span>
              </div>

              {/* Multi-Signal Waveform Mode Selector */}
              <div className="inline-flex items-center rounded-lg bg-slate-100 p-0.5 border border-slate-200 gap-1">
                <button
                  onClick={() => setActiveSignal('cardiac')}
                  className={`px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono transition-all ${
                    activeSignal === 'cardiac'
                      ? 'bg-accent text-white font-bold shadow'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
                  }`}
                >
                  Cardiac Lead II
                </button>
                <button
                  onClick={() => setActiveSignal('pleth')}
                  className={`px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono transition-all ${
                    activeSignal === 'pleth'
                      ? 'bg-accent text-white font-bold shadow'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
                  }`}
                >
                  Pulse Pleth (SpO₂)
                </button>
                <button
                  onClick={() => setActiveSignal('arterial')}
                  className={`px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono transition-all ${
                    activeSignal === 'arterial'
                      ? 'bg-accent text-white font-bold shadow'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
                  }`}
                >
                  Arterial BP Wave
                </button>
              </div>

            </div>

            {/* Interactive Telemetry Canvas */}
            <div className="relative w-full h-20 sm:h-24 my-1 rounded-lg overflow-hidden bg-black/70 cursor-crosshair">
              <canvas
                ref={canvasRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full h-full block"
              />
              <div className="absolute top-2 left-3 flex items-center gap-1.5 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  24/7 Real-Time Telemetry · Sampling 250 Hz
                </span>
              </div>
              <div className="absolute bottom-1.5 right-3 pointer-events-none">
                <span className="text-[10px] font-mono text-gray-500">
                  AES-256 Sovereign Encryption
                </span>
              </div>
            </div>

            {/* Ultra-Clean 3-Node Architecture Strip */}
            <div className="pt-2.5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-mono text-slate-600">
              <div className="flex items-center gap-2 px-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Patient at Home: Cellular Auto-Link</span>
              </div>
              <div className="flex items-center gap-2 px-1 sm:justify-center border-t sm:border-t-0 sm:border-x border-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                <span>OneCare Sovereign Engine (India)</span>
              </div>
              <div className="flex items-center gap-2 px-1 sm:justify-end border-t sm:border-t-0 border-slate-200">
                <Cpu className="w-3.5 h-3.5 text-accent" />
                <span>Hospital EMR Direct Ingestion</span>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Minimal Bottom Trust Footprint */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-[11px] sm:text-xs text-slate-500 font-mono">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
            Zero Upfront Hardware Cost
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
            Native Hospital EMR Integration
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
            India Sovereign Cloud
          </span>
        </div>

      </div>

    </section>
  );
}
