// Server Component — static data, no framer-motion, no 'use client'
// Note: FaAws (fa) + SiGraphql (si) are from different icon font families — 
// using them imported separate large chunks. Replaced with inline SVG.
import React from 'react';
import SectionHeading from './section-heading';
import { architectureExpertise } from '@/lib/data';

function IconNetwork() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v4c0 1 .5 2 2 2h10c1.5 0 2-1 2-2V8"/><line x1="12" y1="12" x2="12" y2="16"/></svg>;
}
function IconCpu() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>;
}
function IconActivity() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
}
function IconAws() {
  // AWS logo approximated as a cloud icon
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
}
function IconGraphql() {
  // GraphQL logo approximated as a hexagonal network icon
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="2" x2="12" y2="22"/><path d="M2 8.5l10 6 10-6"/></svg>;
}
function IconLayers() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
}

function getArchitectureIcon(iconName: string) {
  switch (iconName) {
    case 'network': return <IconNetwork />;
    case 'cpu': return <IconCpu />;
    case 'activity': return <IconActivity />;
    case 'aws': return <IconAws />;
    case 'graphql': return <IconGraphql />;
    case 'layers': return <IconLayers />;
    default: return null;
  }
}

export default function Architecture() {
  return (
    <section id="architecture" className="mb-16 sm:mb-28 max-w-[58rem] mx-auto px-4 w-full scroll-mt-28">
      <SectionHeading>Architecture Expertise</SectionHeading>
      
      <p className="mb-12 text-center text-zinc-700 dark:text-zinc-300 max-w-[38rem] mx-auto text-base sm:text-lg leading-relaxed">
        Designing modular, reliable, and high-performance system topologies that scale with business growth and organizational structure.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {architectureExpertise.map((item, index) => (
          <div
            key={item.title}
            className="premium-card p-4 sm:p-6 flex flex-col items-start animate-fade-in-up"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400 mb-4">
              {getArchitectureIcon(item.icon)}
            </div>
            
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 mb-2">
              {item.title}
            </h3>
            
            <p className="text-base text-zinc-800 dark:text-zinc-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
