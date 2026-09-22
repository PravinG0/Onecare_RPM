import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroCard } from '../data/content';
import { Activity, Bell, CheckCircle2, AlertTriangle, ChevronRight } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function LiveTelemetryHud() {
  const [alertAcknowledged, setAlertAcknowledged] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Simulated ECG waveform points
  const ecgPoints = "M 0 20 L 20 20 L 25 10 L 30 30 L 35 5 L 40 25 L 45 20 L 70 20 L 75 12 L 80 28 L 85 8 L 90 24 L 95 20 L 140 20 L 145 10 L 150 30 L 155 5 L 160 25 L 165 20 L 200 20";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 w-full max-w-md rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl p-5 text-left text-slate-dark"
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-accent-soft border border-accent-border flex items-center justify-center font-bold text-accent-ink text-sm">
              RM
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-300 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-slate-dark text-sm leading-none">{heroCard.patient}</h4>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
                Live
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">{heroCard.meta}</p>
          </div>
        </div>

        {/* Refresh Badge */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
          <Activity className="w-3.5 h-3.5 text-accent animate-pulse" />
          <span className="font-mono text-[11px]">Sync: 4s ago</span>
        </div>
      </div>

      {/* Vitals Grid (2x2) */}
      <div className="grid grid-cols-2 gap-2.5 my-3.5">
        {heroCard.vitals.map((vital, idx) => {
          const isCritical = vital.state === 'critical';
          return (
            <div
              key={idx}
              className={`relative rounded-xl p-3 border transition-all duration-200 ${
                isCritical
                  ? 'bg-red-50/70 border-red-200 shadow-sm ring-1 ring-red-300'
                  : 'bg-gray-50/70 border-gray-100 hover:border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">{vital.label}</span>
                {isCritical ? (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-red-700 bg-red-100/80 px-1.5 py-0.5 rounded uppercase tracking-wider animate-pulse">
                    <AlertTriangle className="w-2.5 h-2.5" />
                    Alert
                  </span>
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                )}
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span
                  className={`text-2xl font-extrabold tracking-tight font-display ${
                    isCritical ? 'text-red-700' : 'text-slate-dark'
                  }`}
                >
                  {vital.value}
                </span>
                <span className="text-xs font-semibold text-gray-400">{vital.unit}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Waveform Sparkline */}
      <div className="rounded-xl bg-slate-dark p-3 text-white border border-slate-700/60 shadow-inner">
        <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1.5">
          <span className="flex items-center gap-1 font-mono">
            <span className="inline-block w-2 h-2 rounded-full bg-accent" />
            Lead II Rhythm Strip
          </span>
          <span className="font-mono text-emerald-400">Normal Sinus · 78 bpm</span>
        </div>
        <div className="relative h-10 w-full overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
            <path
              d={ecgPoints}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* Animated scan bar */}
          {!shouldReduceMotion && (
            <motion.div
              className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-accent/30 to-white/60 pointer-events-none"
              animate={{ x: ['-20%', '500%'] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
            />
          )}
        </div>
      </div>

      {/* Critical Alert Action Bar */}
      <div className="mt-3.5">
        <AnimatePresence mode="wait">
          {!alertAcknowledged ? (
            <motion.div
              key="alert"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="p-1 rounded-md bg-red-600 text-white shrink-0">
                  <Bell className="w-3.5 h-3.5 animate-bounce" />
                </span>
                <span className="truncate font-semibold">{heroCard.alert}</span>
              </div>
              <button
                onClick={() => setAlertAcknowledged(true)}
                className="shrink-0 px-2.5 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold transition-colors shadow-sm"
              >
                Triage
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="acknowledged"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">Escalated to On-Call Diabetologist · Dr. Sharma notified</span>
              </div>
              <button
                onClick={() => setAlertAcknowledged(false)}
                className="text-[10px] text-gray-500 hover:text-gray-700 underline"
              >
                Reset
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
