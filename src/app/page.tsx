import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import dynamic from "next/dynamic";
import LazySection from "@/components/lazy-section";

const Skeleton = () => (
  <div className="h-40 w-full animate-pulse bg-zinc-100 dark:bg-zinc-900 rounded-2xl max-w-[48rem] mx-auto my-12" />
);

const Architecture = dynamic(() => import("@/components/architecture"), {
  loading: () => <Skeleton />
});

const Experience = dynamic(() => import("@/components/experience"), {
  loading: () => <Skeleton />
});

const Projects = dynamic(() => import("@/components/projects"), {
  loading: () => <Skeleton />
});

const Skills = dynamic(() => import("@/components/skills"), {
  loading: () => <Skeleton />
});

const Achievements = dynamic(() => import("@/components/achievements"), {
  loading: () => <Skeleton />
});

const Principles = dynamic(() => import("@/components/principles"), {
  loading: () => <Skeleton />
});

const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <Skeleton />
});

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex flex-col items-center px-4 w-full outline-none">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      
      <LazySection id="architecture" fallback={<Skeleton />}>
        <Architecture />
      </LazySection>
      <SectionDivider />
      
      <LazySection id="experience" fallback={<Skeleton />}>
        <Experience />
      </LazySection>
      <SectionDivider />
      
      <LazySection id="projects" fallback={<Skeleton />}>
        <Projects />
      </LazySection>
      <SectionDivider />
      
      <LazySection id="skills" fallback={<Skeleton />}>
        <Skills />
      </LazySection>
      <SectionDivider />
      
      <LazySection id="achievements" fallback={<Skeleton />}>
        <Achievements />
      </LazySection>
      <SectionDivider />
      
      <LazySection id="principles" fallback={<Skeleton />}>
        <Principles />
      </LazySection>
      <SectionDivider />
      
      <LazySection id="contact" fallback={<Skeleton />}>
        <Contact />
      </LazySection>
    </main>
  );
}
