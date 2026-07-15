"use client";

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { achievementsData, awardsData } from '@/lib/data';

function IconTrophy() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  );
}

function IconSparkles() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500" aria-hidden="true">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  );
}

export default function Achievements() {
  const [activeTab, setActiveTab] = useState<'achievements' | 'awards'>('achievements');

  return (
    <section id="achievements" className="mb-16 sm:mb-28 max-w-[58rem] mx-auto px-4 w-full scroll-mt-28">
      <SectionHeading>Impact &amp; Recognition</SectionHeading>

      <p className="mb-10 text-center text-zinc-700 dark:text-zinc-300 max-w-[36rem] mx-auto text-base sm:text-lg leading-relaxed">
        Quantifiable platform metrics, core business achievements, and honors received for engineering execution.
      </p>

      {/* Tabs Pill Bar */}
      <div className="flex bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/80 p-1.5 rounded-full max-w-[28rem] mx-auto mb-12 shadow-inner">
        <button
          onClick={() => setActiveTab('achievements')}
          className={`flex-1 py-2 px-4 rounded-full text-xs sm:text-sm font-bold tracking-wide text-center transition cursor-pointer select-none ${
            activeTab === 'achievements'
              ? 'bg-white dark:bg-zinc-950 text-indigo-600 dark:text-indigo-400 shadow-md scale-[1.01]'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
          }`}
        >
          Key Achievements
        </button>
        <button
          onClick={() => setActiveTab('awards')}
          className={`flex-1 py-2 px-4 rounded-full text-xs sm:text-sm font-bold tracking-wide text-center transition cursor-pointer select-none ${
            activeTab === 'awards'
              ? 'bg-white dark:bg-zinc-950 text-indigo-600 dark:text-indigo-400 shadow-md scale-[1.01]'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
          }`}
        >
          Awards &amp; Honors
        </button>
      </div>

      {activeTab === 'achievements' ? (
        /* Achievements Grid */
        <div key="achievements-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="premium-card p-4 sm:p-6 flex flex-col justify-between animate-fade-in-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                    Metric Value
                  </span>
                  <IconSparkles />
                </div>

                <h3 className="font-extrabold tracking-tight mb-1 text-zinc-900 dark:text-zinc-50 text-2xl sm:text-3xl md:text-4xl">
                  {item.value}
                </h3>

                <h4 className="font-bold text-sm sm:text-base text-zinc-800 dark:text-zinc-200 mb-2">
                  {item.label}
                </h4>
              </div>

              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-400 leading-relaxed mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ) : (
        /* Awards Grid */
        <div key="awards-grid" className="grid sm:grid-cols-2 gap-6">
          {awardsData.map((item, index) => (
            <div
              key={`${item.title}-${item.date}-${index}`}
              className="premium-card p-4 sm:p-6 flex flex-col justify-between animate-fade-in-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                      {item.issuer}
                    </span>
                    <span className="text-[10px] text-zinc-700 dark:text-zinc-400 mt-0.5">
                      {item.date}
                    </span>
                  </div>
                  <IconTrophy />
                </div>

                <h3 className="font-extrabold tracking-tight mb-2 text-zinc-900 dark:text-zinc-50 text-lg sm:text-xl">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-400 leading-relaxed mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
