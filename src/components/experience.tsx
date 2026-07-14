// Server Component — static data, no framer-motion, no 'use client'
// Timeline entry animations use CSS @keyframes + scroll-timeline
import React from 'react';
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';

// Inline SVG icons — eliminates react-icons import from this chunk entirely
function IconCpu() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
      <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
      <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  );
}
function IconNetwork() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/>
      <rect x="9" y="16" width="6" height="6" rx="1"/>
      <path d="M5 8v4c0 1 .5 2 2 2h10c1.5 0 2-1 2-2V8"/><line x1="12" y1="12" x2="12" y2="16"/>
    </svg>
  );
}
function IconServer() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  );
}
function IconLayers() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  );
}

function getExperienceIcon(iconName: string) {
  switch (iconName) {
    case 'cpu': return <IconCpu />;
    case 'network': return <IconNetwork />;
    case 'server': return <IconServer />;
    case 'layers': return <IconLayers />;
    default: return null;
  }
}

export default function Experience() {
  return (
    <section id="experience" className="mb-16 sm:mb-28 max-w-[48rem] mx-auto px-4 w-full scroll-mt-28">
      <SectionHeading>Professional Experience</SectionHeading>
      
      <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 sm:ml-6 pl-5 sm:pl-8 py-2 flex flex-col gap-10 sm:gap-12">
        {experiencesData.map((item, index) => (
          <div
            key={index}
            className="relative animate-slide-in-left"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {/* Timeline Bubble Node */}
            <span className="absolute -left-[29px] sm:-left-[41px] md:-left-[49px] top-1.5 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 shadow-sm">
              {getExperienceIcon(item.icon)}
            </span>

            {/* Content Card */}
            <div className="premium-card p-4 sm:p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-zinc-900 dark:text-zinc-50 tracking-tight">
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
                  <p className="text-xs text-zinc-700 dark:text-zinc-400 mt-1">
                    {item.location}
                  </p>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="list-disc pl-4 space-y-2.5 mb-6 text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
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
          </div>
        ))}
      </div>
    </section>
  );
}
