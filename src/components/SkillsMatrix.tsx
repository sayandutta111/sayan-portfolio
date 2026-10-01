"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  Cpu,
  Globe,
  Code2,
  FileCode2,
  Palette,
  Layout,
  Layers,
  Server,
  Workflow,
  ShieldCheck,
  Network,
  Database,
  Boxes,
  Zap,
  RefreshCw,
  DownloadCloud,
  CheckSquare,
  Activity,
  CreditCard,
  Video,
  GitBranch,
  Package,
  BarChart3,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function SkillsMatrix() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  // Map icon strings to Lucide components
  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-5 h-5 text-cyan-400" />,
    Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
    FileCode2: <FileCode2 className="w-5 h-5 text-indigo-400" />,
    Palette: <Palette className="w-5 h-5 text-emerald-400" />,
    Layout: <Layout className="w-5 h-5 text-purple-400" />,
    Layers: <Layers className="w-5 h-5 text-rose-400" />,
    Server: <Server className="w-5 h-5 text-emerald-400" />,
    Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
    Workflow: <Workflow className="w-5 h-5 text-cyan-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    Network: <Network className="w-5 h-5 text-blue-400" />,
    Database: <Database className="w-5 h-5 text-emerald-400" />,
    Boxes: <Boxes className="w-5 h-5 text-cyan-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    RefreshCw: <RefreshCw className="w-5 h-5 text-purple-400" />,
    DownloadCloud: <DownloadCloud className="w-5 h-5 text-blue-400" />,
    CheckSquare: <CheckSquare className="w-5 h-5 text-pink-400" />,
    Activity: <Activity className="w-5 h-5 text-rose-400" />,
    CreditCard: <CreditCard className="w-5 h-5 text-emerald-400" />,
    Video: <Video className="w-5 h-5 text-cyan-400" />,
    GitBranch: <GitBranch className="w-5 h-5 text-amber-400" />,
    Package: <Package className="w-5 h-5 text-indigo-400" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-orange-400" />,
  };

  const currentCategory = PORTFOLIO_DATA.skills[activeCategoryIndex];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Full-Stack Engineering Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Curated and battle-tested across enterprise software, high-throughput microservices, and modern responsive user interfaces.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 p-1 sm:p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md max-w-3xl mx-auto">
            {PORTFOLIO_DATA.skills.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${activeCategoryIndex === idx
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/25"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Display */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-5 sm:mb-6 p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {currentCategory.category}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {currentCategory.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 self-start sm:self-auto">
              <Sparkles className="w-4 h-4" />
              <span>{currentCategory.skills.length} Core Technologies</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {currentCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="rounded-2xl glass-panel-interactive border border-white/[0.08] p-5 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                      {iconMap[skill.icon] || <Cpu className="w-5 h-5 text-cyan-400" />}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {skill.level}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-400 bg-white/[0.04]">
                        {skill.experience}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {skill.highlight}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Production Verified</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
