// Server Component — static data, no framer-motion, no 'use client'
import React from 'react';
import SectionHeading from './section-heading';
import { achievementsData } from '@/lib/data';

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
function IconTrendingDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500" aria-hidden="true">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
      <polyline points="17 18 23 18 23 12"/>
    </svg>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="mb-16 sm:mb-28 max-w-[58rem] mx-auto px-4 w-full scroll-mt-28">
      <SectionHeading>Measurable Achievements</SectionHeading>

      <p className="mb-12 text-center text-zinc-700 dark:text-zinc-300 max-w-[36rem] mx-auto text-base sm:text-lg leading-relaxed">
        Quantifiable business impact, performance metrics, and professional execution awards.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((item, index) => {
          const isAward = item.value === 'Award';
          return (
            <div
              key={item.label}
              className="premium-card p-4 sm:p-6 flex flex-col justify-between animate-fade-in-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                    Metric / Honor
                  </span>
                  {isAward ? <IconTrophy /> : <IconTrendingDown />}
                </div>

                <h3 className={`font-extrabold tracking-tight mb-2 text-zinc-900 dark:text-zinc-50 ${isAward ? 'text-lg md:text-xl' : 'text-2xl xs:text-3xl sm:text-4xl'}`}>
                  {item.value === 'Award' ? 'Honored Award' : item.value}
                </h3>

                <h4 className="font-bold text-sm sm:text-base text-zinc-800 dark:text-zinc-200 mb-2">
                  {item.label}
                </h4>
              </div>

              <p className="text-base text-zinc-700 dark:text-zinc-400 leading-relaxed mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
