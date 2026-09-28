import React from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowLeft, ArrowRight, Cloud, HeartPulse, Thermometer, Weight, Activity, Baby, Droplet, Smartphone, Laptop } from 'lucide-react';

export function HeroDesign3() {
  return (
    <section className="relative w-full min-h-[92vh] bg-gradient-to-br from-[#F0FAFB] via-[#E8F6F8] to-[#E0F2F5] text-slate-800 overflow-hidden flex flex-col justify-center font-sans">
      
      {/* Background ambient shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* Top Branding Bar */}
      <div className="absolute top-0 w-full border-b border-cyan-900/5 bg-white/40 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <a href="/" title="OneCare Health" className="bg-white px-3.5 py-1.5 rounded-xl shadow-sm hover:opacity-90 transition-opacity inline-flex items-center">
              <img src="/assets/Onecare_Horizontal.png" alt="OneCare" className="h-7 sm:h-8 object-contain" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 text-xs font-mono transition-all">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Design 1</span>
            </a>
            <a href="/design2" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 text-xs font-mono transition-all">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Design 2</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pt-28 pb-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-5 text-left space-y-7 z-20">
          <Reveal delay={0.1}>
            <div className="text-[11px] font-bold tracking-[0.25em] text-slate-500 uppercase mb-4">
              Connected Care. Smarter Outcomes.
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#1A1F2C] leading-[1.1] tracking-tight">
              AI-Powered <br/>
              Remote Patient <br/>
              Monitoring <span className="text-[#00AEEF]">(RPM)</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
              OneCare RPM connects FDA-cleared devices to the same EHR your providers chart in, automating CPT billing for 99453, 99454, 99457, and 99458 each month. Practices report $42 to $250 in monthly revenue per enrolled patient, with no separate billing system or middleware required.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#demo" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1A1F2C] font-bold text-sm shadow-md hover:shadow-lg transition-all border border-slate-100">
                Schedule Your Free Demo
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1A1F2C] transition-colors" />
              </a>
              <a href="#trial" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#39B54A] hover:bg-[#2F9E3D] text-white font-bold text-sm shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all">
                Get 14 Days Free Trial
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Complex Device Cloud Graphic */}
        <Reveal delay={0.4} className="lg:col-span-7 relative w-full h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center">
          
          <div className="relative w-full max-w-[800px] h-full">
            
            {/* Center Cloud Hub */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-20 bg-gradient-to-b from-[#40C4FF] to-[#0091EA] rounded-full flex items-center justify-center shadow-xl shadow-blue-500/20 z-30 transform scale-110">
               {/* Decorative cloud puffs using pseudo-elements simulated with divs */}
               <div className="absolute -top-6 left-4 w-16 h-16 bg-gradient-to-b from-[#40C4FF] to-[#0091EA] rounded-full" />
               <div className="absolute -top-3 right-4 w-12 h-12 bg-gradient-to-b from-[#40C4FF] to-[#0091EA] rounded-full" />
               <div className="relative text-white font-black text-4xl leading-none z-10 mb-1">+</div>
            </div>

            {/* Laptop Dashboard (Bottom Center) */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[70%] sm:w-[60%] z-20">
              <div className="w-full bg-[#1A1F2C] p-2 rounded-t-xl rounded-b-md shadow-2xl relative">
                <div className="w-full aspect-[16/10] bg-white rounded overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="Dashboard" className="w-full h-full object-cover opacity-80" />
                   {/* Overlay to simulate OneCare dashboard feel */}
                   <div className="absolute inset-0 bg-white/90 p-4">
                      <div className="w-full h-8 bg-slate-100 rounded mb-4 flex items-center px-3 gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#00AEEF]" />
                        <div className="w-24 h-2 bg-slate-300 rounded" />
                      </div>
                      <div className="grid grid-cols-4 gap-3 mb-4">
                        {[1,2,3,4].map(i => <div key={i} className="h-12 bg-slate-50 rounded border border-slate-100" />)}
                      </div>
                      <div className="w-full h-24 bg-slate-50 rounded border border-slate-100" />
                   </div>
                </div>
              </div>
              <div className="w-[110%] h-3 bg-slate-300 rounded-b-xl -ml-[5%] shadow-md flex justify-center">
                <div className="w-16 h-1 bg-slate-400 rounded-b-md" />
              </div>
            </div>

            {/* Phone App (Bottom Right) */}
            <div className="absolute bottom-[2%] right-[5%] w-[20%] sm:w-[18%] z-30">
              <div className="w-full aspect-[9/19] bg-white border-[6px] border-[#1A1F2C] rounded-[2rem] shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-[#1A1F2C] rounded-b-xl z-10" />
                <div className="w-full h-full bg-slate-50 p-3 pt-6 flex flex-col gap-3">
                   <div className="w-full h-6 bg-teal-100/50 rounded flex items-center justify-center">
                     <div className="w-3 h-3 rounded-full bg-teal-400 mr-2" />
                     <div className="w-12 h-1.5 bg-teal-600/20 rounded" />
                   </div>
                   {[1,2,3,4].map(i => <div key={i} className="w-full h-8 bg-white rounded shadow-sm" />)}
                </div>
              </div>
            </div>

            {/* Connecting dashed lines (simplified using SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-10" style={{ filter: 'drop-shadow(0 0 2px rgba(0,174,239,0.5))' }}>
              {/* Draw some curved dashed lines from devices to center cloud */}
              <path d="M 200 150 Q 300 250 400 300" fill="transparent" stroke="#00AEEF" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 600 150 Q 500 250 400 300" fill="transparent" stroke="#00AEEF" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 150 400 Q 250 350 400 300" fill="transparent" stroke="#00AEEF" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 650 400 Q 550 350 400 300" fill="transparent" stroke="#00AEEF" strokeWidth="2" strokeDasharray="6 6" />
              {/* From cloud to laptop */}
              <path d="M 400 350 L 400 450" fill="transparent" stroke="#00AEEF" strokeWidth="3" strokeDasharray="6 6" />
            </svg>

            {/* FLOATING DEVICES */}

            {/* 1. BP Monitor (Top Left) */}
            <div className="absolute top-[10%] left-[15%] flex flex-col items-center gap-2 z-20">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg shadow-slate-200/50 flex items-center justify-center p-3 relative">
                <img src="/assets/devices/device_bp_monitor.jpg" alt="BP Monitor" className="w-full h-full object-contain mix-blend-multiply" />
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border border-red-200 text-red-500 flex items-center justify-center shadow-sm">
                  <HeartPulse className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-[11px] font-bold text-[#1A1F2C] text-center leading-tight">
                FORA TN'G<br/>BP Monitor
              </div>
            </div>

            {/* 2. Thermometer (Top Center-Left) */}
            <div className="absolute top-[0%] left-[38%] flex flex-col items-center gap-2 z-20">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg shadow-slate-200/50 flex items-center justify-center p-3 relative">
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border border-red-200 text-red-500 flex items-center justify-center shadow-sm">
                  <Thermometer className="w-3.5 h-3.5" />
                </div>
                {/* Fallback visual if thermometer image isn't available, but we use an icon instead */}
                <div className="w-10 h-14 bg-slate-100 rounded-full border-2 border-slate-200 flex items-center justify-center">
                   <div className="w-2 h-6 bg-red-400 rounded-full" />
                </div>
              </div>
              <div className="text-[11px] font-bold text-[#1A1F2C] text-center leading-tight">
                FORA IR42<br/>Thermometer
              </div>
            </div>

            {/* 3. Scale (Top Center-Right) */}
            <div className="absolute top-[2%] right-[25%] flex flex-col items-center gap-2 z-20">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg shadow-slate-200/50 flex items-center justify-center p-3 relative">
                <img src="/assets/devices/device_digital_scale.jpg" alt="Scale" className="w-full h-full object-contain mix-blend-multiply" />
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border border-blue-200 text-blue-500 flex items-center justify-center shadow-sm">
                  <Weight className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-[11px] font-bold text-[#1A1F2C] text-center leading-tight">
                FORA TN'G<br/>Scale 550
              </div>
            </div>

            {/* 4. SpO2 (Right Side) */}
            <div className="absolute top-[18%] right-[5%] flex flex-col items-center gap-2 z-20">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg shadow-slate-200/50 flex items-center justify-center p-3 relative">
                <img src="/assets/devices/device_pulse_oximeter.jpg" alt="SpO2" className="w-full h-full object-contain mix-blend-multiply" />
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border border-blue-200 text-blue-500 flex items-center justify-center shadow-sm">
                  <div className="text-[9px] font-bold">O₂</div>
                </div>
              </div>
              <div className="text-[11px] font-bold text-[#1A1F2C] text-center leading-tight">
                FORA TN'G<br/>SpO2
              </div>
            </div>

            {/* 5. Glucometer (Far Right Middle) */}
            <div className="absolute top-[45%] right-[0%] flex flex-col items-center gap-2 z-20">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg shadow-slate-200/50 flex items-center justify-center p-3 relative">
                <img src="/assets/devices/device_glucometer.jpg" alt="Glucometer" className="w-full h-full object-contain mix-blend-multiply" />
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border border-red-200 text-red-500 flex items-center justify-center shadow-sm">
                  <Droplet className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-[11px] font-bold text-[#1A1F2C] text-center leading-tight">
                TeleRPM<br/>BGM Gen 1
              </div>
            </div>

            {/* 6. ECG (Left Middle) */}
            <div className="absolute top-[40%] left-[0%] flex flex-col items-center gap-2 z-20">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg shadow-slate-200/50 flex items-center justify-center p-3 relative">
                <img src="/assets/devices/device_ecg_monitor.jpg" alt="ECG" className="w-full h-full object-contain mix-blend-multiply" />
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border border-red-200 text-red-500 flex items-center justify-center shadow-sm">
                  <Activity className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-[11px] font-bold text-[#1A1F2C] text-center leading-tight">
                CONTEC PM10<br/>Portable ECG
              </div>
            </div>

            {/* 7. Fetal Monitor (Bottom Left) */}
            <div className="absolute bottom-[10%] left-[8%] flex flex-col items-center gap-2 z-20">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg shadow-slate-200/50 flex items-center justify-center p-3 relative">
                <img src="/assets/devices/device_fetal_monitor.jpg" alt="Fetal" className="w-full h-full object-contain mix-blend-multiply" />
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border border-red-200 text-red-500 flex items-center justify-center shadow-sm">
                  <Baby className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-[11px] font-bold text-[#1A1F2C] text-center leading-tight">
                Luckcome EFM-50<br/>Fetal Monitor
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
