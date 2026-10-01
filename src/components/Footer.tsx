"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ArrowUp, Heart, Code2, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070c] py-10 sm:py-12 relative overflow-x-clip overflow-y-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0 max-w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="font-mono font-black text-sm text-white tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                SD
              </span>
            </div>
            <div>
              <span className="font-semibold text-white text-sm block">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                MERN Stack & Next.js Engineer • Kolkata, India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-xs text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors py-1">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors py-1">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors py-1">Projects</a>
            <a href="#playground" className="hover:text-cyan-400 transition-colors py-1">Interactive Demos</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors py-1">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors py-1">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="min-h-[40px] px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-2 text-xs"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Engineered with Next.js 16, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
