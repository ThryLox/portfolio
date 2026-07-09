import React from "react";
import { getPostBySlug, getAllPosts, getConfig } from "../../lib/content";
import { Mail, MapPin, Globe, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PrintButton } from "../components/ui/PrintButton";

export default async function ResumePage() {
  const whoAmI = await getPostBySlug("whoami", "root");
  const cronjobs = getAllPosts("cronjobs");
  const deployments = getAllPosts("deployments");
  const config = getConfig();

  const name = whoAmI?.title || "Ekonkar Singh";
  const role = whoAmI?.role || "Cloud & AI Security Engineer";
  const location = whoAmI?.location || "Ottawa, Canada";
  const email = whoAmI?.email || "ekonkar.singh.s@gmail.com";

  // Group skills by category
  const skills = (config as any)?.skills || [];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-10 px-4 sm:px-6 lg:px-8 print:bg-white print:text-black print:py-0 print:px-0">
      
      {/* Action Header (Hidden in Print) */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        <PrintButton />
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 sm:p-12 border border-gray-200 rounded print:shadow-none print:border-none print:p-0">
        
        {/* Header Block */}
        <div className="border-b-2 border-gray-900 pb-6 mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{name}</h1>
            <p className="text-xl font-medium text-indigo-600 mt-1 print:text-gray-700">{role}</p>
          </div>
          <div className="space-y-1.5 text-sm text-gray-600 print:text-gray-800 md:text-right">
            <div className="flex items-center md:justify-end gap-2">
              <Mail className="w-4 h-4 text-gray-400 print:hidden" />
              <a href={`mailto:${email}`} className="hover:underline">{email}</a>
            </div>
            <div className="flex items-center md:justify-end gap-2">
              <MapPin className="w-4 h-4 text-gray-400 print:hidden" />
              <span>{location}</span>
            </div>
            <div className="flex items-center md:justify-end gap-2">
              <Globe className="w-4 h-4 text-gray-400 print:hidden" />
              <a href="https://github.com/EkonkarSingh" target="_blank" rel="noreferrer" className="hover:underline">github.com/EkonkarSingh</a>
            </div>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1.5 mb-3">
            Profile Summary
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Cloud Security and Generative AI safety specialist. Experienced in compliance automation, identity governance (Azure/M365), and Zero Trust architecture aligned with federal security standards (ITSG-33, NIST). Builder of automated compliance linters for enterprise LLM integrations.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1.5 mb-4">
            Technical Skills & Specializations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((cat: any) => (
              <div key={cat.category} className="space-y-1">
                <h3 className="text-xs font-extrabold uppercase text-indigo-600 print:text-gray-800">{cat.category}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {cat.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1.5 mb-4">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {cronjobs.map((job) => (
              <div key={job.slug} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{job.title}</h3>
                    <p className="text-xs font-semibold text-gray-600">{job.company} · {job.location}</p>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 shrink-0">
                    {job.startDate} — {job.endDate || "Present"}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-gray-700">
                  {job.description}
                </p>
                {job.tags && (
                  <div className="flex flex-wrap gap-1">
                    {job.tags.map((t: string) => (
                      <span key={t} className="bg-gray-100 text-gray-800 text-[10px] px-2 py-0.5 rounded font-mono font-medium print:bg-none print:border print:border-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Projects / Deployments Section */}
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1.5 mb-4">
            Key Projects & Research
          </h2>
          <div className="space-y-6">
            {deployments.slice(0, 4).map((post) => (
              <div key={post.slug} className="space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-gray-900 text-sm">{post.title}</h3>
                  {post.link && (
                    <a href={post.link} target="_blank" rel="noreferrer" className="text-xs text-indigo-600 hover:underline print:text-gray-800">
                      GitHub Link
                    </a>
                  )}
                </div>
                <p className="text-xs leading-relaxed text-gray-700">
                  {post.description}
                </p>
                {post.tags && (
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((t: string) => (
                      <span key={t} className="bg-gray-100 text-gray-800 text-[10px] px-2 py-0.5 rounded font-mono font-medium print:bg-none print:border print:border-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
