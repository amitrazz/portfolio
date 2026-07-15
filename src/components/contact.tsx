"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

// ==========================================
// SVGs & Icon Helpers
// ==========================================

function IconEmail() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
}

function IconLinkedIn() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
}

function IconGitHub() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>;
}

function IconResume() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
}

interface ActionCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  download?: boolean;
}

function ActionCard({ href, icon, title, description, ctaText, download }: ActionCardProps) {
  return (
    <motion.a
      variants={{
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } }
      }}
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      download={download}
      className="premium-card p-5 flex flex-col justify-between text-left hover:-translate-y-1 hover:scale-[1.01] hover:border-indigo-500/50 hover:shadow-lg dark:hover:border-indigo-500/50 transition-all duration-300 cursor-pointer min-h-[170px] w-full group outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white/50 dark:bg-zinc-950/30 backdrop-blur-sm"
    >
      <div>
        <span className="p-2.5 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200/20 dark:border-zinc-800/20 mb-4 inline-flex text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition duration-300">
          {icon}
        </span>
        <h4 className="font-extrabold text-sm sm:text-base text-zinc-900 dark:text-zinc-50 tracking-tight mb-1">
          {title}
        </h4>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
          {description}
        </p>
      </div>
      
      <div className="flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition duration-300">
        <span>{ctaText}</span>
        <svg 
          className="transform group-hover:translate-x-1 transition-transform duration-200" 
          width="12" 
          height="12" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const focusAreas = [
    "Principal Engineering",
    "Platform Architecture",
    "Distributed Systems",
    "Technical Leadership",
    "Consulting"
  ];

  return (
    <section
      id="contact"
      className="mb-12 max-w-[58rem] text-center mx-auto px-4 w-full scroll-mt-28"
    >
      <SectionHeading>Let&apos;s Build Great Systems</SectionHeading>

      <p className="text-zinc-700 dark:text-zinc-300 max-w-[42rem] mx-auto text-base sm:text-lg leading-relaxed mt-4 mb-10">
        I enjoy designing scalable platforms, distributed systems, cloud-native applications, and high-performance user experiences.
        <br /><br />
        Whether you&apos;re hiring for a Principal Engineer or Staff Engineer role, modernizing a platform, or looking for architecture guidance, I&apos;d love to connect.
      </p>

      {/* Current Focus Horizontal Row */}
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-12 text-[10px] sm:text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase select-none">
        <span className="text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5 shrink-0">
          🚀 Current Focus:
        </span>
        {focusAreas.map((focus, index) => (
          <React.Fragment key={focus}>
            <span className="hover:text-indigo-500 dark:hover:text-indigo-300 transition duration-200">
              {focus}
            </span>
            {index < focusAreas.length - 1 && (
              <span className="text-zinc-300 dark:text-zinc-800 font-normal select-none">•</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Action Buttons Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <ActionCard
          href="mailto:ammiittrazz@gmail.com"
          icon={<IconEmail />}
          title="Email"
          description="Let's discuss opportunities, architecture, or technical leadership."
          ctaText="Contact"
        />
        <ActionCard
          href="https://www.linkedin.com/in/amitrazz"
          icon={<IconLinkedIn />}
          title="LinkedIn"
          description="Professional profile, experience, and engineering updates."
          ctaText="Connect"
        />
        <ActionCard
          href="https://github.com/amitrazz"
          icon={<IconGitHub />}
          title="GitHub"
          description="Architecture projects, experiments, and open source."
          ctaText="Explore"
        />
        <ActionCard
          href="/CV.pdf"
          icon={<IconResume />}
          title="Resume"
          description="Experience, technical leadership, and architecture case studies."
          ctaText="Download"
          download
        />
      </motion.div>
    </section>
  );
}
