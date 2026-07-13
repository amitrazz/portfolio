import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Architecture from "@/components/architecture";
import Achievements from "@/components/achievements";
import Principles from "@/components/principles";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex flex-col items-center px-4 w-full outline-none">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Architecture />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Achievements />
      <SectionDivider />
      <Principles />
      <SectionDivider />
      <Contact />
    </main>
  );
}
