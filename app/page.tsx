import { getPostBySlug, getAllPosts, getConfig } from "@/lib/content";
import { WhoAmI } from "@/app/components/sections/WhoAmI";
import { LogViewer } from "@/app/components/sections/LogViewer";
import { DeploymentGrid } from "@/app/components/sections/DeploymentGrid";
import { CronJobManager } from "@/app/components/sections/CronJobManager";
import { NetworkInterface } from "@/app/components/sections/NetworkInterface";
import { SystemConfig } from "@/app/components/sections/SystemConfig";

export default async function Home() {
  const whoAmI = await getPostBySlug("whoami", "root");
  const logs = getAllPosts("logs");
  const deployments = getAllPosts("deployments");
  const cronjobs = getAllPosts("cronjobs");
  const config = getConfig();

  return (
    <div className="space-y-20 pb-20">
      <WhoAmI data={whoAmI} />
      <SystemConfig config={config} />
      <LogViewer logs={logs} />
      <DeploymentGrid deployments={deployments} />
      <CronJobManager jobs={cronjobs} />
      <NetworkInterface />
    </div>
  );
}
