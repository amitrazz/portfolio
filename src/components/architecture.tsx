// Server Component — static data, no framer-motion, no 'use client'
// Note: FaAws (fa) + SiGraphql (si) are from different icon font families — 
// using them imported separate large chunks. Replaced with inline SVG.
import React from 'react';
import SectionHeading from './section-heading';
import { architectureExpertise } from '@/lib/data';

// Inline SVG icons — eliminates react-icons import from this chunk entirely
function IconNetwork() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v4c0 1 .5 2 2 2h10c1.5 0 2-1 2-2V8"/><line x1="12" y1="12" x2="12" y2="16"/></svg>;
}
function IconServer() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
}
function IconBlocks() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>;
}
function IconAws() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.47 0-.89.09-1.3.27A6 6 0 0 0 3 12c0 3.31 2.69 6 6 6h8.5Z"/></svg>;
}
function IconLayers() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
}
function IconShield() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}

function getArchitectureIcon(iconName: string) {
  switch (iconName) {
    case 'network': return <IconNetwork />;
    case 'server': return <IconServer />;
    case 'blocks': return <IconBlocks />;
    case 'aws': return <IconAws />;
    case 'layers': return <IconLayers />;
    case 'shield': return <IconShield />;
    default: return <IconNetwork />;
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
