"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle,
  BookOpen,
  FileCheck
} from "lucide-react";

export default function EducationCertifications() {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 relative overflow-x-clip overflow-y-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0 max-w-full">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Education & Specialized Training
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Grounded in Computer Science engineering principles, enhanced with intensive full-stack MERN mastery and Python certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 max-w-5xl mx-auto">

          {/* Degree Card */}
          <div className="lg:col-span-6 rounded-3xl glass-panel-interactive border border-white/[0.08] p-5 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 sm:mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <span className="px-2.5 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                Formal Degree
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-white mt-3">
                {PORTFOLIO_DATA.education[0].degree}
              </h3>

              <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-xs text-slate-400 font-mono mt-2 mb-4">
                <span className="text-slate-200 font-semibold">{PORTFOLIO_DATA.education[0].institution}</span>
                <span>•</span>
                <span className="text-slate-400">{PORTFOLIO_DATA.education[0].year}</span>
                <span>•</span>
                <span className="text-slate-400">{PORTFOLIO_DATA.education[0].location}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {PORTFOLIO_DATA.education[0].details}
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>Accredited Bachelor of Technology</span>
            </div>
          </div>

          {/* Certifications Card List */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-2 mb-3 sm:mb-4">
              <Award className="w-4 h-4 text-cyan-400" />
              Certifications & Specialized Bootcamps
            </h3>

            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="rounded-2xl glass-panel-interactive border border-white/[0.08] p-4 sm:p-5 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {cert.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono mt-1">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span className="text-slate-400">{cert.year}</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.04] text-cyan-400">
                    <FileCheck className="w-4 h-4" />
                  </div>
                </div>

                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/[0.05]">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
