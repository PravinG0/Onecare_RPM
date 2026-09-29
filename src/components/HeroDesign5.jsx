import React, { useState, useEffect, useRef } from 'react';
import { Reveal } from './ui/Reveal';
import { 
  ArrowLeft, ArrowRight, Activity, HeartPulse, Home, BarChart2, 
  ShieldCheck, Thermometer, Scale, Droplet, Baby, Radio, Zap,
  CheckCircle2, Sparkles, Waves
} from 'lucide-react';

export function HeroDesign5() {
  // Currently active device/telemetry stream (default: 'ecg')
  const [activeDeviceId, setActiveDeviceId] = useState('ecg');
  const canvasRef = useRef(null);
  const mousePosRef = useRef({ x: -100, y: -100, active: false });

  // 7 Connected Medical Devices & their Telemetry Profiles in 1000 x 820 space
  const devices = [
    {
      id: 'scale',
      name: "Digital Scale",
      metric: "68.5 kg",
      subtext: "Mass Stabilized · BMI 22.4",
      image: "/assets/devices/device_digital_scale.jpg",
      icon: <Scale className="w-3 h-3 text-white" />,
      badgeColor: "bg-purple-600",
      x: 500,
      y: 30,
      left: "50%",
      top: "3.6%",
      // Extra-long, prominent line reaching from laptop screen (250) up to scale (30)
      path: "M 499.5 250 L 500 30",
      color: "#9333EA",
      waveName: "Bio-Impedance Frequency Flux",
      waveRate: "50 kHz / 200 kHz Dual Frequency",
      calc: (cx, p) => {
        const t = cx / p;
        return -Math.sin(t * Math.PI * 2) * 15 + Math.sin(t * Math.PI * 6) * 5;
      }
    },
    {
      id: 'thermo',
      name: "IR Thermometer",
      metric: "98.6 °F",
      subtext: "Afebrile · Normal Core Temp",
      image: "/assets/devices/device_thermometer.jpg",
      icon: <Thermometer className="w-3 h-3 text-white" />,
      badgeColor: "bg-rose-500",
      x: 180,
      y: 115,
      left: "18%",
      top: "14%",
      path: "M 350 320 C 280 230, 230 160, 180 115",
      color: "#F43F5E",
      waveName: "Infrared Thermal Equilibrium",
      waveRate: "Micro-Variance ±0.04°F Stability",
      calc: (cx, p) => {
        const t = cx / p;
        return Math.sin(t * Math.PI * 4) * 6 + Math.cos(t * Math.PI * 10) * 2.5;
      }
    },
    {
      id: 'bp',
      name: "Omron BP Monitor",
      metric: "128/82 mmHg",
      subtext: "Systolic 128 · Diastolic 82 · MAP 97",
      image: "/assets/devices/device_bp_monitor.jpg",
      icon: <HeartPulse className="w-3 h-3 text-white" />,
      badgeColor: "bg-pink-600",
      x: 820,
      y: 115,
      left: "82%",
      top: "14%",
      path: "M 650 320 C 720 230, 770 160, 820 115",
      color: "#DB2777",
      waveName: "Arterial Pulse Pressure Waveform",
      waveRate: "Pulsatile Wave 72 bpm · Compliance Normal",
      calc: (cx, p) => {
        const t = cx / p;
        let y = -Math.sin(t * Math.PI * 2) * 28 + Math.cos(t * Math.PI * 4) * 6;
        if (cx > 65 && cx < 105) {
          y += Math.sin(((cx - 65) / 40) * Math.PI) * 8;
        }
        return y;
      }
    },
    {
      id: 'fetal',
      name: "Fetal Doppler",
      metric: "142 bpm FHR",
      subtext: "Continuous Ultrasound · Normal Variability",
      image: "/assets/devices/device_fetal_monitor.jpg",
      icon: <Baby className="w-3 h-3 text-white" />,
      badgeColor: "bg-sky-500",
      x: 75,
      y: 350,
      left: "7.5%",
      top: "43%",
      path: "M 310 370 L 75 350",
      color: "#0284C7",
      waveName: "Acoustic Doppler Ultrasound",
      waveRate: "142 bpm Fetal Rhythm · 2.5 MHz Transducer",
      calc: (cx, p) => {
        const t = cx / p;
        return -Math.sin(t * Math.PI * 2) * 20 + Math.sin(t * Math.PI * 8) * 4.5;
      }
    },
    {
      id: 'spo2',
      name: "Pulse Oximeter",
      metric: "98% SpO2",
      subtext: "Perfusion Index 4.8 · Pulse 72 bpm",
      image: "/assets/devices/device_pulse_oximeter.jpg",
      icon: <Activity className="w-3 h-3 text-white" />,
      badgeColor: "bg-cyan-600",
      x: 925,
      y: 350,
      left: "92.5%",
      top: "43%",
      path: "M 690 370 L 925 350",
      color: "#0891B2",
      waveName: "Infrared Photoplethysmogram (Pleth)",
      waveRate: "72 bpm · Dicrotic Notch Intact · SpO2 98%",
      calc: (cx, p) => {
        const t = cx / p;
        let y = -Math.sin(t * Math.PI * 2) * 23;
        if (cx > 55 && cx < 105) {
          y += Math.sin(((cx - 55) / 50) * Math.PI) * 9.5;
        }
        return y;
      }
    },
    {
      id: 'ecg',
      name: "Portable ECG",
      metric: "72 bpm Sinus",
      subtext: "Lead-II Rhythm · PR 160ms · QRS 88ms",
      image: "/assets/devices/device_ecg_monitor.jpg",
      icon: <HeartPulse className="w-3 h-3 text-white" />,
      badgeColor: "bg-indigo-600",
      x: 100,
      y: 655,
      left: "10%",
      top: "80%",
      // Clean outward path: stays completely to the left of the vital box
      path: "M 320 420 C 210 440, 130 530, 100 655",
      color: "#6366F1",
      waveName: "Authentic Lead-II Cardiac ECG",
      waveRate: "72 bpm Normal Sinus · 250 Hz Diagnostic Band",
      calc: (cx, p) => {
        if (cx > 30 && cx < 46) {
          return -Math.sin(((cx - 30) / 16) * Math.PI) * 10;
        } else if (cx >= 56 && cx < 61) {
          return 6.5;
        } else if (cx >= 61 && cx < 69) {
          return -Math.sin(((cx - 61) / 8) * Math.PI) * 44;
        } else if (cx >= 69 && cx < 75) {
          return 12;
        } else if (cx > 94 && cx < 124) {
          return -Math.sin(((cx - 94) / 30) * Math.PI) * 16;
        }
        return Math.sin(cx * 0.1) * 1.0;
      }
    },
    {
      id: 'glucose',
      name: "Glucometer",
      metric: "110 mg/dL",
      subtext: "Post-Prandial · 96% In-Range",
      image: "/assets/devices/device_glucometer.jpg",
      icon: <Droplet className="w-3 h-3 text-white" />,
      badgeColor: "bg-amber-500",
      x: 900,
      y: 655,
      left: "90%",
      top: "80%",
      // Clean outward path: stays completely to the right of the vital box
      path: "M 680 420 C 790 440, 870 530, 900 655",
      color: "#D97706",
      waveName: "Continuous Glucose Dynamic Flux",
      waveRate: "110 mg/dL · Glycemic Slope Neutral",
      calc: (cx, p) => {
        const t = cx / p;
        return -Math.sin(t * Math.PI * 2) * 16 + Math.cos(t * Math.PI * 6) * 4.5;
      }
    }
  ];

  const currentDevice = devices.find(d => d.id === activeDeviceId) || devices[5];

  // Real-time dynamic bio-telemetry waveform renderer (SLOWED DOWN for smooth, natural clinical pacing)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let offset = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const midY = h / 2;

      ctx.clearRect(0, 0, w, h);

      // 1. Telemetry CRT Grid (Precision clinical background)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
      ctx.lineWidth = 1;
      const step = 20;
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

      // 2. Base Wave Calculation (Slowed down to 0.65 for natural calm telemetry pace)
      const period = activeDeviceId === 'fetal' ? 95 : 180;
      offset += activeDeviceId === 'fetal' ? 0.9 : 0.65;

      ctx.beginPath();
      ctx.lineWidth = 2.4;

      // Dynamic electric gradient matching active device theme
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, `${currentDevice.color}25`);
      grad.addColorStop(0.3, `${currentDevice.color}B0`);
      grad.addColorStop(0.7, '#FFFFFF');
      grad.addColorStop(1, `${currentDevice.color}40`);
      ctx.strokeStyle = grad;

      for (let x = 0; x <= w; x += 2) {
        const cycleX = (x + offset) % period;
        let yDelta = currentDevice.calc(cycleX, period);

        // Interactive mouse hover ripple distortion
        if (mousePosRef.current.active) {
          const dist = Math.abs(x - mousePosRef.current.x);
          if (dist < 70) {
            const ripple = Math.sin((dist / 70) * Math.PI) * 12;
            yDelta += (dist < 35 ? -ripple : ripple);
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

      // 3. Glowing leading laser sweep beam (Slowed down proportionally)
      const sweepX = (offset * 1.5) % w;
      const sweepGrad = ctx.createLinearGradient(sweepX - 35, 0, sweepX + 10, 0);
      sweepGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      sweepGrad.addColorStop(0.8, `${currentDevice.color}35`);
      sweepGrad.addColorStop(1, 'rgba(255, 255, 255, 0.7)');

      ctx.fillStyle = sweepGrad;
      ctx.fillRect(sweepX - 35, 0, 45, h);

      // 4. Interactive cursor reticle target
      if (mousePosRef.current.active && mousePosRef.current.x >= 0 && mousePosRef.current.x <= w) {
        const mx = mousePosRef.current.x;
        ctx.strokeStyle = `${currentDevice.color}90`;
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
  }, [activeDeviceId, currentDevice]);

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
    <section className="relative w-full min-h-[96vh] bg-[#FAFBFD] text-slate-800 overflow-hidden flex flex-col justify-center font-sans">
      
      {/* BACKGROUND ELEMENTS (Clean neutral medical atmosphere, no colored popping blobs) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-slate-100/70 rounded-full blur-[110px]" />
        <div className="absolute bottom-[-10%] right-[0%] w-[650px] h-[650px] bg-slate-100/60 rounded-full blur-[130px]" />
        
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

        {/* Dynamic Sweeping Ribbon SVG */}
        <svg className="absolute bottom-0 left-0 w-full h-[380px] opacity-20 mix-blend-multiply" viewBox="0 0 1440 380" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,180 C320,280 620,90 1440,260 L1440,380 L0,380 Z" fill="url(#ribbon-grad-5-1)" />
          <path d="M0,220 C420,120 820,320 1440,210 L1440,380 L0,380 Z" fill="url(#ribbon-grad-5-2)" opacity="0.6" />
          <defs>
            <linearGradient id="ribbon-grad-5-1" x1="0" y1="0" x2="1440" y2="380" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" stopOpacity="0.25" />
              <stop offset="1" stopColor="#EC4899" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="ribbon-grad-5-2" x1="1440" y1="0" x2="0" y2="380" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" stopOpacity="0.25" />
              <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* TOP BRANDING BAR */}
      <div className="absolute top-0 w-full z-40 px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-4 bg-white/70 backdrop-blur-md border-b border-slate-200/60 shadow-xs">
        <div className="flex items-center gap-3.5">
          <a href="/" title="OneCare Health" className="inline-flex items-center hover:opacity-90 transition-opacity">
            <img src="/assets/Onecare_Horizontal.png" alt="OneCare" className="h-7 sm:h-8 object-contain" />
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-slate-600 bg-slate-100 border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Design 5 · Continuous Telemetry & Hardware Hub
          </span>
        </div>

        {/* Route Switching Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="/design4" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 text-xs font-mono font-semibold transition-all shadow-xs">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Design 4</span>
          </a>
          <a href="/design2" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 text-xs font-mono font-semibold transition-all shadow-xs">
            <Waves className="w-3.5 h-3.5" />
            <span>Design 2</span>
          </a>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-mono font-bold uppercase shadow-sm">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Live Waveform Stream</span>
          </div>
        </div>
      </div>

      {/* MAIN HERO CONTENT AREA */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[92vh]">
        
        {/* LEFT COLUMN: Strategic Copy, Live Device Switcher & CTAs */}
        <div className="lg:col-span-6 text-left space-y-5 z-20 pt-2 pr-0 lg:pr-6">

          {/* Monumental Headline (Clean single-line top sentence, prefix pill removed) */}
          <Reveal delay={0.08}>
            <h1 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[50px] font-black leading-[1.14] tracking-tight text-[#0F172A]">
              Your patients are at home.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] via-[#6366F1] to-[#0284C7] block mt-1.5">
                Your care continues without interruption.
              </span>
            </h1>
          </Reveal>

          {/* Core Subtitle with Generous Line Height and Size */}
          <Reveal delay={0.16}>
            <p className="text-base sm:text-lg text-slate-600 leading-[1.65] max-w-xl font-normal">
              OneCare RPM unifies medical-grade devices, cellular telemetry, and clinical dashboards into one autonomous care pipeline — streaming continuous bio-signals directly into clinician workflows.
            </p>
          </Reveal>

          {/* Interactive Live Signal Stream Selector Bar (Quick Switchers) */}
          <Reveal delay={0.24}>
            <div className="pt-1">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 font-semibold mb-2.5">
                <span className="flex items-center gap-2 text-slate-700 font-bold">
                  <Activity className="w-4 h-4 text-indigo-600" />
                  CLICK DEVICE TO STREAM TELEMETRY:
                </span>
                <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  ● 250 Hz LIVE
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {devices.map(dev => {
                  const isActive = activeDeviceId === dev.id;
                  return (
                    <button
                      key={`btn-${dev.id}`}
                      onClick={() => setActiveDeviceId(dev.id)}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all duration-200 border cursor-pointer ${
                        isActive
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-105'
                          : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-2xs hover:border-slate-300'
                      }`}
                    >
                      <span 
                        className="w-2.5 h-2.5 rounded-full" 
                        style={{ backgroundColor: dev.color }}
                      />
                      <span>{dev.name.split(' ')[0]}</span>
                      <span className={`text-[10px] ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                        {dev.metric.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Spacious Live Device Diagnostic Card */}
          <Reveal delay={0.32}>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between gap-4 max-w-xl">
              <div className="flex items-center gap-3.5">
                <div 
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-xs"
                  style={{ backgroundColor: currentDevice.color }}
                >
                  {currentDevice.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-slate-900 text-base">{currentDevice.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                      Connected
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {currentDevice.subtext}
                  </div>
                </div>
              </div>

              <div className="text-right font-mono">
                <div className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  {currentDevice.metric}
                </div>
                <div className="text-[10px] text-slate-400">
                  Latency: 110ms
                </div>
              </div>
            </div>
          </Reveal>

          {/* Action CTAs */}
          <Reveal delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#demo" 
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF007F] via-[#6366F1] to-[#3B82F6] text-white font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#experts" 
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-[#0F172A] font-bold text-base sm:text-lg border-2 border-slate-200 hover:border-slate-400 shadow-xs hover:bg-slate-50 transition-all"
              >
                Talk to Our Experts
              </a>
            </div>
          </Reveal>

          {/* Trust Highlights Strip */}
          <Reveal delay={0.48}>
            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-semibold text-slate-600">FDA-Cleared Protocols</span>
              </div>
              <div className="w-px h-4 bg-slate-300 hidden sm:block" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-semibold text-slate-600">Cellular & BLE Hub</span>
              </div>
              <div className="w-px h-4 bg-slate-300 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-semibold text-slate-600">Zero-Setup for Patients</span>
              </div>
            </div>
          </Reveal>

        </div>

        {/* RIGHT COLUMN: Connected Device Ecosystem + Live Waveform Oscilloscope Dock */}
        <Reveal delay={0.4} className="lg:col-span-6 relative w-full flex items-center justify-center z-10 select-none">
          
          {/* Main Coordinate Space Container: 1000 x 820 */}
          <div className="relative w-full max-w-[760px] aspect-[1000/820] flex items-center justify-center animate-ecosystem-float">

            {/* SVG TELEMETRY CIRCUIT LAYER (z-10) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
              viewBox="0 0 1000 820"
              preserveAspectRatio="none"
            >
              {/* Telemetry circuit traces for each of the 7 devices */}
              {devices.map(dev => {
                const isActive = activeDeviceId === dev.id;
                return (
                  <g key={`path-group-${dev.id}`}>
                    {/* Pulsing dashed telemetry ray */}
                    <path
                      d={dev.path}
                      fill="none"
                      stroke={dev.color}
                      strokeWidth={isActive ? "3.2" : "2.0"}
                      strokeDasharray="6 6"
                      strokeLinecap="round"
                      className="animate-dash"
                      opacity={isActive ? 1 : 0.65}
                    />

                    {/* Animated Energy Packet Circle traveling at calm, steady speed */}
                    <circle r={isActive ? "4.5" : "3.5"} fill="#FFFFFF" stroke={dev.color} strokeWidth="2">
                      <animateMotion
                        dur={isActive ? "2.8s" : "4.0s"}
                        repeatCount="indefinite"
                        path={dev.path}
                        keyPoints="1;0"
                        keyTimes="0;1"
                      />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* CENTER HUB: Clean HD Software Mockup (Layered at z-20, positioned at top: 40%) */}
            <div className="absolute left-[50%] top-[40%] -translate-x-1/2 -translate-y-1/2 z-20 w-[46%] max-w-[390px] flex items-center justify-center">
              <div className="relative w-full group">
                <img 
                  src="/assets/hub_clean_software_hd.png" 
                  alt="OneCare RPM Devices Portal & Mobile Experience"
                  className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(15,23,42,0.14)] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* INTEGRATED LIVE TELEMETRY OSCILLOSCOPE DOCK (Positioned with clear gap at top: 78%) */}
            <div 
              className="absolute left-[50%] top-[78%] -translate-x-1/2 -translate-y-1/2 z-25 w-[48%] max-w-[390px] rounded-2xl bg-[#090D16] text-white p-3 border shadow-2xl backdrop-blur-xl transition-all duration-300"
              style={{ borderColor: `${currentDevice.color}80`, boxShadow: `0 20px 45px rgba(0,0,0,0.32), 0 0 24px ${currentDevice.color}35` }}
            >
              {/* Telemetry Console Header */}
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/90 text-[10px] font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full animate-pulse shadow-xs" style={{ backgroundColor: currentDevice.color }} />
                  <span className="font-bold text-white tracking-wider uppercase text-[11px]">
                    {currentDevice.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400 text-[9px]">STREAM:</span>
                  <span className="font-bold px-2 py-0.5 rounded text-[11px]" style={{ backgroundColor: `${currentDevice.color}25`, color: '#FFFFFF', border: `1px solid ${currentDevice.color}80` }}>
                    {currentDevice.metric}
                  </span>
                </div>
              </div>

              {/* The HTML5 Real-Time Waveform Canvas (From Design 2, slowed down) */}
              <div 
                className="relative w-full h-[74px] sm:h-[84px] my-1.5 rounded-xl bg-[#030712] overflow-hidden border border-slate-800/90 cursor-crosshair shadow-inner"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-full block"
                />
                
                {/* Floating Waveform Name & Sample Rate Tag */}
                <div className="absolute top-1.5 left-2.5 pointer-events-none flex items-center gap-2">
                  <span className="text-[9px] font-mono text-slate-300 tracking-tight font-medium">
                    {currentDevice.waveName}
                  </span>
                </div>

                <div className="absolute bottom-1.5 right-2.5 pointer-events-none text-[8.5px] font-mono text-slate-400">
                  250 Hz · 12-Bit ADC
                </div>
              </div>

              {/* Telemetry Console Footer */}
              <div className="flex items-center justify-between pt-1 text-[9px] font-mono">
                <span className="text-slate-300 truncate max-w-[210px]">{currentDevice.waveRate}</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  SYNC OK
                </span>
              </div>
            </div>

            {/* ORBITING 7 MEDICAL DEVICE PODS (z-30) - Clean white pods, no popping background color */}
            {devices.map(device => {
              const isActive = activeDeviceId === device.id;
              return (
                <div
                  key={device.id}
                  style={{ left: device.left, top: device.top }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center cursor-pointer group"
                  onClick={() => setActiveDeviceId(device.id)}
                  onMouseEnter={() => setActiveDeviceId(device.id)}
                >
                  {/* Circular Pod Container: clean white background, clean border, no background color pop */}
                  <div 
                    className="relative rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] border-2 transition-all duration-300 flex items-center justify-center p-2 group-hover:scale-105"
                    style={{ 
                      width: '70px',
                      height: '70px',
                      borderColor: isActive ? device.color : '#E2E8F0',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.06)'
                    }}
                  >
                    {/* Device Image */}
                    <img 
                      src={device.image} 
                      alt={device.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Small Corner Category Icon Badge */}
                    <div className={`absolute top-0 right-0 w-5 h-5 rounded-full ${device.badgeColor} text-white shadow-xs flex items-center justify-center border-2 border-white`}>
                      {device.icon}
                    </div>
                  </div>

                  {/* Clean Device Caption */}
                  <span className={`absolute top-full mt-1 text-[11px] font-bold tracking-tight whitespace-nowrap transition-colors pointer-events-none ${isActive ? 'text-slate-900 font-extrabold' : 'text-slate-600'}`}>
                    {device.name}
                  </span>

                  {/* Rich Interactive Telemetry Tooltip on Hover Only */}
                  <div className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50 bg-slate-900/95 backdrop-blur-md text-white text-[10px] font-medium py-1 px-2.5 rounded-lg shadow-xl whitespace-nowrap flex items-center gap-1.5 border border-slate-700/60">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: device.color }} />
                    <span className="font-bold text-slate-200">{device.metric}</span>
                    <span className="text-slate-400">•</span>
                    <span>{device.subtext}</span>
                  </div>

                </div>
              );
            })}

          </div>
        </Reveal>

      </div>

      {/* Embedded CSS Animations (Slowed down for smooth clinical flow) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dashFlow {
          to {
            stroke-dashoffset: -36;
          }
        }
        .animate-dash {
          animation: dashFlow 4.5s linear infinite;
        }

        @keyframes ecosystemFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-ecosystem-float {
          animation: ecosystemFloat 7s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}
