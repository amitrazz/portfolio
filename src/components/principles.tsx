// Server Component — static data, no framer-motion, no 'use client'
import React from 'react';
import SectionHeading from './section-heading';
import { engineeringPrinciples } from '@/lib/data';

// Inline SVGs — avoids entire react-icons chunk in this route segment
function IconCompass() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>;
}
function IconTerminal() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>;
}
function IconFlame() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>;
}
function IconSparkles() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l1.88 5.76L20 10l-6.12 1.24L12 17l-1.88-5.76L4 10l6.12-1.24z"/><path d="M5 3l.88 2.76L8 7l-2.12.24L5 10l-.88-2.76L2 7l2.12-.24z"/><path d="M19 17l.88 2.76L22 21l-2.12.24L19 24l-.88-2.76L16 21l2.12-.24z"/></svg>;
}
function IconShield() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
function IconActivity() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
}

function getPrincipleIcon(iconName: string) {
  switch (iconName) {
    case 'compass': return <IconCompass />;
    case 'terminal': return <IconTerminal />;
    case 'flame': return <IconFlame />;
    case 'sparkles': return <IconSparkles />;
    case 'shield': return <IconShield />;
    case 'activity': return <IconActivity />;
    default: return null;
  }
}

export default function Principles() {
  return (
    <section id="principles" className="mb-16 sm:mb-28 max-w-[58rem] mx-auto px-4 w-full scroll-mt-28">
      <SectionHeading>Engineering Principles</SectionHeading>

      <p className="mb-12 text-center text-zinc-700 dark:text-zinc-300 max-w-[36rem] mx-auto text-base sm:text-lg leading-relaxed">
        The architectural values and execution guidelines that direct my engineering decisions.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {engineeringPrinciples.map((item, index) => (
          <div
            key={item.title}
            className="premium-card p-4 sm:p-6 flex flex-col items-start animate-fade-in-up"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-zinc-800 dark:text-zinc-200 mb-4 border border-zinc-200/30 dark:border-zinc-800/30">
              {getPrincipleIcon(item.icon)}
            </div>

            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 mb-2">
              {item.title}
            </h3>

            <p className="text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
