"use client";

import React, { useState, useEffect } from "react";
import { 
  ProfileSkeleton, 
  SummaryCardSkeleton, 
  ProjectCardSkeleton, 
  ExperienceSkeleton 
} from "@/components/shimmer";

export default function LoadingDemoPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate server-side async data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen py-16 px-4 md:px-8 max-w-[58rem] mx-auto flex flex-col gap-12 w-full outline-none">
      {/* Demo Controller Header */}
      <div className="premium-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-50/50 dark:bg-zinc-900/50">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Skeleton Loader & Shimmer Demo
          </h1>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
            Simulates a 3-second async latency payload fetch to display component skeletons.
          </p>
        </div>
        
        <button
          onClick={() => setIsLoading(true)}
          disabled={isLoading}
          className="px-4 py-2 text-xs font-semibold bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 rounded-xl hover:scale-105 active:scale-95 transition disabled:opacity-50 cursor-pointer shrink-0"
        >
          {isLoading ? "Fetching Data..." : "Simulate Reload"}
        </button>
      </div>

      <div className="border-t border-zinc-200/50 dark:border-zinc-800/40 my-2" />

      {/* Grid Layout matching main Portfolio sections */}
      {isLoading ? (
        <div className="flex flex-col gap-16 w-full">
          {/* Profile Hero Skeleton */}
          <section className="w-full">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6 text-center">
              Hero Section Loading
            </h2>
            <ProfileSkeleton />
          </section>

          <div className="border-t border-zinc-200/50 dark:border-zinc-800/40 my-2" />

          {/* Skeletons Layout */}
          <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* Experience timeline skeleton list */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">
                Experience Timeline Loading
              </h2>
              <div className="flex flex-col gap-4">
                <ExperienceSkeleton />
                <ExperienceSkeleton />
              </div>
            </div>

            {/* Case studies and summary metrics skeletons list */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">
                  Case Studies Loading
                </h2>
                <ProjectCardSkeleton />
              </div>
              
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">
                  Summary Statistics Loading
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SummaryCardSkeleton />
                  <SummaryCardSkeleton />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-16 w-full text-center py-20">
          <div className="premium-card p-12 max-w-[36rem] mx-auto flex flex-col items-center">
            <span className="text-4xl mb-4">🚀</span>
            <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Data Loaded Successfully!
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-[28rem] mx-auto leading-relaxed">
              Components have fully hydrated. Under active loading states, skeletons maintain the exact dimension specs of their matching components to enforce zero layout shift (CLS).
            </p>
            <button
              onClick={() => setIsLoading(true)}
              className="mt-6 px-4 py-2 text-xs font-semibold border border-zinc-200 dark:border-zinc-800 rounded-xl hover:scale-105 active:scale-95 transition cursor-pointer"
            >
              Reset to loading state
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
