# Design Brief for Copilot – Ekonkar Singh Portfolio

Goal:
Build a modern, animated personal portfolio for **Ekonkar Singh**, a security & compliance engineer working with cloud, identity, and intelligent systems.

Overall feel:
- Dark, modern, and professional.
- Inspired by 2025 SaaS landing pages.
- Smooth but subtle animations (no chaotic motion).
- Focus on clarity of information and credibility.

Color and style:
- Dark background (near-black / slate).
- Accent colors: cyan/teal, electric blue, subtle purple.
- Use gradients sparingly (hero background, buttons, section dividers).
- Rounded-2xl cards with soft shadows and border accents.
- Typography: large, confident headings; clean sans-serif body text.

Tech stack:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- framer-motion for animations

Sections:
1. Navbar
   - Sticky top nav with logo text ("ES" or full name), and links to sections: About, Projects, Experience, Contact.
   - Smooth scroll to anchors (e.g. #about, #projects).
   - Slight background blur and border on scroll.

2. Hero
   - Name, role: “Security & Compliance Engineer · Cloud, Identity, Intelligent Systems”.
   - Strong one-liner: “I design and build security tooling that makes complex cloud and identity ecosystems observable, compliant, and resilient.”
   - CTA buttons: “View Projects” (scroll to #projects) and “Download CV”.
   - Supporting line for what I do.
   - Subtle entrance animation and background glow.

3. About
   - Short paragraph summarizing my story: IT Analyst in federal environments, identity & cloud security, automation.
   - Skills grid with categories: “Security & Compliance”, “Cloud & Networking”, “Tooling & Languages”, “AI & Analytics”.
   - Fade/slide-in on scroll.

4. Projects
   - Grid of project cards with hover animations.
   - Highlight projects:
     - TCRS Tenant Compliance Tool.
     - Cross-Tenant Migration Orchestrator (inspired by Microsoft Proview / CTIM).
     - Agentless NAC System.
     - Cloud Compliance Tool – ScubaGear.
     - SSH Attack Pattern Analyzer.
     - AI-Based Explicit Content Detection System.
   - Each card: title, 2–3 line description, tech tags.

5. Experience
   - Vertical timeline:
     - IT Analyst (Security and Compliance) – Shared Services Canada.
     - Network Specialist – Alstom, Thunder Bay.
     - Information Systems Administrator – McDonald’s.
   - For each role, 2–3 bullet points focusing on impact.

6. Contact
   - Simple “Let’s talk” section.
   - Short line about collaborations and opportunities.
   - Contact options: email and LinkedIn button.
   - Optional small form (name, email, message) as stretch goal.

7. Footer
   - Name, current year, and small note like “Built with Next.js, Tailwind, and framer-motion.”
   - Social icons/links (GitHub, LinkedIn).

Animation principles:
- Use framer-motion for:
  - Section entrance (fade + slide).
  - Hover effects on cards and buttons (scale, shadow, subtle glow).
- Keep performance in mind—no huge parallax or infinite loops.

Responsive behavior:
- Mobile first.
- Single-column layout on mobile.
- Two/three-column grids on desktop for projects and skills.
- Nav collapses into a simple mobile menu.
