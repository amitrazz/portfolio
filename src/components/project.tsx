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
    product?: string;
    users?: readonly string[];
    businessCapabilities?: readonly string[];
    integrations?: readonly string[];
    supportedPlatforms?: readonly string[];
  };
  problemStatement: string;
  objectives: readonly string[];
  architecture: {
    overview: string;
    diagram?: string;
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
  scale?: {
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
  measurableResults?: readonly {
    metric: string;
    before: string;
    after: string;
  }[];
  lessonsLearned: readonly string[];
};

function IconTarget() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
}
function IconSettings() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
}
function IconActivity() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
}
function IconFileText() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
}
function IconZap() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
}
function IconAlertTriangle() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
}

export default function Project({
  id,
  title,
  subtitle,
  duration,
  role,
  category,
  executiveSummary,
  businessContext,
  problemStatement,
  objectives,
  architecture,
  engineeringHighlights,
  architectureDecisions,
  technicalChallenges,
  reliability,
  technologies,
  businessImpact,
  measurableResults,
  lessonsLearned,
}: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const detailsId = `details-${id}`;

  return (
    <div className="premium-card p-4 sm:p-6 md:p-8 mb-6 last:mb-0">
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-start gap-4 mb-4">
        <div className="flex-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            {category} • {role} • {subtitle}
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
            
            {/* 1. Problem & Solution Context */}
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

            {/* 2. Business Challenge & Objectives */}
            <div className="grid md:grid-cols-2 gap-6 bg-zinc-50/50 dark:bg-zinc-900/35 p-4 sm:p-5 rounded-xl border border-zinc-200/10 dark:border-zinc-800/20">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2.5 flex items-center gap-2">
                  <IconShieldAlert /> Business Context &amp; Challenge
                </h4>
                <p className="text-xs text-zinc-700 dark:text-zinc-400 leading-relaxed mb-4">
                  {businessContext.challenge}
                </p>
                
                <div className="space-y-3.5 text-xs">
                  <div>
                    <span className="font-bold text-zinc-800 dark:text-zinc-200 block mb-0.5">Domain:</span>
                    <span className="text-zinc-600 dark:text-zinc-400">{businessContext.domain}</span>
                  </div>
                  {businessContext.product && (
                    <div>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200 block mb-0.5">Product:</span>
                      <span className="text-zinc-600 dark:text-zinc-400">{businessContext.product}</span>
                    </div>
                  )}
                  {businessContext.users && businessContext.users.length > 0 && (
                    <div>
                      <span className="font-bold text-zinc-850 dark:text-zinc-200 block mb-1">Target Users:</span>
                      <div className="flex flex-wrap gap-1">
                        {businessContext.users.map((u) => (
                          <span key={u} className="bg-zinc-150/70 dark:bg-zinc-800/60 px-2 py-0.5 rounded text-[10px] text-zinc-700 dark:text-zinc-400 font-medium">{u}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {businessContext.businessCapabilities && businessContext.businessCapabilities.length > 0 && (
                    <div>
                      <span className="font-bold text-zinc-850 dark:text-zinc-200 block mb-1">Business Capabilities:</span>
                      <div className="flex flex-wrap gap-1">
                        {businessContext.businessCapabilities.map((cap) => (
                          <span key={cap} className="bg-zinc-150/70 dark:bg-zinc-800/60 px-2 py-0.5 rounded text-[10px] text-zinc-700 dark:text-zinc-400 font-medium">{cap}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {businessContext.integrations && businessContext.integrations.length > 0 && (
                    <div>
                      <span className="font-bold text-zinc-850 dark:text-zinc-200 block mb-1">Key Integrations:</span>
                      <div className="flex flex-wrap gap-1">
                        {businessContext.integrations.map((int) => (
                          <span key={int} className="bg-zinc-150/70 dark:bg-zinc-800/60 px-2 py-0.5 rounded text-[10px] text-zinc-700 dark:text-zinc-400 font-medium">{int}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {businessContext.supportedPlatforms && businessContext.supportedPlatforms.length > 0 && (
                    <div>
                      <span className="font-bold text-zinc-850 dark:text-zinc-200 block mb-1">Supported Platforms:</span>
                      <div className="flex flex-wrap gap-1">
                        {businessContext.supportedPlatforms.map((sp) => (
                          <span key={sp} className="bg-zinc-150/70 dark:bg-zinc-800/60 px-2 py-0.5 rounded text-[10px] text-zinc-700 dark:text-zinc-400 font-medium">{sp}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2.5 flex items-center gap-2">
                  <IconTarget /> Project Objectives
                </h4>
                <ul className="space-y-2">
                  {objectives.map((obj, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-zinc-700 dark:text-zinc-400">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-[10px] font-bold mt-0.5 border border-indigo-100/30 dark:border-indigo-900/50">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. System Architecture & Engineering Highlights */}
            <div className="flex flex-col gap-6">
              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 sm:p-5 rounded-xl border border-zinc-100 dark:border-zinc-800/50">
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2 flex items-center gap-2">
                  <IconLayers /> System Architecture
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                  {architecture.overview}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {architecture.keyComponents && architecture.keyComponents.length > 0 && (
                    <div>
                      <span className="font-bold text-xs uppercase tracking-wider text-zinc-800 dark:text-zinc-200 block mb-2">Key Components:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {architecture.keyComponents.map((c) => (
                          <span key={c} className="bg-zinc-150/50 dark:bg-zinc-800/60 px-2 py-0.5 rounded text-[10px] text-zinc-700 dark:text-zinc-300 font-medium">{c}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {architecture.designPatterns && architecture.designPatterns.length > 0 && (
                    <div>
                      <span className="font-bold text-xs uppercase tracking-wider text-zinc-800 dark:text-zinc-200 block mb-2">Design Patterns:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {architecture.designPatterns.map((p) => (
                          <span key={p} className="bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400 border border-indigo-100/30 dark:border-indigo-900/30 px-2 py-0.5 rounded text-[10px] font-medium">{p}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {architecture.dataFlow && architecture.dataFlow.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-zinc-200/10 dark:border-zinc-800/30">
                    <span className="font-bold text-xs uppercase tracking-wider text-zinc-800 dark:text-zinc-200 block mb-2">Architecture Data Flow:</span>
                    <div className="flex flex-col gap-2">
                      {architecture.dataFlow.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-400">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-[9px] border border-indigo-100/20 dark:border-indigo-900/30">
                            {idx + 1}
                          </span>
                          <span className="font-semibold">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {architecture.diagram && (
                  <pre className="mt-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-400 font-mono leading-relaxed bg-white dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200/40 dark:border-zinc-800/80 whitespace-pre overflow-x-auto w-full">
                    {architecture.diagram}
                  </pre>
                )}
              </div>

              {engineeringHighlights && engineeringHighlights.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-3 flex items-center gap-2">
                    <IconZap /> Engineering Highlights
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {engineeringHighlights.map((highlight, idx) => (
                      <li key={idx} className="marker:text-indigo-500">{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 4. Key Architecture Decisions (ADRs) */}
            {architectureDecisions && architectureDecisions.length > 0 && (
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-3 flex items-center gap-2">
                  <IconSettings /> Key Architecture Decisions (ADRs)
                </h4>
                <div className="grid gap-4">
                  {architectureDecisions.map((adr, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-zinc-200/50 dark:border-zinc-800 bg-zinc-50/20 dark:bg-zinc-900/20">
                      <div className="flex items-start gap-2.5 mb-2.5">
                        <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300/30 dark:border-zinc-700/30">
                          ADR {idx + 1}
                        </span>
                        <h5 className="font-extrabold text-sm text-zinc-900 dark:text-zinc-100 leading-tight">
                          {adr.decision}
                        </h5>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-400 mb-3 leading-relaxed">
                        <span className="font-bold text-zinc-800 dark:text-zinc-200">Rationale:</span> {adr.rationale}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3 text-[11px] sm:text-xs">
                        <div>
                          <span className="font-bold text-zinc-700 dark:text-zinc-300 block mb-1">Trade-offs Considered:</span>
                          <ul className="list-disc pl-4 space-y-1 text-zinc-500 dark:text-zinc-400">
                            {adr.tradeoffs.map((tradeoff, tIdx) => (
                              <li key={tIdx}>{tradeoff}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="font-bold text-zinc-700 dark:text-zinc-300 block mb-1">Alternatives Evaluated:</span>
                          <ul className="list-disc pl-4 space-y-1 text-zinc-500 dark:text-zinc-400">
                            {adr.alternatives.map((alt, aIdx) => (
                              <li key={aIdx}>{alt}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Reliability, Observability & Release Strategy */}
            {reliability && (
              <div className="bg-zinc-50/50 dark:bg-zinc-900/35 p-4 sm:p-5 rounded-xl border border-zinc-200/10 dark:border-zinc-800/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-4 flex items-center gap-2">
                  <IconActivity /> Reliability, Observability &amp; Release Strategy
                </h4>
                <div className="grid sm:grid-cols-3 gap-6 text-[11px] sm:text-xs">
                  <div>
                    <span className="font-bold text-[10px] uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-2">Resiliency</span>
                    <ul className="list-disc pl-4 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                      {reliability.resiliency.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-2">Observability</span>
                    <ul className="list-disc pl-4 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                      {reliability.observability.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold text-[10px] uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-2">Deployment</span>
                    <ul className="list-disc pl-4 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                      {reliability.deployment.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 6. Key Technical Challenges */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-3 flex items-center gap-2">
                <IconAlertTriangle /> Key Technical Challenges
              </h4>
              <div className="grid gap-4">
                {technicalChallenges.map((challengeItem, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-zinc-200/50 dark:border-zinc-800 bg-zinc-50/20 dark:bg-zinc-900/20 hover:border-indigo-500/30 transition duration-200">
                    <div className="flex items-start gap-2.5 mb-2.5">
                      <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300/30 dark:border-zinc-700/30 shrink-0">
                        Challenge {idx + 1}
                      </span>
                      <h5 className="font-extrabold text-sm text-zinc-900 dark:text-zinc-100 leading-snug">
                        {challengeItem.challenge}
                      </h5>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-400 mb-3 leading-relaxed">
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">Solution:</span> {challengeItem.solution}
                    </p>
                    {challengeItem.outcome && (
                      <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 leading-relaxed">
                        <span className="font-bold">Outcome:</span> {challengeItem.outcome}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Outcomes & Lessons Learned */}
            {((measurableResults && measurableResults.length > 0) || (lessonsLearned && lessonsLearned.length > 0)) && (
              <div className="grid md:grid-cols-2 gap-6 pt-2">
                {measurableResults && measurableResults.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-3 flex items-center gap-2">
                      <IconAward /> Outcomes &amp; Measurable Results
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {measurableResults.map((result, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-zinc-100/50 dark:bg-zinc-900/50 p-3 rounded-xl border border-zinc-200/20 dark:border-zinc-800/20">
                          <span className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">{result.metric}</span>
                          <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                            {result.before} → <span className="text-indigo-600 dark:text-indigo-400 font-bold">{result.after}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {lessonsLearned && lessonsLearned.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-3 flex items-center gap-2">
                      <IconFileText /> Key Takeaways &amp; Lessons Learned
                    </h4>
                    <ul className="space-y-2">
                      {lessonsLearned.map((lesson, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                          <span className="leading-relaxed">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
