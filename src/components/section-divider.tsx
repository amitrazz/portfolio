// Server Component — no framer-motion, no 'use client', no JS shipped
// The enter animation is done with a CSS @keyframes class defined in globals.css
export default function SectionDivider() {
  return (
    <div
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20 animate-fade-in-up"
      aria-hidden="true"
    />
  );
}
