"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section className="mb-16 sm:mb-28 max-w-[48rem] mx-auto px-4 w-full">
      <SectionHeading>Featured Case Studies</SectionHeading>
      
      <p className="mb-12 text-center text-zinc-700 dark:text-zinc-400 max-w-[36rem] mx-auto text-base sm:text-lg leading-relaxed">
        Deep dives into platform architecture, performance optimizations, and technical leadership solutions.
      </p>

      <div className="flex flex-col gap-6">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
