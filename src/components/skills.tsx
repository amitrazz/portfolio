"use client";

import { skillsData, architectureExpertise, engineeringPrinciples } from '@/lib/data';
import { useState, useEffect } from 'react';
import SectionHeading from './section-heading';

// ==========================================
// SVGs & Icon Helpers
// ==========================================

// Architecture Icons
function IconNetwork() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v4c0 1 .5 2 2 2h10c1.5 0 2-1 2-2V8"/><line x1="12" y1="12" x2="12" y2="16"/></svg>;
}
function IconServer() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
}
function IconBlocks() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>;
}
function IconCpu() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/></svg>;
}
function IconActivity() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
}
function IconAws() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.47 0-.89.09-1.3.27A6 6 0 0 0 3 12c0 3.31 2.69 6 6 6h8.5Z"/></svg>;
}
function IconGraphql() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="2" x2="12" y2="22"/><path d="M2 8.5l10 6 10-6"/></svg>;
}
function IconLayers() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
}
function IconShield() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
function IconTerminal() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>;
}

// Principles Icons
function IconCompass() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>;
}
function IconFlame() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>;
}
function IconSparkles() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>;
}

// Skills Icons
function IconSkillArch() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
}
function IconSkillFront() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/></svg>;
}
function IconSkillBack() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
}
function IconSkillCloud() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400"><path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.47 0-.89.09-1.3.27A6 6 0 0 0 3 12c0 3.31 2.69 6 6 6h8.5Z"/></svg>;
}
function IconSkillData() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>;
}
function IconSkillMsg() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400"><path d="M22 12a10 10 0 0 0-15-8.66M2.2 12a10 10 0 0 0 15 8.66"/><path d="m22 2-6 6M2 22l6-6"/></svg>;
}
function IconSkillDev() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>;
}
function IconSkillLead() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>;
}

// Icon Resolvers
function getArchitectureIcon(iconName: string) {
  switch (iconName) {
    case 'network': return <IconNetwork />;
    case 'server': return <IconServer />;
    case 'blocks': return <IconBlocks />;
    case 'cpu': return <IconCpu />;
    case 'activity': return <IconActivity />;
    case 'aws': return <IconAws />;
    case 'graphql': return <IconGraphql />;
    case 'layers': return <IconLayers />;
    case 'shield': return <IconShield />;
    case 'terminal': return <IconTerminal />;
    default: return <IconNetwork />;
  }
}

function getPrincipleIcon(iconName: string) {
  switch (iconName) {
    case 'compass': return <IconCompass />;
    case 'terminal': return <IconTerminal />;
    case 'flame': return <IconFlame />;
    case 'sparkles': return <IconSparkles />;
    case 'shield': return <IconShield />;
    case 'activity': return <IconActivity />;
    default: return <IconCompass />;
  }
}

function getSkillCategoryIcon(cat: string) {
  switch (cat) {
    case 'Architecture': return <IconSkillArch />;
    case 'Frontend': return <IconSkillFront />;
    case 'Backend': return <IconSkillBack />;
    case 'Cloud': return <IconSkillCloud />;
    case 'Data': return <IconSkillData />;
    case 'Messaging': return <IconSkillMsg />;
    case 'DevOps': return <IconSkillDev />;
    case 'Leadership': return <IconSkillLead />;
    default: return <IconSkillArch />;
  }
}

// Category Text Mapper
const skillCategoryNames: Record<string, string> = {
  Architecture: 'System Architecture',
  Frontend: 'Frontend Platform & DX',
  Backend: 'Backend & API Engineering',
  Cloud: 'Cloud & Infrastructure',
  Data: 'Databases & Caching',
  Messaging: 'Event-Driven Messaging',
  DevOps: 'DevOps & Observability',
  Leadership: 'Technical Leadership & Strategy'
};

