// Experience section as a vertical timeline.
// Requirements for Copilot:
// - Section title: "Experience".
// - Show roles in reverse chronological order with company, location, and dates:
//   1) IT Analyst (Security and Compliance) – Shared Services Canada | May 2023 – April 2024.
//   2) Network Specialist – Alstom, Thunder Bay | June 2022 – August 2022.
//   3) Information Systems Administrator – McDonald's | January 2021 – May 2022.
// - For each role, include 2–3 bullet points emphasizing impact (e.g., reduced identity issues by 26%, improved uptime by 15%, created malware detection benchmarks).
// - Layout: left vertical line (timeline), dots for each role, content to the right.
// - Use semantic HTML (e.g., <section>, <h3>, <p>, <ul>, <li>).
// - Style with Tailwind to fit the dark theme.

"use client";

export default function Experience() {
  const roles = [
    {
      title: "IT Analyst (Security and Compliance)",
      company: "Shared Services Canada",
      dates: "May 2023 – April 2024",
      points: [
        "Improved identity incident response and reduced account-related incidents by ~26%.",
        "Built compliance checks and automation to enforce baseline configurations.",
      ],
    },
    {
      title: "Network Specialist",
      company: "Alstom, Thunder Bay",
      dates: "June 2022 – August 2022",
      points: [
        "Optimized network performance and improved uptime via monitoring and tuning.",
        "Supported SD-WAN deployments and operational runbooks.",
      ],
    },
    {
      title: "Information Systems Administrator",
      company: "McDonald's",
      dates: "January 2021 – May 2022",
      points: [
        "Managed systems and improved patching cadence to reduce vulnerabilities.",
        "Created monitoring checks and basic malware detection benchmarks.",
      ],
    },
  ];

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-8">
      <h2 className="text-2xl font-bold text-white">Experience</h2>

      <div className="mt-6 relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-slate-800" />

        <ul className="space-y-8">
          {roles.map((r) => (
            <li key={r.title} className="relative">
              <div className="absolute left-[-18px] top-1">
                <span className="inline-block h-3 w-3 rounded-full bg-cyan-400 ring-2 ring-slate-900" />
              </div>

              <div className="ml-2">
                <h3 className="text-lg font-semibold text-white">{r.title}</h3>
                <div className="text-sm text-slate-400">{r.company} • <span className="text-slate-300">{r.dates}</span></div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-300">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
