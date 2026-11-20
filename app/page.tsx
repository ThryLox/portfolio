import { getPostBySlug, getAllPosts, getConfig, getMergedPRs } from "@/lib/content";
import { WhoAmI } from "@/app/components/sections/WhoAmI";
import { Certifications, Publications } from "@/app/components/sections/Credentials";
import { SystemConfig } from "@/app/components/sections/SystemConfig";
import { DeploymentGrid } from "@/app/components/sections/DeploymentGrid";
import { Experience } from "@/app/components/sections/Experience";
import { OpenSource } from "@/app/components/sections/OpenSource";
import { ContactSection } from "@/app/components/sections/ContactSection";
import { AnimatedSections } from "@/app/components/sections/AnimatedSections";
import { site } from "@/lib/site";

export default async function Home() {
  const whoAmI = await getPostBySlug("whoami", "root");
  const deployments = getAllPosts("deployments");
  const cronjobs = getAllPosts("cronjobs");
  const prs = getMergedPRs();
  const config = getConfig() as any;
  const certs = config?.certifications || [];
  const skills = config?.skills || [];

  // Every number is derived from the content files, so the hero can't drift from the sections below
  const stats = [
    { value: certs.length, label: "Certifications" },
    { value: prs.length, label: "Merged open-source PRs" },
    { value: deployments.length, label: "Projects built" },
    { value: "CCIDSA '26", label: "Paper presented" },
  ];

  const terminal = {
    projects: deployments.map((d) => ({ slug: d.slug, title: d.title as string })),
    jobs: cronjobs.map((j) => ({ slug: j.slug, title: j.title as string, company: j.company as string })),
    certs: certs.map((c: any) => ({ code: c.code, name: c.name })),
    skills: skills.map((s: any) => s.category),
    github: site.github,
    linkedin: site.linkedin,
  };

  // Ordered by what a recruiter looks for first: credentials, then work, then proof
  return (
    <AnimatedSections>
      <WhoAmI data={whoAmI} stats={stats} terminal={terminal} />
      <Certifications certifications={certs} />
      <Experience jobs={cronjobs} />
      <DeploymentGrid deployments={deployments} />
      <OpenSource prs={prs} />
      <Publications publications={config?.publications || []} />
      <SystemConfig skills={skills} />
      <ContactSection email={whoAmI.email} />
    </AnimatedSections>
  );
}
