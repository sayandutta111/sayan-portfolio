"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Building, 
  Award,
  Layers,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string>("pixel-solutionz");

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-600/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4 shadow-sm shadow-cyan-500/10">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Professional Engineering Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            4+ years of hands-on production experience architecting enterprise CRMs, real-time AI interfaces, state management pipelines, and full-stack web applications.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.experience.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className="relative rounded-3xl bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent p-[1px] shadow-2xl transition-all duration-300 hover:shadow-cyan-500/10"
              >
                <div className="rounded-[23px] bg-[#090d16]/90 backdrop-blur-xl p-6 sm:p-8 border border-white/[0.08]">
                  
                  {/* Top Bar: Role & Company & Duration */}
                  <div
                    onClick={() => setExpandedId(isExpanded ? "" : exp.id)}
                    className="cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08] select-none"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400 shadow-lg shadow-cyan-500/10">
                        <Building className="w-7 h-7" />
                      </div>
                      
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            {exp.role}
                          </h3>
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs sm:text-sm text-slate-300 font-mono mt-2">
                          <span className="font-semibold text-cyan-400">{exp.company}</span>
                          <span className="text-slate-500">•</span>
                          <span className="flex items-center gap-1.5 text-slate-400">
                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                            {exp.period}
                          </span>
                          <span className="text-slate-500">•</span>
                          <span className="flex items-center gap-1.5 text-slate-400">
                            <MapPin className="w-3.5 h-3.5 text-slate-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <div className="flex items-center gap-3 self-end md:self-center">
                      <span className="text-xs font-mono text-cyan-400 font-medium hidden sm:inline-block">
                        {isExpanded ? "Collapse View" : "Expand Details"}
                      </span>
                      <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white transition-colors">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>
                  </div>

                  {/* Summary Paragraph */}
                  <div className="pt-6">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
                      {exp.description}
                    </p>
                  </div>

                  {/* Expanded Content: 2-Column Grid */}
                  {isExpanded && (
                    <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300">
                      
                      {/* Left Column: Systems & Projects Engineered */}
                      <div className="lg:col-span-5 space-y-6">
                        {exp.projectsWorkedOn && (
                          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono mb-3.5 flex items-center gap-2">
                              <Layers className="w-4 h-4 text-cyan-400" />
                              Production Systems Engineered
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.projectsWorkedOn.map((p, pIdx) => (
                                <span
                                  key={pIdx}
                                  className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 text-cyan-300 text-xs font-medium transition-colors"
                                >
                                  {p}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tech Stack Box */}
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono mb-3.5 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-indigo-400" />
                            Applied Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.techStack.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-slate-300 font-mono text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Key Engineering Accomplishments */}
                      <div className="lg:col-span-7">
                        <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          Key Architectural Responsibilities & Deliverables
                        </h4>
                        
                        <div className="space-y-3.5">
                          {exp.highlights.map((highlight, hIdx) => (
                            <div
                              key={hIdx}
                              className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors flex items-start gap-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                            >
                              <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                                <span className="font-mono text-xs font-bold">{hIdx + 1}</span>
                              </div>
                              <p className="flex-1">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
