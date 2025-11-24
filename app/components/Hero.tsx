// Hero section for my personal portfolio.
// Context: I am a security & compliance engineer focused on cloud, identity, and intelligent systems.
// Requirements for Copilot:
// - Show my name: "Ekonkar Singh".
// - Role line: "Security & Compliance Engineer · Cloud, Identity, Intelligent Systems".
// - One-liner: "I design and build security tooling that makes complex cloud and identity ecosystems observable, compliant, and resilient."
// - Two CTA buttons:
//   - "View Projects" -> smooth scroll to #projects.
//   - "Download CV" -> link to /EkonkarSinghResume_2025.pdf (placeholder).
// - Use framer-motion to fade and slide in the hero content on load.
// - Add a subtle glow/gradient accent behind or beside the content.
// - Responsive: stack vertically on mobile, side-by-side layout or larger text on desktop.

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const heroVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section id="hero" className="relative pt-16 pb-20">
      {/* subtle gradient/glow behind content */}
      <div className="pointer-events-none absolute -inset-12 z-0 flex items-center justify-center">
        <div className="w-2/3 max-w-4xl rounded-3xl blur-3xl opacity-30 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 h-56" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={heroVariants}
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Ekonkar Singh
            </h1>
            <p className="mt-2 text-lg font-medium text-cyan-300">
              Security & Compliance Engineer · Cloud, Identity, Intelligent Systems
            </p>

            <p className="mt-6 text-slate-300">
              I design and build security tooling that makes complex cloud and identity
              ecosystems observable, compliant, and resilient.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black shadow-md hover:brightness-105"
              >
                View Projects
              </a>

              <Link
                href="/resume.pdf"
                className="inline-flex items-center rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
                aria-label="Download CV"
              >
                Download CV
              </Link>
            </div>
          </div>

          <div className="mt-8 w-full shrink-0 md:mt-0 md:w-96">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/70 to-slate-800/60 p-6 shadow-lg">
              <h3 className="text-sm font-semibold text-cyan-300">What I build</h3>
              <p className="mt-2 text-sm text-slate-300">
                Security tooling, cloud compliance, identity automation, and observability
                for enterprise-scale environments.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
