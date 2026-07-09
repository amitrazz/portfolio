import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight capitalize mb-6 sm:mb-8 text-center text-zinc-900 dark:text-zinc-50">
      {children}
    </h2>
  );
}
