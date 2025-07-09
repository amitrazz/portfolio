'use client';

import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import SectionHeading from './section-heading';

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

const tabs = [
  'All',
  'Programming Languages',
  'Frontend & Mobile',
  'Backend & APIs',
  'Cloud & DevOps',
  'Databases & Storage',
];

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills =
    activeTab === 'All' ? skillsData : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full border text-sm sm:text-base ${
              activeTab === tab
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'bg-white text-black dark:bg-white/10 dark:text-white/80'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.li
              key={skill.name}
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              variants={fadeInAnimationVariants}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0, y: 20 }}
              custom={index}
              layout
            >
              {skill.name}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
}
