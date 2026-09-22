import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faq } from '../data/content';
import { Reveal } from './ui/Reveal';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="w-full bg-bg-alt py-20 lg:py-28 relative border-b border-gray-200/70">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft border border-accent-border text-accent-ink text-xs font-bold tracking-wider uppercase mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-accent" />
              Frequently Asked Questions
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-dark tracking-tight">
              {faq.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-3 text-base text-gray-600">
              {faq.intro}
            </p>
          </Reveal>
        </div>

        {/* Inspo-Style Accessible Accordion */}
        <div className="space-y-4 text-left">
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <Reveal key={idx} delay={0.06 * idx}>
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-accent shadow-md ring-1 ring-accent/40'
                      : 'bg-white border-gray-200/90 hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-dark leading-snug">
                      {item.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-accent text-white rotate-180' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6 pt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 space-y-3">
                          {Array.isArray(item.a) ? (
                            item.a.map((paragraph, pIdx) => <p key={pIdx}>{paragraph}</p>)
                          ) : (
                            <p>{item.a}</p>
                          )}
                          {item.bullets && item.bullets.length > 0 && (
                            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-dark font-medium">
                              {item.bullets.map((b, bIdx) => (
                                <li key={bIdx}>{b}</li>
                              ))}
                            </ul>
                          )}
                          {item.tail && <p className="text-gray-500 pt-1">{item.tail}</p>}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
