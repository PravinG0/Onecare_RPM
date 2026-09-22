import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { deviceBrands } from '../data/content';
import { enrichedDevices } from '../data/devicesData';
import { Reveal } from './ui/Reveal';
import { LayoutGrid, Table, CheckCircle, Cpu, SlidersHorizontal } from 'lucide-react';

export function DevicesSection() {
  const [selectedBrand, setSelectedBrand] = useState('ALL DEVICES');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'table'

  // Filter devices
  const filteredDevices = useMemo(() => {
    if (selectedBrand === 'ALL DEVICES') return enrichedDevices;
    return enrichedDevices.filter((d) => d.brand === selectedBrand);
  }, [selectedBrand]);

  // Brand distribution calculation (Inspo pattern: pure CSS bar chart computed from runtime data)
  const brandStats = useMemo(() => {
    const counts = {};
    enrichedDevices.forEach((d) => {
      counts[d.brand] = (counts[d.brand] || 0) + 1;
    });
    return Object.entries(counts).map(([brand, count]) => ({
      brand,
      count,
      pct: (count / enrichedDevices.length) * 100,
    }));
  }, []);

  return (
    <section id="devices" className="w-full bg-white py-20 lg:py-28 border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft border border-accent-border text-accent-ink text-xs font-bold tracking-wider uppercase mb-3">
                <Cpu className="w-3.5 h-3.5 text-accent" />
                Medical Device Ecosystem
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-dark tracking-tight">
                RPM Devices
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                Connect pre-validated medical-grade peripherals via Bluetooth or cellular. Seamless integration with automatic vital capture and cloud sync.
              </p>
            </Reveal>
          </div>

          {/* View Mode Toggle Switch */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-gray-100 border border-gray-200 self-start md:self-auto">
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                viewMode === 'cards'
                  ? 'bg-slate-dark text-white shadow-sm'
                  : 'text-gray-600 hover:text-slate-dark'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Device Cards
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                viewMode === 'table'
                  ? 'bg-slate-dark text-white shadow-sm'
                  : 'text-gray-600 hover:text-slate-dark'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              Spec Table
            </button>
          </div>
        </div>

        {/* Brand Distribution Bar Chart (Inspo Pattern) */}
        <Reveal delay={0.15}>
          <div className="mb-10 p-5 rounded-2xl bg-gray-50/80 border border-gray-200/80">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-bold text-slate-dark tracking-wide uppercase">
                Brand Distribution Across 21 Certified Devices
              </span>
              <span className="text-gray-500 font-mono">
                {enrichedDevices.length} Total Units Validated
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {brandStats.map((item) => (
                <button
                  key={item.brand}
                  onClick={() => setSelectedBrand(item.brand)}
                  className={`text-left p-3 rounded-xl border transition-all ${
                    selectedBrand === item.brand
                      ? 'bg-white border-accent shadow-sm ring-1 ring-accent'
                      : 'bg-white/60 border-gray-200 hover:bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-bold text-slate-dark">{item.brand}</span>
                    <span className="font-mono text-xs font-extrabold text-accent">
                      {item.count}
                    </span>
                  </div>
                  {/* Visual Bar */}
                  <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${(item.count / 8) * 100}%` }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Filter Tabs Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-gray-200 pb-4">
          <div role="tablist" className="flex flex-wrap items-center gap-2">
            {deviceBrands.map((brand) => {
              const count =
                brand === 'ALL DEVICES'
                  ? enrichedDevices.length
                  : enrichedDevices.filter((d) => d.brand === brand).length;
              const isActive = selectedBrand === brand;

              return (
                <button
                  key={brand}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedBrand(brand)}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-accent text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{brand}</span>
                  <span
                    className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs font-mono text-gray-500">
            Showing <strong className="text-slate-dark">{filteredDevices.length}</strong> of 21 devices
          </div>
        </div>

        {/* View Mode 1: Product Cards Grid (With Images, Names, Descriptions) */}
        {viewMode === 'cards' && (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredDevices.map((device) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={device.name}
                  className="group rounded-2xl bg-white border border-gray-200/90 hover:border-accent hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Device Image Box with White Studio Backdrop */}
                    <div className="relative w-full h-56 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-6 border-b border-gray-100 overflow-hidden">
                      <img
                        src={device.image}
                        alt={device.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />

                      {/* Brand Pill Badge in top right */}
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-dark text-white font-mono text-[10px] font-bold tracking-wider uppercase shadow-sm">
                        {device.brand}
                      </span>

                      {/* Category Chip in top left */}
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-white/90 backdrop-blur-sm text-gray-600 border border-gray-200">
                        {device.category}
                      </span>
                    </div>

                    {/* Content Body */}
                    <div className="p-6">
                      <h3 className="text-base font-extrabold text-slate-dark group-hover:text-accent-ink transition-colors leading-snug mb-2">
                        {device.name}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                        {device.desc}
                      </p>
                    </div>
                  </div>

                  {/* Measured Unit Footer */}
                  <div className="px-6 py-3.5 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                      Device Unit:
                    </span>
                    <span className="font-mono text-xs font-bold text-accent-ink bg-accent-soft px-2.5 py-0.5 rounded border border-accent-border">
                      {device.unit}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* View Mode 2: High-Density Spec Table */}
        {viewMode === 'table' && (
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-dark text-white font-mono text-[11px] tracking-wider uppercase">
                  <th className="py-4 px-5 font-bold">#</th>
                  <th className="py-4 px-5 font-bold">Device & Model</th>
                  <th className="py-4 px-5 font-bold">Brand</th>
                  <th className="py-4 px-5 font-bold">What It Measures / Clinical Description</th>
                  <th className="py-4 px-5 font-bold">Device Unit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredDevices.map((device, idx) => (
                  <tr
                    key={device.name}
                    className="hover:bg-accent-soft/40 transition-colors"
                  >
                    <td className="py-3.5 px-5 font-mono text-gray-400 font-semibold">
                      {String(idx + 1).padStart(2, '0')}
                    </td>
                    <td className="py-3.5 px-5 font-bold text-slate-dark">
                      <div className="flex items-center gap-3">
                        <img
                          src={device.image}
                          alt={device.name}
                          className="w-10 h-10 object-contain p-1 rounded-md border border-gray-200 bg-white shrink-0"
                        />
                        <span>{device.name}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-5 font-mono font-bold text-gray-700">
                      <span className="px-2 py-0.5 rounded bg-gray-100 text-[11px]">
                        {device.brand}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-gray-600 max-w-md leading-relaxed">
                      {device.desc}
                    </td>
                    <td className="py-3.5 px-5">
                      <span className="font-mono text-[11px] font-bold text-accent-ink bg-accent-soft px-2 py-0.5 rounded border border-accent-border whitespace-nowrap">
                        {device.unit}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
