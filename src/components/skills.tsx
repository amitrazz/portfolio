"use client";

import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import SectionHeading from './section-heading';

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.4);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Dynamically collect unique categories
  const categories = ['All', ...Array.from(new Set(skillsData.map((s) => s.category)))];

  const filteredSkills =
    activeCategory === 'All' ? skillsData : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 px-4 w-full"
    >
      <SectionHeading>Technical Skills</SectionHeading>
      
      <p className="mb-12 text-zinc-700 dark:text-zinc-400 max-w-[36rem] mx-auto text-lg leading-relaxed">
        Structured engineering capabilities, runtime platforms, and development standards.
      </p>

      {/* Category Tabs */}
      <div role="tablist" aria-label="Skills categorization" className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-pointer ${
              activeCategory === cat
                ? 'bg-zinc-900 border-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:border-zinc-50 dark:text-zinc-950 shadow-sm'
                : 'bg-white border-zinc-200 text-zinc-700 hover:text-zinc-950 dark:bg-zinc-900/50 dark:border-zinc-800/80 dark:text-zinc-400 dark:hover:text-zinc-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Badges Layout */}
      <motion.div 
        layout
        className="flex flex-wrap justify-center gap-2 max-w-[44rem] mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.span
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="premium-card px-4 py-2.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              {skill.name}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
