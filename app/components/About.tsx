// About section for my portfolio.
// Context: I have experience as an IT Analyst (Security & Compliance) at Shared Services Canada,
// a Network Specialist at Alstom, and an Information Systems Administrator at McDonald's.

// - Section title: "About".
// - Short paragraph telling my story: security & compliance focus, cloud and identity, automation.
// - Below the paragraph, create a responsive grid of skill categories:
//   - "Security & Compliance": threat detection, identity & access management, NIST/ISO 27001, zero trust.
//   - "Cloud & Networking": Azure, AWS, Microsoft 365, SD-WAN, Linux administration.
//   - "Tooling & Languages": Python, PowerShell, Bash, R, Git.
//   - "AI & Analytics": scikit-learn, TensorFlow basics, AWS Rekognition, data visualization.
// - Use framer-motion for a subtle fade/slide-in when this section enters the viewport (optional).
// - Use Tailwind for styling: heading, muted description text, and card-like skill boxes.

"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      title: "Security & Compliance",
      items: ["Threat detection", "Identity & access management", "NIST/ISO 27001", "Zero Trust"],
    },
    {
      title: "Cloud & Networking",
      items: ["Azure", "AWS", "Microsoft 365", "SD-WAN", "Linux"],
    },
    {
      title: "Tooling & Languages",
      items: ["Python", "PowerShell", "Bash", "R", "Git"],
    },
    {
      title: "AI & Analytics",
      items: ["scikit-learn", "TensorFlow basics", "AWS Rekognition", "Data viz"],
    },
  ];

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-8">
      <h2 className="text-2xl font-bold text-white">About</h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        I focus on security and compliance across cloud and identity platforms, building
        automation and observability that helps teams stay resilient and compliant.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <div key={s.title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-semibold text-cyan-300">{s.title}</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              {s.items.map((it) => (
                <li key={it}>• {it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
