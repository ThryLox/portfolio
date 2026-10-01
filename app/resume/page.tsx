import type { Metadata } from "next";
import React from "react";
import { getPostBySlug, getAllPosts, getConfig } from "../../lib/content";
import { site } from "../../lib/site";
import { Mail, MapPin, Globe, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PrintButton } from "../components/ui/PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  alternates: { canonical: "/resume" },
};

const sectionHeading = "text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1.5 mb-4";
const tagClass = "bg-gray-100 text-gray-800 text-[10px] px-2 py-0.5 rounded font-mono font-medium print:bg-transparent print:border print:border-gray-200";

export default async function ResumePage() {
  const whoAmI = await getPostBySlug("whoami", "root");
  const cronjobs = await Promise.all(
    getAllPosts("cronjobs").map((job) => getPostBySlug(job.slug, "cronjobs"))
  );
  const deployments = getAllPosts("deployments").filter((post) => post.featured);
  const config = getConfig() as any;

  const skills = config?.skills || [];
  const certifications = config?.certifications || [];
  const publications = config?.publications || [];
  const github = site.github.replace(/^https:\/\//, "");

  return (
    <div className="relative z-10 min-h-screen bg-gray-50 text-gray-900 py-10 px-4 sm:px-6 lg:px-8 print:bg-white print:text-black print:py-0 print:px-0">

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
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{whoAmI.name}</h1>
            <p className="text-xl font-medium text-teal-700 mt-1 print:text-gray-700">{whoAmI.role}</p>
          </div>
          <div className="space-y-1.5 text-sm text-gray-600 print:text-gray-800 md:text-right">
            <div className="flex items-center md:justify-end gap-2">
              <Mail className="w-4 h-4 text-gray-400 print:hidden" />
              <a href={`mailto:${whoAmI.email}`} className="hover:underline">{whoAmI.email}</a>
            </div>
            <div className="flex items-center md:justify-end gap-2">
              <MapPin className="w-4 h-4 text-gray-400 print:hidden" />
              <span>{whoAmI.location}</span>
            </div>
            <div className="flex items-center md:justify-end gap-2">
              <Globe className="w-4 h-4 text-gray-400 print:hidden" />
              <a href={site.github} target="_blank" rel="noreferrer" className="hover:underline">{github}</a>
            </div>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="mb-8">
          <h2 className={sectionHeading}>Profile Summary</h2>
          <div
            className="text-sm leading-relaxed text-gray-700 space-y-2"
            dangerouslySetInnerHTML={{ __html: whoAmI.contentHtml || "" }}
          />
        </div>

        {/* Certifications */}
        <div className="mb-8">
          <h2 className={sectionHeading}>Certifications</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-700">
            {certifications.map((cert: any) => (
              <li key={cert.code}>
                {cert.name}
                {!cert.name.includes(cert.code) && <span className="text-gray-500"> ({cert.code})</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Skills */}
        <div className="mb-8">
          <h2 className={sectionHeading}>Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((cat: any) => (
              <div key={cat.category} className="space-y-1">
                <h3 className="text-xs font-extrabold uppercase text-teal-700 print:text-gray-800">{cat.category}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {cat.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <h2 className={sectionHeading}>Professional Experience</h2>
          <div className="space-y-6">
            {cronjobs.map((job) => (
              <div key={job.slug} className="space-y-2 break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{job.title}</h3>
                    <p className="text-xs font-semibold text-gray-600">{job.company} · {job.location}</p>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 shrink-0">
                    {job.startDate} – {job.endDate}
                  </span>
                </div>
                <div
                  className="resume-bullets text-xs leading-relaxed text-gray-700"
                  dangerouslySetInnerHTML={{ __html: job.contentHtml || "" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-8">
          <h2 className={sectionHeading}>Key Projects</h2>
          <div className="space-y-4">
            {deployments.map((post) => (
              <div key={post.slug} className="space-y-1.5 break-inside-avoid">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-gray-900 text-sm">{post.title}</h3>
                  {post.link && (
                    <a href={post.link} target="_blank" rel="noreferrer" className="text-xs text-teal-700 hover:underline print:text-gray-800 shrink-0">
                      {post.link.replace(/^https:\/\//, "")}
                    </a>
                  )}
                </div>
                <p className="text-xs leading-relaxed text-gray-700">
                  {post.description}
                </p>
                {post.tags && (
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((t: string) => (
                      <span key={t} className={tagClass}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        {publications.length > 0 && (
          <div>
            <h2 className={sectionHeading}>Publications</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {publications.map((pub: any) => (
                <li key={pub.title} className="break-inside-avoid">
                  <span className="italic">{pub.title}</span>
                  {pub.venue && <span className="text-gray-500">. {pub.venue}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}
