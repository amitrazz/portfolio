import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full max-w-[58rem] mx-auto px-6 py-8 border-t border-zinc-200/50 dark:border-zinc-800/50 text-xs text-zinc-500 dark:text-zinc-400 mt-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
        {/* Left Side: Copyright */}
        <small className="font-medium text-zinc-500 dark:text-zinc-400">
          &copy; {currentYear} Amit Kumar. All rights reserved.
        </small>
        
        {/* Right Side: Tech Stack */}
        <p className="font-medium text-zinc-500 dark:text-zinc-400 text-center sm:text-right">
          Engineered with React, Next.js, Tailwind CSS, &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}
