import { getPostBySlug, getAllPosts, getConfig } from "@/lib/content";
import { WhoAmI } from "@/app/components/sections/WhoAmI";
import { Certifications, Publications } from "@/app/components/sections/Credentials";
import { SystemConfig } from "@/app/components/sections/SystemConfig";
import { DeploymentGrid } from "@/app/components/sections/DeploymentGrid";
import { Experience } from "@/app/components/sections/Experience";
import { ContactSection } from "@/app/components/sections/ContactSection";
import { AnimatedSections } from "@/app/components/sections/AnimatedSections";

export default async function Home() {
  const whoAmI = await getPostBySlug("whoami", "root");
  const deployments = getAllPosts("deployments");
  const cronjobs = getAllPosts("cronjobs");
  const config = getConfig() as any;

  // Ordered by what a recruiter looks for first: credentials, then work, then proof
  return (
    <AnimatedSections>
      <WhoAmI data={whoAmI} />
      <Certifications certifications={config?.certifications || []} />
      <Experience jobs={cronjobs} />
      <DeploymentGrid deployments={deployments} />
      <Publications publications={config?.publications || []} />
      <SystemConfig skills={config?.skills || []} />
      <ContactSection email={whoAmI.email} />
    </AnimatedSections>
  );
}
