import { getPostBySlug, getAllPosts, getConfig } from "@/lib/content";
import { WhoAmI } from "@/app/components/sections/WhoAmI";
import { LogViewer } from "@/app/components/sections/LogViewer";
import { DeploymentGrid } from "@/app/components/sections/DeploymentGrid";
import { CronJobManager } from "@/app/components/sections/CronJobManager";
import { NetworkInterface } from "@/app/components/sections/NetworkInterface";
import { SystemConfig } from "@/app/components/sections/SystemConfig";
import { StatsBar } from "@/app/components/sections/StatsBar";
import { ContactSection } from "@/app/components/sections/ContactSection";
import { AnimatedSections } from "@/app/components/sections/AnimatedSections";

export default async function Home() {
  const whoAmI = await getPostBySlug("whoami", "root");
  const logs = getAllPosts("logs");
  const deployments = getAllPosts("deployments");
  const cronjobs = getAllPosts("cronjobs");
  const config = getConfig();

  return (
    <AnimatedSections>
      <WhoAmI data={whoAmI} />
      <StatsBar
        projectCount={deployments.length}
        roleCount={cronjobs.length}
        skillCategories={(config as any)?.skills?.length || 6}
      />
      <SystemConfig config={config as any} />
      <LogViewer logs={logs} />
      <DeploymentGrid deployments={deployments} />
      <CronJobManager jobs={cronjobs} />
      <NetworkInterface />
      <ContactSection />
    </AnimatedSections>
  );
}


