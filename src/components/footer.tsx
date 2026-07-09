"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto py-8 px-6 border-t border-zinc-200/50 dark:border-zinc-800/40 text-center text-zinc-600 dark:text-zinc-400 text-xs w-full max-w-[58rem] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <small className="block text-zinc-600 dark:text-zinc-400 font-medium">
        &copy; {currentYear} Amit Kumar. All rights reserved.
      </small>
      <p className="text-zinc-600 dark:text-zinc-400 font-medium">
        Engineered with React, Next.js, Tailwind CSS, & Framer Motion.
      </p>
    </footer>
  );
}
