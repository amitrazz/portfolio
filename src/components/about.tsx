// Server Component — static content, no framer-motion, no 'use client'
// Entry animation uses CSS @keyframes (transform+opacity only — GPU composited)
import SectionHeading from './section-heading';

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 sm:mb-28 max-w-[48rem] text-center leading-8 scroll-mt-28 mx-auto px-4 w-full animate-fade-in-up"
    >
      <SectionHeading>About Me</SectionHeading>
      
      <p className="mb-6 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
        I am an <span className="font-semibold text-zinc-950 dark:text-zinc-50">Associate Principal Engineer</span> with a deep passion for building robust frontend platforms, optimizing runtime performance, and designing distributed architecture patterns. I bridge the gap between high-level architectural designs and clean, high-performance UI engineering.
      </p>

      <div className="grid md:grid-cols-2 gap-6 text-left mt-10">
        <div className="premium-card p-4 sm:p-6">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-3 text-base sm:text-lg">Specialties</h3>
          <p className="text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">
            Micro-frontend ecosystems, performance auditing &amp; Core Web Vitals profiling, global content delivery optimization, enterprise design systems, API schema design, and serverless background orchestration.
          </p>
        </div>

        <div className="premium-card p-4 sm:p-6">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-3 text-base sm:text-lg">Engineering Philosophy</h3>
          <p className="text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">
            I believe that software systems should be designed for scale, event-first, and API-first. I focus on optimizing developer speed by building clean tooling pipelines, and ensuring production platforms have top-tier observability and fault-tolerance.
          </p>
        </div>

        <div className="premium-card p-4 sm:p-6">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-3 text-base sm:text-lg">Leadership &amp; Culture</h3>
          <p className="text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">
            Experienced at scaling platforms across distributed cross-functional teams. I focus on developer velocity, technical mentorship, setting design-first engineering guidelines, and driving modular, decoupled team boundaries.
          </p>
        </div>

        <div className="premium-card p-4 sm:p-6">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-3 text-base sm:text-lg">Key Verticals</h3>
          <p className="text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">
            Proven track record of designing high-impact platforms in domains like OTT Streaming (Discovery), Webinar Collaboration Platforms (Airmeet), Enterprise Commerce Solutions (Aptos), and retail e-commerce ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
}
