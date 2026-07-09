"use client";

import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { achievementsData } from '@/lib/data';
import { LuTrophy, LuTrendingDown } from 'react-icons/lu';

export default function Achievements() {
  const { ref } = useSectionInView('Achievements', 0.4);

  return (
    <section
      ref={ref}
      id="achievements"
      className="mb-28 max-w-[58rem] scroll-mt-28 w-full"
    >
      <SectionHeading>Measurable Achievements</SectionHeading>

      <p className="mb-12 text-center text-zinc-700 dark:text-zinc-300 max-w-[36rem] mx-auto text-lg leading-relaxed">
        Quantifiable business impact, performance metrics, and professional execution awards.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((item, index) => {
          const isAward = item.value === 'Award';
          return (
            <motion.div
              key={item.label}
              className="premium-card p-6 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                    Metric / Honor
                  </span>
                  {isAward ? (
                    <LuTrophy className="text-amber-500" size={20} />
                  ) : (
                    <LuTrendingDown className="text-indigo-500" size={20} />
                  )}
                </div>

                <h3 className={`font-extrabold tracking-tight mb-2 text-zinc-900 dark:text-zinc-50 ${isAward ? 'text-lg md:text-xl' : 'text-3xl sm:text-4xl'}`}>
                  {item.value === 'Award' ? 'Honored Award' : item.value}
                </h3>

                <h4 className="font-bold text-sm text-zinc-800 dark:text-zinc-200 mb-2">
                  {item.label}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-zinc-750 dark:text-zinc-400 leading-relaxed mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
