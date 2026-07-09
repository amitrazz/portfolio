"use client";

import React, { useState, useEffect } from "react";
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

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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

        {/* Mobile Menu Button - min 44x44px touch target */}
        <button
          className="sm:hidden flex items-center justify-center w-11 h-11 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      {/* Mobile Links Side Drawer & Backdrop Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-zinc-950/40 backdrop-blur-sm z-[997] sm:hidden"
            />

            {/* Collapsible Slide-Out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              className="fixed top-0 right-0 h-full w-[280px] max-w-[85vw] bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800/60 z-[998] shadow-2xl flex flex-col p-6 sm:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-100 dark:border-zinc-900">
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
                {/* Close Button - min 44x44px touch target */}
                <button
                  className="w-11 h-11 flex items-center justify-center rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close Navigation Menu"
                >
                  <HiX size={22} />
                </button>
              </div>

              {/* Drawer Links */}
              <ul className="flex flex-col gap-2">
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
                        "flex items-center h-12 px-4 rounded-xl text-sm font-semibold transition-colors duration-200",
                        activeSection === link.name
                          ? "bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-500 rounded-l-none pl-3"
                          : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:text-zinc-950 dark:hover:text-zinc-100"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