type SectionTab = 'architecture' | 'skills' | 'principles';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SectionTab>('architecture');
  const [searchQuery, setSearchQuery] = useState('');
  const [skillsViewMode, setSkillsViewMode] = useState<'categorized' | 'flat'>('categorized');

  // 1. URL Hash Synchronization & Anchor Scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      let matchedTab: SectionTab | null = null;
      if (hash === '#architecture') {
        matchedTab = 'architecture';
      } else if (hash === '#skills') {
        matchedTab = 'skills';
      } else if (hash === '#principles') {
        matchedTab = 'principles';
      } else if (hash === '#expertise') {
        matchedTab = activeTab; // maintain current active tab
      }

      if (matchedTab) {
        setActiveTab(matchedTab);
        const element = document.getElementById('expertise');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Check hash on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeTab]);

  // 2. Tab switcher
  const changeTab = (tab: SectionTab) => {
    setActiveTab(tab);
  };

  // ==========================================
  // Skills Tab Filtering
  // ==========================================
  const filteredSkills = skillsData.filter((skill) =>
    skill.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const categoriesList = Array.from(new Set(skillsData.map((s) => s.category)));
  const groupedSkills = categoriesList.reduce((acc, cat) => {
    const skillsInCat = filteredSkills.filter((s) => s.category === cat);
    if (skillsInCat.length > 0) {
      acc[cat] = skillsInCat;
    }
    return acc;
  }, {} as Record<string, typeof skillsData[number][]>);

  return (
    <section
      className="mb-16 sm:mb-28 max-w-[58rem] mx-auto px-4 w-full scroll-mt-28"
    >
      <SectionHeading>Expertise &amp; Standards</SectionHeading>
      
      <p className="mb-10 text-center text-zinc-700 dark:text-zinc-300 max-w-[36rem] mx-auto text-base sm:text-lg leading-relaxed">
        My engineering framework, professional skills portfolio, and architectural values.
      </p>

      {/* Main Combined Category Navigation Pills */}
      <div className="flex bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/80 p-1.5 rounded-full max-w-[32rem] mx-auto mb-12 shadow-inner">
        <button
          onClick={() => changeTab('architecture')}
          className={`flex-1 py-2.5 px-4 rounded-full text-xs sm:text-sm font-bold tracking-wide text-center transition cursor-pointer select-none border-none ${
            activeTab === 'architecture'
              ? 'bg-white dark:bg-zinc-950 text-indigo-600 dark:text-indigo-400 shadow-md scale-[1.01]'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
          }`}
        >
          Architecture
        </button>
        <button
          onClick={() => changeTab('principles')}
          className={`flex-1 py-2.5 px-4 rounded-full text-xs sm:text-sm font-bold tracking-wide text-center transition cursor-pointer select-none border-none ${
            activeTab === 'principles'
              ? 'bg-white dark:bg-zinc-950 text-indigo-600 dark:text-indigo-400 shadow-md scale-[1.01]'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
          }`}
        >
          Principles
        </button>
        <button
          onClick={() => changeTab('skills')}
          className={`flex-1 py-2.5 px-4 rounded-full text-xs sm:text-sm font-bold tracking-wide text-center transition cursor-pointer select-none border-none ${
            activeTab === 'skills'
              ? 'bg-white dark:bg-zinc-950 text-indigo-600 dark:text-indigo-400 shadow-md scale-[1.01]'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
          }`}
        >
          Skills &amp; Stack
        </button>
      </div>

      {/* ==========================================
          TAB CONTENT RENDERERS
          ========================================== */}

      {activeTab === 'architecture' && (
        /* 1. Architecture Tab */
        <div key="tab-architecture" className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left animate-fade-in-up">
          {architectureExpertise.map((item, index) => (
            <div
              key={item.title}
              className="premium-card p-5 sm:p-6 flex flex-col justify-between hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition duration-300"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2.5 bg-zinc-100 dark:bg-zinc-900/80 rounded-xl border border-zinc-200/20 dark:border-zinc-800/50 flex items-center justify-center shrink-0 shadow-sm text-indigo-600 dark:text-indigo-400">
                    {getArchitectureIcon(item.icon)}
                  </span>
                  <h3 className="font-extrabold text-sm sm:text-base text-zinc-900 dark:text-zinc-50 tracking-tight">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Sub capabilities badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/40">
                {item.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="bg-zinc-50 dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 text-[10px] sm:text-xs px-2.5 py-1 rounded-md border border-zinc-200/10 font-medium"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'principles' && (
        /* 2. Principles Tab */
        <div key="tab-principles" className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left animate-fade-in-up">
          {engineeringPrinciples.map((item, index) => (
            <div
              key={item.title}
              className="premium-card p-5 sm:p-6 flex flex-col justify-between hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition duration-300"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2.5 bg-zinc-100 dark:bg-zinc-900/80 rounded-xl border border-zinc-200/20 dark:border-zinc-800/50 flex items-center justify-center shrink-0 shadow-sm text-indigo-600 dark:text-indigo-400">
                    {getPrincipleIcon(item.icon)}
                  </span>
                  <h3 className="font-extrabold text-sm sm:text-base text-zinc-900 dark:text-zinc-50 tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'skills' && (
        /* 3. Skills & Stack Tab (Including Search & Toggle) */
        <div key="tab-skills" className="animate-fade-in-up">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-8 max-w-[58rem] mx-auto w-full">
            {/* Search Input */}
            <div className="relative flex-1 sm:max-w-xs text-left">
              <input
                type="text"
                placeholder="Search skills (e.g. React, AWS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-9 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/80 rounded-xl text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition shadow-inner"
              />
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer border-none bg-transparent flex items-center justify-center p-0"
                  aria-label="Clear search"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              )}
            </div>
            
            {/* Toggle Button */}
            <div className="flex bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/80 p-1.5 rounded-full shadow-inner shrink-0">
              <button
                onClick={() => setSkillsViewMode('categorized')}
                className={`py-1 px-4 rounded-full text-xs font-bold transition cursor-pointer select-none border-none ${
                  skillsViewMode === 'categorized'
                    ? 'bg-white dark:bg-zinc-950 text-indigo-600 dark:text-indigo-400 shadow-md'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
                }`}
              >
                Categorized Grid
              </button>
              <button
                onClick={() => setSkillsViewMode('flat')}
                className={`py-1 px-4 rounded-full text-xs font-bold transition cursor-pointer select-none border-none ${
                  skillsViewMode === 'flat'
                    ? 'bg-white dark:bg-zinc-950 text-indigo-600 dark:text-indigo-400 shadow-md'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
                }`}
              >
                All Skills List
              </button>
            </div>
          </div>

          {skillsViewMode === 'categorized' ? (
            /* Categorized Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {Object.entries(groupedSkills).map(([cat, skills]) => (
                <div
                  key={cat}
                  className="premium-card p-5 sm:p-6 flex flex-col justify-between hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition duration-300"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="p-2.5 bg-zinc-100 dark:bg-zinc-900/80 rounded-xl border border-zinc-200/20 dark:border-zinc-800/50 flex items-center justify-center shrink-0 shadow-sm">
                        {getSkillCategoryIcon(cat)}
                      </span>
                      <h3 className="font-extrabold text-sm sm:text-base text-zinc-900 dark:text-zinc-50 tracking-tight">
                        {skillCategoryNames[cat] || cat}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="bg-zinc-100/60 dark:bg-zinc-900/50 hover:bg-zinc-200/40 dark:hover:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-xs px-2.5 py-1 rounded-md border border-zinc-200/10 font-medium transition select-none"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Flat Filtered List View */
            <div className="flex flex-wrap justify-center gap-2 max-w-[44rem] mx-auto pt-2">
              {filteredSkills.map((skill, index) => (
                <span
                  key={skill.name}
                  className="premium-card px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2 hover:border-indigo-500/50 transition duration-200 select-none animate-fade-in-up"
                  style={{ animationDelay: `${index * 15}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {skill.name}
                </span>
              ))}
              {filteredSkills.length === 0 && (
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-8">
                  No matching skills found. Try searching for something else!
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
