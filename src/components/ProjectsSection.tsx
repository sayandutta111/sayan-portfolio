"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import {
  ExternalLink,
  Layers,
  Sparkles,
  X,
  CheckCircle,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Building2,
  Calendar
} from "lucide-react";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "Enterprise & CRM", "AI & Real-Time", "Health & Travel"];

  const filteredProjects = selectedCategory === "All"
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-20 relative overflow-x-clip overflow-y-hidden w-full max-w-full">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] max-w-full h-[300px] bg-indigo-600/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0 max-w-full">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Production Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Client & Enterprise Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Production-grade web systems built across my 4+ years of professional engineering at Pixel Solutionz and Symlink Technologies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 p-1 sm:p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md self-start md:self-auto w-full md:w-auto">
            {categories.map((cat) => {
              const count = cat === "All" ? PORTFOLIO_DATA.projects.length : PORTFOLIO_DATA.projects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                    }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${selectedCategory === cat ? "bg-white/20 text-white" : "bg-white/[0.06] text-slate-400"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl glass-panel-interactive overflow-hidden flex flex-col justify-between border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300"
            >
              <div>
                {/* Project Image Preview */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-white/[0.06]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#07090e]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-400 font-medium">
                    {project.category}
                  </div>

                  {/* Company & Date */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 font-mono">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-indigo-400" />
                      {project.company}
                    </span>
                    <span className="text-slate-400">{project.period}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1 line-clamp-1">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mt-3.5 pt-3 border-t border-white/[0.06]">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                          {metric.label}
                        </span>
                        <span className="text-[11px] sm:text-xs font-bold text-slate-200 font-mono mt-0.5">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {project.tech.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10px] sm:text-[11px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] sm:text-[11px] font-mono text-slate-500">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer / Deep Dive Button */}
              <div className="p-4 sm:p-5 pt-0">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full min-h-[40px] py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 text-xs font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer group/btn"
                >
                  <span>View System Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Deep Dive Architecture & Engineering Details */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl max-h-[88vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl glass-panel border border-white/20 p-4 sm:p-6 sm:p-8 shadow-2xl bg-[#090d16]/98">

              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="pr-8 sm:pr-10 mb-4 sm:mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
                    {activeModalProject.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {activeModalProject.company} • {activeModalProject.period}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  {activeModalProject.subtitle}
                </p>
              </div>

              {/* Image Preview Banner in Modal */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Architecture & Engineering Breakdown */}
              <div className="space-y-6">

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    Key Capabilities & Features
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Highlights */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2 mb-3">
                    <Cpu className="w-4 h-4 text-indigo-400" />
                    Architectural Decisions & Performance Optimizations
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.architecture.map((arch, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Full Stack */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mb-2">
                    Complete Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
