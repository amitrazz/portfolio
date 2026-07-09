"use client";

import React, { memo } from "react";

type ShimmerProps = {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
};

// 1. Reusable core Shimmer component
export const Shimmer = memo(({ width, height, borderRadius, className = "" }: ShimmerProps) => {
  const style: React.CSSProperties = {};
  if (width !== undefined) style.width = width;
  if (height !== undefined) style.height = height;
  if (borderRadius !== undefined) style.borderRadius = borderRadius;

  return (
    <div
      style={style}
      className={`animate-shimmer bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 bg-[length:200%_100%] motion-reduce:animate-none ${className}`}
    />
  );
});

Shimmer.displayName = "Shimmer";

// 2. Summary Card Skeleton (Stats cards / Principle items)
export const SummaryCardSkeleton = memo(() => {
  return (
    <div className="premium-card p-6 flex flex-col justify-between w-full h-[140px] animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <Shimmer className="h-4 w-24 rounded-md" />
        <Shimmer className="h-5 w-5 rounded-full" />
      </div>
      <div>
        <Shimmer className="h-8 w-20 rounded-md mb-2" />
        <Shimmer className="h-4 w-full rounded-md" />
      </div>
    </div>
  );
});

SummaryCardSkeleton.displayName = "SummaryCardSkeleton";

// 3. Profile / Hero Skeleton (matching intro.tsx)
export const ProfileSkeleton = memo(() => {
  return (
    <div className="flex flex-col items-center max-w-[54rem] mx-auto w-full pt-12 animate-pulse text-center">
      {/* Avatar Circle */}
      <Shimmer className="h-24 w-24 rounded-full mb-6" />
      
      {/* Pill Badge */}
      <Shimmer className="h-6 w-48 rounded-full mb-6 mx-auto" />
      
      {/* Large Titles */}
      <Shimmer className="h-10 w-[80%] sm:h-12 rounded-lg mb-4 mx-auto" />
      <Shimmer className="h-10 w-[60%] sm:h-12 rounded-lg mb-6 mx-auto" />
      
      {/* Text Copy */}
      <div className="space-y-2 mb-10 w-full max-w-[42rem] mx-auto">
        <Shimmer className="h-4 w-full rounded-md" />
        <Shimmer className="h-4 w-[95%] rounded-md mx-auto" />
        <Shimmer className="h-4 w-[60%] rounded-md mx-auto" />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mb-16">
        <Shimmer className="h-11 w-32 rounded-xl" />
        <Shimmer className="h-11 w-36 rounded-xl" />
        <div className="flex gap-2">
          <Shimmer className="h-11 w-11 rounded-xl" />
          <Shimmer className="h-11 w-11 rounded-xl" />
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-[48rem]">
        <Shimmer className="h-24 rounded-2xl" />
        <Shimmer className="h-24 rounded-2xl" />
        <Shimmer className="h-24 rounded-2xl" />
        <Shimmer className="h-24 rounded-2xl" />
      </div>
    </div>
  );
});

ProfileSkeleton.displayName = "ProfileSkeleton";

// 4. Project Card Case Study Skeleton (matching project.tsx)
export const ProjectCardSkeleton = memo(() => {
  return (
    <div className="premium-card p-6 md:p-8 mb-6 w-full animate-pulse">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div className="w-full">
          <Shimmer className="h-4 w-28 rounded-md mb-2" />
          <Shimmer className="h-7 w-[50%] rounded-md" />
        </div>
        <Shimmer className="h-8 w-32 rounded-xl shrink-0" />
      </div>

      {/* Impact description */}
      <div className="space-y-2 mb-6">
        <Shimmer className="h-4 w-[90%] rounded-md" />
        <Shimmer className="h-4 w-[40%] rounded-md" />
      </div>

      {/* Badges list */}
      <div className="flex flex-wrap gap-1.5">
        <Shimmer className="h-6 w-16 rounded-md" />
        <Shimmer className="h-6 w-20 rounded-md" />
        <Shimmer className="h-6 w-14 rounded-md" />
        <Shimmer className="h-6 w-24 rounded-md" />
      </div>
    </div>
  );
});

ProjectCardSkeleton.displayName = "ProjectCardSkeleton";

// 5. Experience Timeline Card Skeleton (matching experience.tsx)
export const ExperienceSkeleton = memo(() => {
  return (
    <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-6 pl-6 sm:pl-8 py-2 w-full max-w-[48rem] mx-auto animate-pulse">
      <div className="relative mb-12">
        {/* Timeline Bubble node */}
        <span className="absolute -left-[43px] md:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        
        {/* Card */}
        <div className="premium-card p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="space-y-2">
              <Shimmer className="h-6 w-48 rounded-md" />
              <Shimmer className="h-4 w-32 rounded-md" />
            </div>
            <div className="space-y-1.5 md:text-right">
              <Shimmer className="h-6 w-24 rounded-md md:ml-auto" />
              <Shimmer className="h-4 w-28 rounded-md md:ml-auto" />
            </div>
          </div>

          {/* Description Lines */}
          <div className="space-y-2.5 mb-6">
            <Shimmer className="h-4 w-[95%] rounded-md" />
            <Shimmer className="h-4 w-full rounded-md" />
            <Shimmer className="h-4 w-[85%] rounded-md" />
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
            <Shimmer className="h-6 w-16 rounded-md" />
            <Shimmer className="h-6 w-14 rounded-md" />
            <Shimmer className="h-6 w-20 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
});

ExperienceSkeleton.displayName = "ExperienceSkeleton";
