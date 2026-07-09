"use client";

import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { architectureExpertise } from '@/lib/data';

export default function Architecture() {
  const { ref } = useSectionInView('Architecture', 0.4);

  return (
    <section
      ref={ref}
      id="architecture"
      className="mb-28 max-w-[58rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Architecture Expertise</SectionHeading>
      
      <p className="mb-12 text-center text-zinc-700 dark:text-zinc-300 max-w-[38rem] mx-auto text-lg leading-relaxed">
        Designing modular, reliable, and high-performance system topologies that scale with business growth and organizational structure.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {architectureExpertise.map((item, index) => (
          <motion.div
            key={item.title}
            className="premium-card p-6 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400 mb-4">
              {item.icon}
            </div>
            
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 mb-2">
              {item.title}
            </h3>
            
            <p className="text-sm text-zinc-800 dark:text-zinc-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
