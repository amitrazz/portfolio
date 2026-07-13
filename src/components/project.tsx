"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronDown, LuChevronUp, LuLayers, LuCpu, LuShieldAlert, LuAward } from "react-icons/lu";

type ProjectProps = {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: readonly string[];
  businessImpact: string;
  challenges: string;
  results: string;
};

export default function Project({
  title,
  subtitle,
  problem,
  solution,
  architecture,
  technologies,
  businessImpact,
  challenges,
  results,
}: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const detailsId = `details-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className="premium-card p-4 sm:p-6 md:p-8 mb-6 last:mb-0 transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-start gap-4 mb-4">
        <div className="flex-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            {subtitle}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mt-1">
            {title}
          </h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          className="w-full md:w-auto h-11 px-4 text-xs font-bold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-xl flex items-center justify-center gap-2 border border-zinc-200/50 dark:border-zinc-800/80 transition cursor-pointer shrink-0"
        >
          {isExpanded ? "Collapse Case Study" : "View Case Study"}
          {isExpanded ? <LuChevronUp size={14} /> : <LuChevronDown size={14} />}
        </button>
      </div>

      <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
        <span className="font-semibold text-zinc-800 dark:text-zinc-200">Business Impact:</span> {businessImpact}
      </p>

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

      {/* Expandable Case Study Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            id={detailsId}
            role="region"
            aria-label={`Case study details for ${title}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ willChange: "transform, height" }}
            className="overflow-hidden mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col gap-6"
          >
            {/* Grid of Sections */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2 flex items-center gap-2">
                  <LuShieldAlert className="text-indigo-500" /> The Problem
                </h4>
                <p className="text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">
                  {problem}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2 flex items-center gap-2">
                  <LuCpu className="text-indigo-500" /> The Solution
                </h4>
                <p className="text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">
                  {solution}
                </p>
              </div>
            </div>

            {/* Architecture Details */}
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 sm:p-5 rounded-xl border border-zinc-100 dark:border-zinc-800/50">
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2 flex items-center gap-2">
                <LuLayers className="text-indigo-500" /> System Architecture
              </h4>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-400 font-mono leading-relaxed bg-white dark:bg-zinc-900 p-3.5 rounded-lg border border-zinc-200/40 dark:border-zinc-800/80 break-words whitespace-pre-wrap w-full overflow-hidden">
                {architecture}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2">
                  Key Technical Challenges
                </h4>
                <p className="text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">
                  {challenges}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-2 flex items-center gap-2">
                  <LuAward className="text-amber-500" /> Outcomes & Results
                </h4>
                <p className="text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">
                  {results}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
