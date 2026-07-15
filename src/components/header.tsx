"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

import Logo from "./logo";

// Inline SVGs — eliminates react-icons/hi from this chunk
function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="16" y2="18" />
    </svg>
  );
}
function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

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

  // Focus trapping and Esc key listener for mobile side drawer
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled])'
        );
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    // Auto-focus the close button inside drawer
    const focusTimeout = setTimeout(() => {
      const closeBtn = drawerRef.current?.querySelector('button[aria-label="Close Navigation Menu"]');
      if (closeBtn) {
        (closeBtn as HTMLElement).focus();
      }
    }, 50);

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(focusTimeout);
    };
  }, [isMobileMenuOpen]);

  // Restore focus to the trigger button when mobile menu is closed
  const [wasMobileMenuOpen, setWasMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (isMobileMenuOpen) {
      setWasMobileMenuOpen(true);
    } else if (wasMobileMenuOpen) {
      triggerRef.current?.focus();
      setWasMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen, wasMobileMenuOpen]);

  return (
    <header className="z-[999] relative">
      {/*
        Desktop Sticky Navbar Container.
        BEFORE: motion.div with spring y:-100→0 animation.
        WHY IT WAS SLOW: Spring animations on fixed+backdrop-blur elements force
        the compositor to promote the layer, then run a JS loop updating transform
        on every frame until the spring settles (~60 frames × layout read).
        AFTER: CSS @keyframes navSlideDown — runs entirely on the compositor thread,
        no JS involvement after the class is applied. GPU only.
      */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border-b border-zinc-200/50 bg-white/70 backdrop-blur-md shadow-sm sm:top-6 sm:h-[3.25rem] sm:w-[58rem] sm:rounded-full sm:border dark:border-zinc-800/50 dark:bg-zinc-950/70 animate-nav-slide-down"
      />

      <nav className="flex fixed top-0 left-1/2 h-[4.5rem] w-full -translate-x-1/2 items-center justify-between px-6 sm:top-6 sm:h-[3.25rem] sm:w-[58rem] sm:px-6 animate-nav-slide-down">
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
        <ul className="hidden sm:flex items-center gap-1.5 text-[0.82rem] font-medium text-zinc-700 dark:text-zinc-400">
          {links.map((link) => (
            <li
              className="relative h-full flex items-center justify-center"
              key={link.hash}
            >
              {/*
                Active nav indicator.
                BEFORE: motion.span with layoutId="activeSection" (FLIP technique).
                WHY IT WAS SLOW: layoutId reads getBoundingClientRect() twice per
                navigation — once for the "first" position, once for the "last".
                This is a forced synchronous layout (reflow) on EVERY scroll event
                that changes the active section. With IntersectionObserver firing
                on scroll, this could be 10-20 forced reflows per second.
                AFTER: CSS position:absolute pseudo-element with opacity+scale
                transition. The element is always in DOM (opacity:0 when inactive)
                so there's no mount/unmount layout thrash.
              */}
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
                aria-current={activeSection === link.name ? "page" : undefined}
              >
                {link.name}
                {/* Always-in-DOM indicator — transitions with opacity+scale (GPU composited) */}
                <span
                  className={clsx(
                    "bg-zinc-100/90 rounded-full absolute inset-0 -z-10 dark:bg-zinc-800/80 border border-zinc-200/20 dark:border-zinc-700/30",
                    "transition-[opacity,transform] duration-200",
                    activeSection === link.name
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - min 44x44px touch target */}
        <button
          ref={triggerRef}
          className="sm:hidden flex items-center justify-center w-11 h-11 text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <IconClose /> : <IconMenu />}
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
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
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
                  className="w-11 h-11 flex items-center justify-center rounded-lg text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close Navigation Menu"
                >
                  <IconClose />
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
                          : "text-zinc-700 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:text-zinc-950 dark:hover:text-zinc-100"
                      )}
                      aria-current={activeSection === link.name ? "page" : undefined}
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
