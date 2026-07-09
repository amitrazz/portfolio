"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import Logo from "./logo";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      {/* Desktop Sticky Navbar Container */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border-b border-zinc-200/50 bg-white/70 backdrop-blur-md shadow-sm sm:top-6 sm:h-[3.25rem] sm:w-[58rem] sm:rounded-full sm:border dark:border-zinc-800/50 dark:bg-zinc-950/70"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
      />

      <nav className="flex fixed top-0 left-1/2 h-[4.5rem] w-full -translate-x-1/2 items-center justify-between px-6 sm:top-6 sm:h-[3.25rem] sm:w-[58rem] sm:px-6">
        {/* Brand Logo */}
        <Link 
          href="#home"
          onClick={() => {
            setActiveSection("Home");
            setTimeOfLastClick(Date.now());
            setIsMobileMenuOpen(false);
          }}
          className="hover:opacity-90 transition"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden sm:flex items-center gap-1.5 text-[0.82rem] font-medium text-zinc-600 dark:text-zinc-400">
          {links.map((link) => (
            <li
              className="relative h-full flex items-center justify-center"
              key={link.hash}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center px-2.5 py-1.5 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors duration-200 relative",
                  {
                    "text-zinc-950 dark:text-zinc-100 font-semibold": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-zinc-100/90 rounded-full absolute inset-0 -z-10 dark:bg-zinc-800/80 border border-zinc-200/20 dark:border-zinc-700/30"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center justify-center p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      {/* Mobile Links Overlay Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
            className="fixed top-[4.5rem] left-0 w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800/60 z-[998] shadow-md flex flex-col py-6 px-6 sm:hidden"
          >
            <ul className="flex flex-col gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setIsMobileMenuOpen(false);
                    }}
                    className={clsx(
                      "block py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors",
                      {
                        "bg-zinc-100 dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 font-semibold border-l-3 border-indigo-500 rounded-l-none pl-3":
                          activeSection === link.name,
                      }
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
