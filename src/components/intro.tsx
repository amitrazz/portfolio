"use client";

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { LuArrowRight, LuDownload, LuGithub, LuLinkedin } from 'react-icons/lu';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const shouldReduceMotion = useReducedMotion();

  const stats = [
    { value: "9+", label: "Years Experience" },
    { value: "30%", label: "Latency Optimized" },
    { value: "60%", label: "Payload Reduced" },
    { value: "10+", label: "Teams Scaled" }
  ];

  return (
    <section
      id="home"
      className="mb-16 sm:mb-28 max-w-[54rem] text-center scroll-mt-[100rem] pt-12 mx-auto px-4 w-full"
    >
      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <div>
            <Image
              src="/amit.jpg"
              alt="Amit Kumar Portrait"
              width="110"
              height="110"
              quality="80"
              priority={true}
              fetchPriority="high"
              className="h-24 w-24 rounded-full object-cover border-[0.25rem] border-white shadow-xl dark:border-zinc-900"
            />
          </div>
          {/* Keep only this one spring animation — it's the brand personality detail */}
          {!shouldReduceMotion && (
            <motion.span
              className="absolute bottom-0 right-0 text-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              <span role="img" aria-label="lightning bolt">⚡</span>
            </motion.span>
          )}
        </div>
      </div>

      <div>
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 rounded-full">
          Principal Platform Architect
        </span>
        <h1 className="mb-6 mt-6 px-2 text-3xl xs:text-4xl sm:text-5xl font-extrabold tracking-tight !leading-[1.15] text-zinc-900 dark:text-zinc-50">
          Engineering Resilient Distributed Platforms &amp; Micro-Frontend Systems at Scale
        </h1>
        <p className="mb-10 text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-[42rem] mx-auto">
          Associate Principal Engineer specializing in high-performance platform systems, dynamic runtime orchestration, and event-driven architectures. Designing scalable boundaries, developer tools, and data-caching policies that empower cross-functional squads and million-user products.
        </p>
      </div>

      {/* Actions — CSS animation replaces motion.div, eliminating extra framer orchestration */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-sm font-medium mb-16 w-full max-w-[36rem] sm:max-w-none mx-auto animate-fade-in-up">
        <a
          href="/CV.pdf"
          download
          className="group bg-white/80 text-zinc-900 dark:bg-zinc-900/60 dark:text-zinc-200 w-full sm:w-auto h-12 px-6 flex items-center justify-center gap-2 rounded-xl outline-none hover:scale-105 hover:bg-white dark:hover:bg-zinc-900 active:scale-95 transition cursor-pointer border border-zinc-200 dark:border-zinc-800/80 shadow-sm font-semibold backdrop-blur-sm text-center"
        >
          Download Resume <LuDownload className="opacity-70 group-hover:translate-y-0.5 transition" />
        </a>
        <a
          href="/#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 w-full sm:w-auto h-12 px-6 flex items-center justify-center gap-2 rounded-xl outline-none hover:scale-105 hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-95 transition cursor-pointer border border-zinc-800 dark:border-zinc-200 shadow-md font-semibold text-center"
        >
          Contact Me <LuArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </a>

        <div className="flex gap-2 mt-2 sm:mt-0 w-full sm:w-auto justify-center">
          <a
            className="bg-white/80 h-12 w-12 flex-1 sm:flex-none flex items-center justify-center text-zinc-700 hover:text-zinc-950 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:text-zinc-50 border border-zinc-200 dark:border-zinc-800/80 rounded-xl hover:scale-110 active:scale-95 transition shadow-sm cursor-pointer backdrop-blur-sm"
            href="https://www.linkedin.com/in/amitrazz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            <LuLinkedin size={18} />
          </a>

          <a
            className="bg-white/80 h-12 w-12 flex-1 sm:flex-none flex items-center justify-center text-zinc-700 hover:text-zinc-950 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:text-zinc-50 border border-zinc-200 dark:border-zinc-800/80 rounded-xl hover:scale-110 active:scale-95 transition shadow-sm cursor-pointer backdrop-blur-sm"
            href="https://github.com/amitrazz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
          >
            <LuGithub size={18} />
          </a>
        </div>
      </div>

      {/* Stats Badges — CSS animation replaces motion.div */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 max-w-[48rem] mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className="premium-card p-3.5 sm:p-4 flex flex-col items-center justify-center"
          >
            <span className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 block mb-1 tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-400 font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
