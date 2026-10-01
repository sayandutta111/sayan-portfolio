"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  ArrowRight,
  Download,
  Terminal,
  Sparkles,
  Layers,
  Zap,
  ShieldCheck,
  Copy,
  Check,
  Play
} from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copiedCode, setCopiedCode] = useState(false);

  const snippet = `// Sayan Dutta — Fullstack Engineer
export const engineer = {
  name: "Sayan Dutta",
  yearsExperience: 4,
  core: ["Next.js", "React.js", "Node.js", "MongoDB", "TypeScript"],
  state: ["Zustand", "Redux-Saga", "SWR"],
  security: ["NextAuth", "JWT", "RBAC"],
  currentStatus: "Ready for high-impact engineering",
  build: () => "Scalable, resilient & blazing-fast applications"
};`;

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="about" className="relative min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-purple-600/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10 animate-glow-pulse" />
      <div className="absolute top-10 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-5 sm:right-10 w-52 sm:w-80 h-52 sm:h-80 bg-indigo-500/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs font-mono font-medium mb-5 sm:mb-6 shadow-sm shadow-emerald-500/10 max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="leading-tight">Open for MERN & Next.js Roles (Remote / Hybrid / On-site)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14] mb-5 sm:mb-6">
              Engineering Resilient{" "}
              <span className="text-gradient-cyan">
                MERN & Next.js
              </span>{" "}
              Enterprise Web Apps.
            </h1>

            {/* Bio summary */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-6 sm:mb-8">
              Hi, I&apos;m <strong className="text-white font-semibold">{PORTFOLIO_DATA.personal.name}</strong> — a full-stack engineer with{" "}
              <span className="text-cyan-400 font-medium">4+ years of production experience</span> building scalable CRMs, real-time AI chat applications, high-performance dashboards, and secure role-based portals across React, Next.js, Node.js, and MongoDB.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8 sm:mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-indigo-600/30 hover:shadow-cyan-500/40 transition-all cursor-pointer group"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#playground"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer group"
              >
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/20 group-hover:scale-110 transition-transform" />
                <span>Interactive Demos</span>
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-white/[0.04] border border-dashed border-white/20 hover:border-white/40 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>CV / Resume</span>
              </button>
            </div>

            {/* Key Metric Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-6 border-t border-white/[0.08]">
              {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 font-mono">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Avatar + Tech Badge Ecosystem + Terminal Preview */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full">

            {/* Avatar & Floating Tech Badges Card */}
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">

              {/* Glowing Aura Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 -z-10 animate-glow-pulse" />

              {/* Main Avatar Glass Container */}
              <div className="relative rounded-3xl overflow-hidden glass-panel p-2.5 sm:p-3 border border-white/10 shadow-2xl">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/sayan-photo.jpg"
                    alt="Sayan Dutta - MERN & Next.js Developer"
                    fill
                    className="object-cover object-[center_18%] hover:scale-105 transition-transform duration-700"
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-50" />

                  {/* Floating Tag inside image */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 rounded-xl bg-[#090d16]/85 backdrop-blur-md border border-white/10 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-semibold text-white">Sayan Dutta</div>
                      <div className="text-[10px] sm:text-[11px] text-cyan-400 font-mono">Pixel Solutionz • 4+ Yrs</div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/[0.08] text-[10px] sm:text-[11px] font-mono text-slate-300 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Kolkata, IN
                    </div>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 mt-2.5 sm:mt-3 pt-1">
                  {/* Next.js */}
                  <div className="flex items-center gap-1.5 p-1.5 sm:p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[10px] sm:text-[11px] font-medium text-slate-300 justify-center group-hover:border-white/20 transition-colors">
                    <svg className="w-3.5 h-3.5 text-white shrink-0 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.66 18.25L9.8 7.35h2.1l6.1 8.85c-.75.76-1.55 1.45-2.34 2.05zm-.26-6.15h-1.6V7.35h1.6V12.1zM8.4 7.35v9.3h1.6V9.45l7.9 11.25C16.15 21.8 14.15 22.4 12 22.4 6.25 22.4 1.6 17.75 1.6 12S6.25 1.6 12 1.6c3.1 0 5.9 1.3 7.85 3.35L8.4 7.35z"/>
                    </svg>
                    <span>Next.js</span>
                  </div>

                  {/* TypeScript */}
                  <div className="flex items-center gap-1.5 p-1.5 sm:p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[10px] sm:text-[11px] font-medium text-slate-300 justify-center group-hover:border-blue-500/20 transition-colors">
                    <svg className="w-3.5 h-3.5 text-[#3178c6] shrink-0 fill-current" viewBox="0 0 24 24">
                      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm10.635 12.015h-2.5v7.228H6.848v-7.228H4.348V9.782h7.412v2.233zm4.35 4.882c.81.495 1.748.75 2.685.75 1.41 0 2.22-.607 2.22-1.507 0-.893-.728-1.41-2.13-1.928-2.07-.757-3.412-1.687-3.412-3.457 0-1.988 1.62-3.412 3.938-3.412 1.252 0 2.25.293 3.03.78l-.75 2.115c-.675-.413-1.425-.63-2.205-.63-1.11 0-1.785.57-1.785 1.38 0 .795.698 1.222 2.04 1.71 2.228.818 3.518 1.77 3.518 3.705 0 2.13-1.748 3.525-4.298 3.525-1.44 0-2.61-.397-3.525-.998l.825-2.033z"/>
                    </svg>
                    <span>TypeScript</span>
                  </div>

                  {/* Node */}
                  <div className="flex items-center gap-1.5 p-1.5 sm:p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[10px] sm:text-[11px] font-medium text-slate-300 justify-center group-hover:border-emerald-500/20 transition-colors">
                    <svg className="w-3.5 h-3.5 text-[#5fa04e] shrink-0 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-.923 19.385l-7.385-4.26V8.877l7.385 4.262v6.246zm1.846 0v-6.246l7.385-4.262v6.248l-7.385 4.26zm6.462-12.01l-7.385 4.262-7.385-4.262 7.385-4.26 7.385 4.26z"/>
                    </svg>
                    <span>Node</span>
                  </div>

                  {/* Angular */}
                  <div className="flex items-center gap-1.5 p-1.5 sm:p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[10px] sm:text-[11px] font-medium text-slate-300 justify-center group-hover:border-red-500/20 transition-colors">
                    <svg className="w-3.5 h-3.5 text-[#dd0031] shrink-0 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.5L2.8 5.75l1.41 12.21L12 22.5l7.79-4.54 1.41-12.21L12 2.5zm0 2.2l6.23 2.2-1.07 9.29L12 19.33l-5.16-3.14-1.07-9.29L12 4.7zm0 2.6L7.85 16.5h1.76l.87-2.18h3.04l.87 2.18h1.76L12 7.3zm-.87 5.67L12 10.3l.87 2.67h-1.74z"/>
                    </svg>
                    <span>Angular</span>
                  </div>
                </div>
              </div>

              {/* Floating micro-badge: Top Right */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel border border-cyan-500/30 shadow-lg shadow-cyan-500/10 animate-float-slow">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-medium text-slate-200">Full-Stack Architecture</span>
              </div>
            </div>

            {/* Quick Interactive Snippet Box underneath */}
            <div className="w-full max-w-sm sm:max-w-md mt-5 sm:mt-6 rounded-2xl glass-panel-subtle p-3 sm:p-3.5 border border-white/[0.08] relative">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs font-mono text-slate-400">developer-profile.ts</span>
                </div>
                <button
                  onClick={copyCodeToClipboard}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-white/[0.05] transition-colors cursor-pointer"
                  title="Copy snippet"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="text-[10px] sm:text-[11px] font-mono text-slate-300 leading-relaxed overflow-x-auto p-1">
                <code>{snippet}</code>
              </pre>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
