import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import dynamic from "next/dynamic";
import LazySection from "@/components/lazy-section";

import { 
  ExperienceSkeleton, 
  ProjectCardSkeleton, 
  SummaryCardSkeleton 
} from "@/components/shimmer";

const ExperienceLoader = () => (
  <div className="mb-16 sm:mb-28 max-w-[48rem] mx-auto px-4 w-full animate-pulse">
    <div className="h-8 w-64 bg-zinc-200 dark:bg-zinc-800 rounded-lg mx-auto mb-12" />
    <div className="flex flex-col gap-6">
      <ExperienceSkeleton />
      <ExperienceSkeleton />
    </div>
  </div>
);

const ProjectsLoader = () => (
  <div className="mb-16 sm:mb-28 max-w-[48rem] mx-auto px-4 w-full animate-pulse">
    <div className="h-8 w-64 bg-zinc-200 dark:bg-zinc-800 rounded-lg mx-auto mb-6" />
    <div className="h-4 w-[24rem] max-w-full bg-zinc-200 dark:bg-zinc-800 rounded-md mx-auto mb-12" />
    <div className="flex flex-col gap-6">
      <ProjectCardSkeleton />
      <ProjectCardSkeleton />
    </div>
  </div>
);

const SkillsLoader = () => (
  <div className="mb-28 max-w-[53rem] mx-auto px-4 w-full animate-pulse text-center">
    <div className="h-8 w-64 bg-zinc-200 dark:bg-zinc-800 rounded-lg mx-auto mb-6" />
    <div className="h-4 w-[24rem] max-w-full bg-zinc-200 dark:bg-zinc-800 rounded-md mx-auto mb-12" />
    <div className="grid sm:grid-cols-2 gap-6 max-w-[58rem] mx-auto text-left">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-40 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-zinc-200/20 dark:border-zinc-800/20" />
      ))}
    </div>
  </div>
);

const AchievementsLoader = () => (
  <div className="mb-16 sm:mb-28 max-w-[58rem] mx-auto px-4 w-full animate-pulse">
    <div className="h-8 w-64 bg-zinc-200 dark:bg-zinc-800 rounded-lg mx-auto mb-6" />
    <div className="h-4 w-[24rem] max-w-full bg-zinc-200 dark:bg-zinc-800 rounded-md mx-auto mb-12" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <SummaryCardSkeleton />
      <SummaryCardSkeleton />
      <SummaryCardSkeleton />
    </div>
  </div>
);

const ContactLoader = () => (
  <div className="mb-16 sm:mb-28 max-w-[42rem] mx-auto px-4 w-full animate-pulse">
    <div className="h-8 w-64 bg-zinc-200 dark:bg-zinc-800 rounded-lg mx-auto mb-6" />
    <div className="h-4 w-[32rem] max-w-full bg-zinc-200 dark:bg-zinc-800 rounded-md mx-auto mb-8" />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div className="h-[54px] bg-zinc-200 dark:bg-zinc-800 rounded-2xl" />
      <div className="h-[54px] bg-zinc-200 dark:bg-zinc-800 rounded-2xl" />
      <div className="h-[54px] bg-zinc-200 dark:bg-zinc-800 rounded-2xl" />
    </div>
    <div className="h-80 bg-zinc-100 dark:bg-zinc-900 rounded-2xl" />
  </div>
);

const Experience = dynamic(() => import("@/components/experience"), {
  loading: () => <ExperienceLoader />
});

const Projects = dynamic(() => import("@/components/projects"), {
  loading: () => <ProjectsLoader />
});

const Skills = dynamic(() => import("@/components/skills"), {
  loading: () => <SkillsLoader />
});

const Achievements = dynamic(() => import("@/components/achievements"), {
  loading: () => <AchievementsLoader />
});

const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <ContactLoader />
});

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex flex-col items-center px-4 w-full outline-none">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      
      {/* Unified Expertise Segment (contains Architecture, Principles, and Stack tabs) */}
      <LazySection id="expertise" fallback={<SkillsLoader />} estimatedHeight="600px">
        <Skills />
      </LazySection>
      <SectionDivider />
      
      <LazySection id="experience" fallback={<ExperienceLoader />} estimatedHeight="1000px">
        <Experience />
      </LazySection>
      <SectionDivider />
      
      <LazySection id="projects" fallback={<ProjectsLoader />} estimatedHeight="800px">
        <Projects />
      </LazySection>
      <SectionDivider />
      
      <LazySection id="achievements" fallback={<AchievementsLoader />} estimatedHeight="480px">
        <Achievements />
      </LazySection>
      <SectionDivider />
      
      <LazySection id="contact" fallback={<ContactLoader />} estimatedHeight="580px">
        <Contact />
      </LazySection>
    </main>
  );
}
