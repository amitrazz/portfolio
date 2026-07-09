"use client";

import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { engineeringPrinciples } from '@/lib/data';

export default function Principles() {
  const { ref } = useSectionInView('Principles', 0.4);

  return (
    <section
      ref={ref}
      id="principles"
      className="mb-28 max-w-[58rem] scroll-mt-28 sm:mb-40 px-4 w-full"
    >
      <SectionHeading>Engineering Principles</SectionHeading>

      <p className="mb-12 text-center text-zinc-700 dark:text-zinc-300 max-w-[36rem] mx-auto text-lg leading-relaxed">
        The architectural values and execution guidelines that direct my engineering decisions.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {engineeringPrinciples.map((item, index) => (
          <motion.div
            key={item.title}
            className="premium-card p-6 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-zinc-800 dark:text-zinc-200 mb-4 border border-zinc-200/30 dark:border-zinc-800/30">
              {item.icon}
            </div>

            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
