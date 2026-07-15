"use client";

import React, { useState } from 'react';
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
function IconChevronDown() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>;
}
function IconChevronUp() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>;
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

interface ExperienceItem {
  readonly title: string;
  readonly company: string;
  readonly location: string;
  readonly duration: string;
  readonly icon: string;
  readonly roleOverview: string;
  readonly organizationScale: {
    readonly domain: string;
    readonly scale?: string;
    readonly engineeringSquads?: string;
    readonly products?: string;
    readonly architectureScope?: readonly string[];
  };
  readonly architectureLeadership: readonly string[];
  readonly strategicInitiatives: readonly string[];
  readonly engineeringImpact: readonly string[];
  readonly businessImpact: readonly string[];
  readonly leadership?: readonly string[];
  readonly metrics: Record<string, string>;
  readonly technologyFootprint: readonly string[];
}

function formatMetricKey(key: string): string {
  if (key === 'ttfb') return 'TTFB';
  if (key.startsWith('p95')) {
    return 'P95 ' + key.slice(3).replace(/([A-Z])/g, ' $1').trim().replace(/^./, (str) => str.toUpperCase());
  }
  if (key.startsWith('api')) {
    return 'API ' + key.slice(3).replace(/([A-Z])/g, ' $1').trim().replace(/^./, (str) => str.toUpperCase());
  }
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
}

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = `experience-details-${index}`;

  return (
    <div
      className="relative animate-slide-in-left"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Timeline Bubble Node */}
      <span className="absolute -left-[29px] sm:-left-[41px] md:-left-[49px] top-1.5 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-400 shadow-sm animate-pulse-once">
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
              {item.duration}
            </span>
            <p className="text-xs text-zinc-700 dark:text-zinc-400 mt-1">
              {item.location}
            </p>
          </div>
        </div>

        {/* Role Overview */}
        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 italic mb-4 leading-relaxed bg-zinc-50 dark:bg-zinc-900/35 p-3 rounded-lg border border-zinc-200/20 dark:border-zinc-800/20">
          {item.roleOverview}
        </p>

        {/* Organization Scale & Context */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          <div>
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">Domain:</span> {item.organizationScale.domain}
          </div>
          {item.organizationScale.scale && (
            <div>
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">Scale:</span> {item.organizationScale.scale}
            </div>
          )}
          {item.organizationScale.engineeringSquads && (
            <div>
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">Squads:</span> {item.organizationScale.engineeringSquads}
            </div>
          )}
          {item.organizationScale.products && (
            <div>
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">Products:</span> {item.organizationScale.products}
            </div>
          )}
        </div>

        {/* Architecture Scope Tags */}
        {item.organizationScale.architectureScope && item.organizationScale.architectureScope.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.organizationScale.architectureScope.map((scopeItem) => (
              <span
                key={scopeItem}
                className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100/30 dark:border-indigo-900/30"
              >
                {scopeItem}
              </span>
            ))}
          </div>
        )}

        {/* Metrics Grid */}
        {item.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
            {Object.entries(item.metrics).map(([key, value]) => {
              const label = formatMetricKey(key);
              return (
                <div key={key} className="bg-zinc-50/50 dark:bg-zinc-900/40 p-2 sm:p-2.5 rounded-xl border border-zinc-200/10 dark:border-zinc-800/10 text-center">
                  <div className="text-sm sm:text-base font-extrabold text-indigo-600 dark:text-indigo-400">
                    {value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-semibold leading-tight">
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View contributions expand button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls={detailsId}
            className="w-full md:w-auto h-9 px-4 text-xs font-bold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-xl flex items-center justify-center gap-2 border border-zinc-200/50 dark:border-zinc-800/80 transition cursor-pointer shrink-0"
          >
            {isExpanded ? "Hide Details" : "View Contributions & Impact"}
            {isExpanded ? <IconChevronUp /> : <IconChevronDown />}
          </button>
        </div>

        {/* Collapsible Details */}
        <div
          id={detailsId}
          role="region"
          aria-label={`Contributions details for ${item.title}`}
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <div className="mb-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col gap-5">
              {/* Key Contributions & Impact */}
              {item.architectureLeadership && item.architectureLeadership.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    Architecture &amp; Leadership
                  </h4>
                  <ul className="list-disc pl-4 space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {item.architectureLeadership.map((bullet, idx) => (
                      <li key={idx} className="marker:text-indigo-500/70">{bullet}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.strategicInitiatives && item.strategicInitiatives.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Strategic Initiatives
                  </h4>
                  <ul className="list-disc pl-4 space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {item.strategicInitiatives.map((bullet, idx) => (
                      <li key={idx} className="marker:text-emerald-500/70">{bullet}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.engineeringImpact && item.engineeringImpact.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    Engineering Impact
                  </h4>
                  <ul className="list-disc pl-4 space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {item.engineeringImpact.map((bullet, idx) => (
                      <li key={idx} className="marker:text-cyan-500/70">{bullet}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.businessImpact && item.businessImpact.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Business Impact
                  </h4>
                  <ul className="list-disc pl-4 space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {item.businessImpact.map((bullet, idx) => (
                      <li key={idx} className="marker:text-amber-500/70">{bullet}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.leadership && item.leadership.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                    Platform Leadership
                  </h4>
                  <ul className="list-disc pl-4 space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {item.leadership.map((bullet, idx) => (
                      <li key={idx} className="marker:text-violet-500/70">{bullet}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technologies footprint */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
          {item.technologyFootprint.map((tag) => (
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
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mb-16 sm:mb-28 max-w-[48rem] mx-auto px-4 w-full scroll-mt-28">
      <SectionHeading>Professional Experience</SectionHeading>
      
      <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 sm:ml-6 pl-5 sm:pl-8 py-2 flex flex-col gap-10 sm:gap-12">
        {(experiencesData as unknown as readonly ExperienceItem[]).map((item, index) => (
          <ExperienceCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
