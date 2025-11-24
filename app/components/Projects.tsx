// Projects section showcasing my key work.
// Requirements for Copilot:
// - Section title: "Featured Projects".
// - Short intro line about building security and compliance tooling.
// - Define an array of project objects in TypeScript with fields: title, description, tech[], link?.
// - Include at least these projects:
//   1) "TCRS Tenant Compliance Tool": Rego-based tenant compliance engine for Microsoft 365/Azure.
//   2) "Cross-Tenant Migration Orchestrator": Cross-tenant identity + workload migration tool inspired by Microsoft Proview / CTIM.
//   3) "Agentless Network Access Control (NAC) System": Bash + RADIUS + Slack for agentless posture checks.
//   4) "Cloud Compliance Tool – ScubaGear": Automated cloud compliance checks with ~30% faster assessments.
//   5) "SSH Attack Pattern Analyzer": Honeypot-based SSH log analysis with geo-mapped Power BI visuals.
//   6) "AI-Based Explicit Content Detection": AWS Rekognition + Lambda image moderation pipeline.
// - Render projects as animated cards in a responsive grid using framer-motion (fade-in + slight upward motion).
// - On hover, cards should slightly scale up and deepen the shadow.
// - Show tech stack as small rounded badge chips.

"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "TCRS Tenant Compliance Tool",
    description:
      "Rego-based tenant compliance engine for Microsoft 365 and Azure that enforces configuration baselines and flags drift.",
    tech: ["OPA/Rego", "Azure", "TypeScript"],
  },
  {
    title: "Cross-Tenant Migration Orchestrator",
    description:
      "Identity and workload migration orchestration across tenants with preflight checks and rollback capabilities.",
    tech: ["Azure AD", "PowerShell", "Go"],
  },
  {
    title: "Agentless Network Access Control (NAC) System",
    description:
      "Agentless posture checks using RADIUS and Slack-based operator workflows to verify device posture before access.",
    tech: ["RADIUS", "Bash", "Slack API"],
  },
  {
    title: "Cloud Compliance Tool – ScubaGear",
    description:
      "Automated cloud compliance assessments with ~30% faster scan times and clear remediation guidance.",
    tech: ["AWS", "Azure", "Python"],
  },
  {
    title: "SSH Attack Pattern Analyzer",
    description:
      "Honeypot-driven SSH log analysis with geo-mapped dashboards and attacker pattern detection.",
    tech: ["Node", "Elastic Stack", "Power BI"],
  },
  {
    title: "AI-Based Explicit Content Detection",
    description:
      "Serverless image moderation pipeline using AWS Rekognition and Lambda to flag explicit content.",
    tech: ["AWS Rekognition", "Lambda", "Python"],
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
        <p className="mt-2 text-slate-300">Building security and compliance tooling across cloud and identity platforms.</p>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={listVariants}
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.li
              key={p.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md"
            >
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
