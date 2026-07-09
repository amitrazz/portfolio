"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.3);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 max-w-[48rem] mx-auto px-4">
      <SectionHeading>Professional Experience</SectionHeading>
      
      <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-6 pl-6 sm:pl-8 py-2 flex flex-col gap-12">
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Timeline Bubble Node */}
            <span className="absolute -left-[43px] md:-left-[51px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 shadow-sm">
              {item.icon}
            </span>

            {/* Content Card */}
            <div className="premium-card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-extrabold text-xl text-zinc-900 dark:text-zinc-50 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {item.company}
                  </p>
                </div>
                
                <div className="text-left md:text-right">
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-md text-zinc-700 dark:text-zinc-300">
                    {item.date}
                  </span>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                    {item.location}
                  </p>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="list-disc pl-4 space-y-2.5 mb-6 text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx} className="marker:text-indigo-500">
                    {resp}
                  </li>
                ))}
              </ul>

              {/* Technologies used */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                {item.tech.map((tag) => (
                  <span
                    key={tag}
                    className="bg-zinc-100/80 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 text-xs px-2.5 py-1 rounded-md border border-zinc-200/20 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
