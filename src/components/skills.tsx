"use client";
// Skills stays as a Client Component — it has interactive filter state.
// BUT: framer-motion AnimatePresence + layout prop is removed.
// The layout prop was the #1 Style & Layout cost: it called getBoundingClientRect()
// on every badge on every filter click, then ran a JS FLIP animation for each one.
// Replaced with CSS opacity+scale transitions on each badge individually.
import { skillsData } from '@/lib/data';
import { useState } from 'react';
import SectionHeading from './section-heading';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(skillsData.map((s) => s.category)))];

  return (
    <section
      className="mb-28 max-w-[53rem] text-center sm:mb-40 mx-auto px-4 w-full"
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

      {/*
        Badge Layout.
        BEFORE: motion.div layout + AnimatePresence mode="popLayout" + motion.span layout
        WHY IT WAS SLOW: framer-motion reads getBoundingClientRect() on ALL N badges,
        calculates where each one will move to, inverts the transform, then plays it.
        For 30 badges = 60 layout reads + 30 JS animation loops per filter click.
        
        AFTER: All badges always in DOM. CSS opacity+scale transition makes filtered
        badges invisible and collapsed. No JS animation, no layout reads.
        Uses contain: layout style to isolate reflow to this container only.
      */}
      <div
        className="flex flex-wrap justify-center gap-2 max-w-[44rem] mx-auto"
        style={{ contain: 'layout' }}
      >
        {skillsData.map((skill) => {
          const isVisible = activeCategory === 'All' || skill.category === activeCategory;
          return (
            <span
              key={skill.name}
              aria-hidden={!isVisible}
              className={[
                'premium-card px-4 py-2.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2',
                'transition-[opacity,transform] duration-150',
                isVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-90 pointer-events-none select-none w-0 px-0 overflow-hidden',
              ].join(' ')}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
              {skill.name}
            </span>
          );
        })}
      </div>
    </section>
  );
}
