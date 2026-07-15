"use client";

import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // track this to temporarily disable observer updates during click-driven smooth scrolls

  // A single, centralized Scrollspy Observer
  // Eliminates need for separate observer instances inside individual client components.
  React.useEffect(() => {
    const observerOptions = {
      rootMargin: "-25% 0px -55% 0px", // focus target band in the middle of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Suspend updates if user recently clicked a header navigation link
      if (Date.now() - timeOfLastClick < 1000) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const sectionMap: Record<string, SectionName> = {
            home: "Home",
            about: "About",
            expertise: "Expertise",
            experience: "Experience",
            projects: "Projects",
            achievements: "Achievements",
            contact: "Contact",
          };
          const mappedName = sectionMap[sectionId];
          if (mappedName) {
            setActiveSection(mappedName);
            const targetPath = sectionId === "home" ? "/" : `#${sectionId}`;
            const currentHash = window.location.hash;
            const targetHash = sectionId === "home" ? "" : `#${sectionId}`;
            if (currentHash !== targetHash) {
              window.history.replaceState(null, "", targetPath);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all page layout sections (LazySection wrapper containers + static components)
    const sectionIds = [
      "home",
      "about",
      "expertise",
      "experience",
      "projects",
      "achievements",
      "contact",
    ];
    
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [timeOfLastClick]);

  // Bottom scroll detector
  // Handles laptop viewport boundary bugs where the contact section is the last element
  // on page and cannot trigger the standard rootMargin zone because scrolling halts.
  React.useEffect(() => {
    const handleScroll = () => {
      if (Date.now() - timeOfLastClick < 1000) return;

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 25;

      if (isAtBottom) {
        setActiveSection("Contact");
        if (window.location.hash !== "#contact") {
          window.history.replaceState(null, "", "#contact");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [timeOfLastClick]);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
