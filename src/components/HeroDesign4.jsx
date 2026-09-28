import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { 
  ArrowLeft, ArrowRight, Activity, HeartPulse, Home, BarChart2, 
  ShieldCheck, Thermometer, Scale, Droplet, Baby
} from 'lucide-react';

export function HeroDesign4() {
  const [activeDeviceId, setActiveDeviceId] = useState(null);

  // Exact coordinates in 1000 x 750 unified coordinate space
  // CSS percentage mapping: left = (x / 1000) * 100%, top = (y / 750) * 100%
  // Laptop & Mobile bounds: x ~ 260 to 740, y ~ 225 to 525
  // Every line starts deep INSIDE the software and ends at the exact center (x, y) of the pod
  const devices = [
    {
      id: 'scale',
      name: "Digital Scale",
      metric: "68.5 kg",
      subtext: "Auto-synced via BLE",
      image: "/assets/devices/device_digital_scale.jpg",
      icon: <Scale className="w-3 h-3 text-white" />,
      badgeColor: "bg-purple-600",
      x: 480,
      y: 80,
      left: "48%",
      top: "10.7%",
      // Straight vertical line connecting laptop top (480, 290) to Scale center (480, 80)
      path: "M 480 290 L 480 80",
      color: "#9333EA"
    },
    {
      id: 'thermo',
      name: "IR Thermometer",
      metric: "98.6 °F",
      subtext: "Instant Forehead Scan",
      image: "/assets/devices/device_thermometer.jpg",
      icon: <Thermometer className="w-3 h-3 text-white" />,
      badgeColor: "bg-rose-500",
      x: 210,
      y: 150,
      left: "21%",
      top: "20%",
      // Curves smoothly from inside laptop (380, 310) to Thermometer center (210, 150)
      path: "M 380 310 C 320 240, 260 190, 210 150",
      color: "#F43F5E"
    },
    {
      id: 'bp',
      name: "Omron BP Monitor",
      metric: "128/82 mmHg",
      subtext: "Dual Sensor Detection",
      image: "/assets/devices/device_bp_monitor.jpg",
      icon: <HeartPulse className="w-3 h-3 text-white" />,
      badgeColor: "bg-pink-600",
      x: 790,
      y: 150,
      left: "79%",
      top: "20%",
      // Curves smoothly from inside laptop (580, 310) to Omron BP center (790, 150)
      path: "M 580 310 C 640 240, 710 190, 790 150",
      color: "#DB2777"
    },
    {
      id: 'fetal',
      name: "Fetal Doppler",
      metric: "142 bpm FHR",
      subtext: "Continuous Waveform",
      image: "/assets/devices/device_fetal_monitor.jpg",
      icon: <Baby className="w-3 h-3 text-white" />,
      badgeColor: "bg-sky-500",
      x: 90,
      y: 375,
      left: "9%",
      top: "50%",
      // Connects from inside laptop screen (330, 375) directly to Fetal Doppler center (90, 375)
      path: "M 330 375 L 90 375",
      color: "#0284C7"
    },
    {
      id: 'spo2',
      name: "Pulse Oximeter",
      metric: "98% SpO2",
      subtext: "Finger Plethysmograph",
      image: "/assets/devices/device_pulse_oximeter.jpg",
      icon: <Activity className="w-3 h-3 text-white" />,
      badgeColor: "bg-cyan-600",
      x: 910,
      y: 375,
      left: "91%",
      top: "50%",
      // Connects from inside mobile screen (660, 375) directly to Pulse Oximeter center (910, 375)
      path: "M 660 375 L 910 375",
      color: "#0891B2"
    },
    {
      id: 'ecg',
      name: "Portable ECG",
      metric: "Normal Sinus",
      subtext: "Lead-I Live Rhythm",
      image: "/assets/devices/device_ecg_monitor.jpg",
      icon: <HeartPulse className="w-3 h-3 text-white" />,
      badgeColor: "bg-indigo-600",
      x: 190,
      y: 630,
      left: "19%",
      top: "84%",
      // Curves from inside laptop base (360, 460) to ECG center (190, 630)
      path: "M 360 460 C 290 520, 240 570, 190 630",
      color: "#6366F1"
    },
    {
      id: 'glucose',
      name: "Glucometer",
      metric: "110 mg/dL",
      subtext: "Pre/Post Meal Telemetry",
      image: "/assets/devices/device_glucometer.jpg",
      icon: <Droplet className="w-3 h-3 text-white" />,
      badgeColor: "bg-amber-500",
      x: 830,
      y: 630,
      left: "83%",
      top: "84%",
      // Generously spaced curve from mobile base (640, 470) to Glucometer center (830, 630)
      path: "M 640 470 C 710 520, 770 570, 830 630",
      color: "#D97706"
    }
  ];

  return (
    <section className="relative w-full min-h-[94vh] bg-white text-slate-800 overflow-hidden flex flex-col justify-center font-sans">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <div className="absolute top-[0%] left-[-10%] w-[550px] h-[550px] bg-pink-100/40 rounded-full blur-[100px]" />
         <div className="absolute bottom-[-10%] right-[0%] w-[650px] h-[650px] bg-blue-100/40 rounded-full blur-[120px]" />
         {/* Sweeping Ribbon SVG */}
         <svg className="absolute bottom-0 left-0 w-full h-[400px] opacity-30 mix-blend-multiply" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,200 C300,300 600,100 1440,300 L1440,400 L0,400 Z" fill="url(#ribbon-grad-1)" />
            <path d="M0,250 C400,150 800,350 1440,250 L1440,400 L0,400 Z" fill="url(#ribbon-grad-2)" opacity="0.5" />
            <defs>
              <linearGradient id="ribbon-grad-1" x1="0" y1="0" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F472B6" stopOpacity="0.3" />
                <stop offset="1" stopColor="#60A5FA" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="ribbon-grad-2" x1="1440" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60A5FA" stopOpacity="0.3" />
                <stop offset="1" stopColor="#F472B6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
         </svg>
      </div>

      {/* Top Branding Bar */}
      <div className="absolute top-0 w-full z-40 px-6 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-4 bg-white/30 backdrop-blur-sm border-b border-white/50">
        <div className="flex items-center gap-3.5">
          <a href="/" title="OneCare Health" className="inline-flex items-center hover:opacity-90 transition-opacity">
            <img src="/assets/Onecare_Horizontal.png" alt="OneCare" className="h-7 sm:h-8 object-contain" />
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <a href="/design3" className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 text-xs font-mono font-bold transition-all shadow-sm">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Design 3</span>
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-screen">
        
        {/* Left Side: Copy & CTAs (50% split) */}
        <div className="lg:col-span-6 text-left space-y-6 z-20 pt-4 pr-0 lg:pr-6">
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.1] tracking-tight text-[#0F172A]">
              Your patients are at home.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] to-[#0044FF] block mt-2">
                Your care continues without interruption.
              </span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg lg:text-[20px] text-slate-600 leading-[1.6] max-w-lg font-medium">
              OneCare RPM connects patients, devices, and doctors into one continuous care system — so you don't wait for complications, you prevent them.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#demo" className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF007F] to-[#3B82F6] text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#experts" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#0F172A] font-bold text-lg border-2 border-slate-100 hover:border-slate-300 shadow-sm transition-all">
                Talk to Our Experts
              </a>
            </div>
          </Reveal>

          {/* Feature Callouts */}
          <Reveal delay={0.4}>
            <div className="flex flex-wrap items-center gap-5 pt-8 border-t border-slate-200/60 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 text-[#FF007F] flex items-center justify-center">
                  <Home className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-semibold text-slate-500 leading-tight">
                  Monitor<br/>Patients Remotely
                </div>
              </div>
              <div className="w-px h-8 bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-semibold text-slate-500 leading-tight">
                  Proactive<br/>Care Management
                </div>
              </div>
              <div className="w-px h-8 bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-semibold text-slate-500 leading-tight">
                  Better<br/>Patient Outcomes
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Clean, Spacious, Ultra-Premium Connected Ecosystem */}
        <Reveal delay={0.5} className="lg:col-span-6 relative w-full flex items-center justify-center z-10 select-none">
          
          {/* Main Ecosystem Container with 1000 x 750 unified coordinate space */}
          <div className="relative w-full max-w-[760px] aspect-[1000/750] flex items-center justify-center animate-ecosystem-float">

            {/* Subtle Ambient Backlight Glow behind software */}
            <div className="absolute inset-0 m-auto w-[420px] h-[420px] bg-gradient-to-tr from-pink-400/10 via-blue-400/10 to-indigo-400/10 rounded-full blur-[80px] pointer-events-none" />

            {/* SVG CONNECTION LINES LAYER (Rendered underneath software at z-10) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
              viewBox="0 0 1000 750"
              preserveAspectRatio="none"
            >
              {/* Continuous SVG lines: start inside software and end at device pod center */}
              {devices.map(dev => {
                const isActive = activeDeviceId === dev.id;
                return (
                  <g key={`path-group-${dev.id}`}>
                    {/* Glowing dashed telemetry ray */}
                    <path
                      d={dev.path}
                      fill="none"
                      stroke={dev.color}
                      strokeWidth={isActive ? "3.4" : "2.4"}
                      strokeDasharray="6 6"
                      strokeLinecap="round"
                      className="animate-dash"
                      opacity={isActive ? 1 : 0.85}
                    />

                    {/* Animated Energy Packet Circle traveling from device center into software */}
                    <circle r={isActive ? "4.5" : "3.5"} fill="#FFFFFF" stroke={dev.color} strokeWidth="2">
                      <animateMotion
                        dur={isActive ? "1.5s" : "2.5s"}
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

            {/* CENTER HUB: Clean, Appropriately Sized HD Software Mockup (Layered at z-20 over SVG lines) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[46%] max-w-[390px] sm:max-w-[410px] flex items-center justify-center">
              <div className="relative w-full group">
                <img 
                  src="/assets/hub_clean_software_hd.png" 
                  alt="OneCare RPM Dashboard & Mobile Experience"
                  className="w-full h-auto object-contain drop-shadow-[0_22px_45px_rgba(15,23,42,0.18)] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* ORBITING MEDICAL DEVICES: Pod circle centered exactly at (device.x, device.y) with z-30 */}
            {devices.map(device => {
              const isActive = activeDeviceId === device.id;
              return (
                <div
                  key={device.id}
                  style={{ left: device.left, top: device.top }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center cursor-pointer group"
                  onMouseEnter={() => setActiveDeviceId(device.id)}
                  onMouseLeave={() => setActiveDeviceId(null)}
                >
                  {/* Clean Minimal Circular Pod - Dead center at coordinate point */}
                  <div 
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] border-2 border-slate-100 transition-all duration-300 flex items-center justify-center p-2 group-hover:scale-110"
                    style={{ 
                      borderColor: isActive ? device.color : 'rgba(241, 245, 249, 1)',
                      boxShadow: isActive ? `0 12px 28px rgba(0,0,0,0.14), 0 0 16px ${device.color}35` : undefined
                    }}
                  >
                    {/* Crisp Device Image */}
                    <img 
                      src={device.image} 
                      alt={device.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Small Corner Category Icon Badge */}
                    <div className={`absolute top-0 right-0 w-5 h-5 rounded-full ${device.badgeColor} text-white shadow-sm flex items-center justify-center border-2 border-white`}>
                      {device.icon}
                    </div>
                  </div>

                  {/* Single Clean Subtle Caption (Positioned below the circle without offsetting center) */}
                  <span className="absolute top-full mt-2 text-[11px] font-semibold text-slate-700 tracking-tight whitespace-nowrap drop-shadow-xs pointer-events-none">
                    {device.name}
                  </span>

                  {/* Rich Interactive Telemetry Tooltip on Hover */}
                  <div className={`absolute -top-11 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50 bg-slate-900/95 backdrop-blur-md text-white text-[11px] font-medium py-1 px-3 rounded-lg shadow-xl whitespace-nowrap flex items-center gap-2 border border-slate-700/60 ${isActive ? 'opacity-100 -translate-y-1' : ''}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
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

      {/* Custom Keyframe Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dashFlow {
          to {
            stroke-dashoffset: -36;
          }
        }
        .animate-dash {
          animation: dashFlow 2.4s linear infinite;
        }

        @keyframes ecosystemFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        .animate-ecosystem-float {
          animation: ecosystemFloat 6s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}
