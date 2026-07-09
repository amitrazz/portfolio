"use client";

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[48rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      
      <p className="mb-6 text-lg text-zinc-700 dark:text-zinc-300">
        I am an <span className="font-semibold text-zinc-950 dark:text-zinc-50">Associate Principal Engineer</span> with a deep passion for building robust frontend platforms, optimizing runtime performance, and designing distributed architecture patterns. I bridge the gap between high-level architectural designs and clean, high-performance UI engineering.
      </p>

      <div className="grid md:grid-cols-2 gap-6 text-left mt-10">
        <div className="premium-card p-6">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-3 text-lg">Specialties</h3>
          <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed">
            Micro-frontend ecosystems, performance auditing & Core Web Vitals profiling, global content delivery optimization, enterprise design systems, API schema design, and serverless background orchestration.
          </p>
        </div>

        <div className="premium-card p-6">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-3 text-lg">Engineering Philosophy</h3>
          <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed">
            I believe that software systems should be designed for scale, event-first, and API-first. I focus on optimizing developer speed by building clean tooling pipelines, and ensuring production platforms have top-tier observability and fault-tolerance.
          </p>
        </div>

        <div className="premium-card p-6">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-3 text-lg">Leadership & Culture</h3>
          <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed">
            Experienced at scaling platforms across distributed cross-functional teams. I focus on developer velocity, technical mentorship, setting design-first engineering guidelines, and driving modular, decoupled team boundaries.
          </p>
        </div>

        <div className="premium-card p-6">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-3 text-lg">Key Verticals</h3>
          <p className="text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed">
            Proven track record of designing high-impact platforms in domains like OTT Streaming (Discovery), Webinar Collaboration Platforms (Airmeet), Enterprise Commerce Solutions (Aptos), and retail e-commerce ecosystems.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
