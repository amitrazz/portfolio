"use client";

import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative flex items-center justify-center">
        {/* Subtle hover background glow */}
        <div className="absolute inset-0 bg-indigo-500/10 rounded-lg blur-md scale-75 group-hover:scale-100 transition-all duration-350" />
        
        <svg
          width="26"
          height="26"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:scale-105 transition-all duration-300"
        >
          {/* Isometric Structural Hexagon Contour */}
          <path
            d="M50 15L85 35V75L50 95L15 75V35L50 15Z"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-25"
          />
          {/* Layer 1 (Base): Distributed Infrastructure */}
          <path
            d="M25 68L50 81L75 68"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-40"
          />
          {/* Layer 2 (Middle): API & Caching Layer */}
          <path
            d="M25 51L50 64L75 51"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-70"
          />
          {/* Layer 3 (Apex): Frontend Platform UI */}
          <path
            d="M50 20L22 34L50 48L78 34L50 20Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
            className="text-indigo-500 dark:text-indigo-400"
          />
        </svg>
      </div>
      
      <span className="text-base font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
        amit<span className="text-indigo-500 font-black">.</span>kumar
      </span>
    </div>
  );
}
