"use client";

import React, { useState } from 'react';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import { LuMail, LuSend, LuGithub, LuLinkedin } from 'react-icons/lu';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.5);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    // Simulate sending message
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    toast.success("Message sent! I'll get back to you shortly.");
    setIsPending(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 max-w-[42rem] text-center scroll-mt-28 px-4 w-full"
    >
      <SectionHeading>Get In Touch</SectionHeading>

      <p className="text-zinc-600 dark:text-zinc-400 mt-2 mb-8 leading-relaxed">
        Let&apos;s discuss distributed system design, frontend performance optimization, platform engineering, or engineering leadership. Reach out via the form below or directly through my links.
      </p>

      <div className="flex flex-col gap-8 text-left">
        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="mailto:ammiittrazz@gmail.com"
            className="premium-card p-4 flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <LuMail size={18} />
            <span>Email Me</span>
          </a>
          <a
            href="https://www.linkedin.com/in/amitrazz"
            target="_blank"
            className="premium-card p-4 flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <LuLinkedin size={18} />
            <span>Connect on LinkedIn</span>
          </a>
          <a
            href="https://github.com/amitrazz"
            target="_blank"
            className="premium-card p-4 flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <LuGithub size={18} />
            <span>View GitHub</span>
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="premium-card p-6 md:p-8 flex flex-col gap-4 bg-white/50 dark:bg-zinc-950/50"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Your Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              maxLength={500}
              placeholder="recruiter@company.com"
              className="h-11 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-50 focus:border-indigo-500 focus:outline-none transition text-sm"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Your Message
            </label>
            <textarea
              id="contact-message"
              required
              maxLength={5000}
              placeholder="Hi Amit, I'd love to chat about..."
              className="h-32 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-50 focus:border-indigo-500 focus:outline-none transition text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="group h-11 bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-98 transition disabled:scale-100 disabled:opacity-50 cursor-pointer shadow-md text-sm"
          >
            {isPending ? (
              <div className="h-4 w-4 border-2 border-zinc-500 border-t-zinc-950 rounded-full animate-spin" />
            ) : (
              <>
                Send Message <LuSend className="text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
