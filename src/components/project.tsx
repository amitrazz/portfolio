"use client";
// This component stays as a Client Component because it has interactive state (isExpanded)
// BUT: framer-motion is removed entirely. The expand animation uses the CSS grid trick.
// height: 0 → auto cannot be GPU-composited. grid-template-rows: 0fr → 1fr CAN be.
import { useState } from "react";

// Inline SVGs — eliminates react-icons from this interactive chunk
function IconChevronDown() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>;
}
function IconChevronUp() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>;
}
function IconLayers() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
}
function IconCpu() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/></svg>;
}
function IconShieldAlert() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
}
function IconAward() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
}

type ProjectProps = {
  id: string;
  featured: boolean;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  duration: string;
  executiveSummary: string;
  businessContext: {
    domain: string;
    stakeholders?: string;
    scale?: string;
    challenge: string;
  };
  problemStatement: string;
  objectives: readonly string[];
  architecture: {
    overview: string;
    diagram: string;
    keyComponents?: readonly string[];
    dataFlow?: readonly string[];
    designPatterns?: readonly string[];
  };
  engineeringHighlights: readonly string[];
  architectureDecisions: readonly {
    decision: string;
    rationale: string;
    tradeoffs: readonly string[];
    alternatives: readonly string[];
  }[];
  technicalChallenges: readonly {
    challenge: string;
    solution: string;
    outcome?: string;
  }[];
  scale: {
    teams?: string;
    repositories?: string;
    users: string;
  };
  reliability: {
    resiliency: readonly string[];
    observability: readonly string[];
    deployment: readonly string[];
  };
  technologies: readonly string[];
  businessImpact: readonly string[];
  measurableResults: readonly {
    metric: string;
    before: string;
    after: string;
  }[];
  lessonsLearned: readonly string[];
};

export default function Project({
  title,
  subtitle,
  duration,
  role,
  executiveSummary,
  problemStatement,
  architecture,
  technicalChallenges,
  businessImpact,
  measurableResults,
  technologies,
}: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const detailsId = `details-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className="premium-card p-4 sm:p-6 md:p-8 mb-6 last:mb-0">
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-start gap-4 mb-4">
        <div className="flex-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            {role} • {subtitle}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mt-1">
            {title}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            {duration}
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          className="w-full md:w-auto h-11 px-4 text-xs font-bold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-xl flex items-center justify-center gap-2 border border-zinc-200/50 dark:border-zinc-800/80 transition cursor-pointer shrink-0"
        >
          {isExpanded ? "Collapse Case Study" : "View Case Study"}
          {isExpanded ? <IconChevronUp /> : <IconChevronDown />}
        </button>
      </div>

      <div className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
        <span className="font-semibold text-zinc-800 dark:text-zinc-200 block mb-1">Business Impact:</span>
        <ul className="list-disc pl-4 space-y-1 mt-1 text-sm sm:text-base">
          {businessImpact.map((impact, idx) => (
            <li key={idx} className="marker:text-indigo-500">{impact}</li>
          ))}
        </ul>
      </div>

      {/* Main Badges */}
      <div className="flex flex-wrap gap-1.5 mb-2">
        {technologies.map((tag, index) => (
          <span
            key={index}
            className="bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs px-2.5 py-1 rounded-md font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/*
        CSS grid expand — the ONLY CSS-native way to animate height: auto without layout thrash.
        grid-template-rows: 0fr → 1fr is GPU-composited (no layout, no paint).
        The inner div needs min-height: 0 to allow grid contraction to 0.
        This eliminates all 74 "non-composited animations" that Lighthouse flagged.
      */}
      <div
        id={detailsId}
        role="region"
        aria-label={`Case study details for ${title}`}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col gap-6">
            {/* Grid of Sections */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2 flex items-center gap-2">
                  <IconShieldAlert /> The Problem
                </h4>
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">
                  {problemStatement}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2 flex items-center gap-2">
                  <IconCpu /> The Solution
                </h4>
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">
                  {executiveSummary}
                </p>
              </div>
            </div>

            {/* Architecture Details */}
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 sm:p-5 rounded-xl border border-zinc-100 dark:border-zinc-800/50">
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2 flex items-center gap-2">
                <IconLayers /> System Architecture
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                {architecture.overview}
              </p>
              {architecture.diagram && (
                <pre className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-400 font-mono leading-relaxed bg-white dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200/40 dark:border-zinc-800/80 whitespace-pre overflow-x-auto w-full">
                  {architecture.diagram}
                </pre>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-3">
                  Key Technical Challenges
                </h4>
                <div className="flex flex-col gap-4">
                  {technicalChallenges.map((challengeItem, idx) => (
                    <div key={idx} className="border-l-2 border-indigo-500 pl-3">
                      <h5 className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100">{challengeItem.challenge}</h5>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1"><span className="font-semibold">Solution:</span> {challengeItem.solution}</p>
                      {challengeItem.outcome && (
                        <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 mt-1"><span className="font-semibold">Outcome:</span> {challengeItem.outcome}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-3 flex items-center gap-2">
                  <IconAward /> Outcomes &amp; Measurable Results
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {measurableResults.map((result, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-zinc-100/50 dark:bg-zinc-900/50 p-3 rounded-xl border border-zinc-200/20 dark:border-zinc-800/20">
                      <span className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">{result.metric}</span>
                      <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                        {result.before} → <span className="text-indigo-600 dark:text-indigo-400 font-bold">{result.after}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
