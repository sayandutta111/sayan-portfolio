"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Check, 
  Copy,
  Briefcase,
  GraduationCap,
  Award,
  Cpu
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl glass-panel border border-white/20 p-6 sm:p-10 shadow-2xl bg-[#090d16]">
        
        {/* Floating Top Action Bar */}
        <div className="sticky top-0 -mt-2 -mx-2 mb-6 p-3 rounded-2xl bg-[#07090e]/90 backdrop-blur-md border border-white/10 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-medium text-slate-300">
              Verified Curriculum Vitae • {PORTFOLIO_DATA.personal.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="bg-[#0b0f19] p-6 sm:p-8 rounded-2xl border border-white/[0.08] text-slate-200 text-xs sm:text-sm font-sans space-y-8">
          
          {/* Header with Avatar */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {PORTFOLIO_DATA.personal.name.toUpperCase()}
              </h2>
              <div className="text-cyan-400 font-mono text-xs sm:text-sm font-semibold mt-1">
                MERN Stack Developer | React.js | Next.js | Node.js | Express.js | MongoDB | TypeScript
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono mt-3">
                <span className="flex items-center gap-1 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {PORTFOLIO_DATA.personal.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  {PORTFOLIO_DATA.personal.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {PORTFOLIO_DATA.personal.location}
                </span>
              </div>
            </div>

            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/20 shrink-0">
              <Image
                src="/sayan-photo.jpg"
                alt="Sayan Dutta"
                fill
                className="object-cover object-[center_20%]"
                unoptimized
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-400 mb-2 border-b border-white/[0.06] pb-1">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              MERN Stack Developer with 4+ years of experience in web application development, with hands-on experience across React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript, TypeScript, REST APIs, JWT authentication, CRUD workflows, state management, dynamic forms, dashboards, and responsive interfaces. Experienced in working across frontend and backend layers, integrating APIs, implementing authentication and role-based access, and building enterprise applications.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-400 mb-3 border-b border-white/[0.06] pb-1">
              Technical Skills Matrix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <strong className="text-white block mb-1">Backend & APIs:</strong>
                <span className="text-slate-300">Node.js, Express.js, REST APIs, Next.js API Routes, JWT, NextAuth</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <strong className="text-white block mb-1">Database:</strong>
                <span className="text-slate-300">MongoDB, Mongoose</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <strong className="text-white block mb-1">Frontend:</strong>
                <span className="text-slate-300">React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Angular</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <strong className="text-white block mb-1">State & Forms:</strong>
                <span className="text-slate-300">Zustand, Redux, Redux-Saga, React Hook Form, SWR, Axios, RxJS</span>
              </div>
              <div className="sm:col-span-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <strong className="text-white block mb-1">Tools & Integrations:</strong>
                <span className="text-slate-300">Git, GitHub, GitLab, Webpack, Razorpay, Zoom Video SDK, Google Analytics, Google Tag Manager</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-400 mb-4 border-b border-white/[0.06] pb-1">
              Professional Experience
            </h3>

            <div className="space-y-6">
              {/* Pixel Solutionz */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono font-semibold">
                  <span className="text-white text-sm">Application Developer — Pixel Solutionz</span>
                  <span className="text-cyan-400">04/2026 – Present (4+ Yrs Track Record)</span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5 mb-2">
                  Tech: MongoDB, Express.js, React.js, Next.js, Node.js, JavaScript, TypeScript, REST APIs, JWT, NextAuth, Zustand, SWR
                </div>

                <div className="space-y-3 text-xs text-slate-300 mt-2">
                  <div>
                    <strong className="text-white block">• Enterprise CRM:</strong>
                    Developed and maintained an enterprise CRM covering employee, asset, software, attendance, leave, timesheet, holiday, reporting, and administrative operations. Worked across React.js and Node.js layers with JWT authentication, dynamic forms, tables, pagination, and role-based filtering.
                  </div>

                  <div>
                    <strong className="text-white block">• ECL Visitor Management System:</strong>
                    Developed responsive dashboards and forms for visitor requests, approvals, check-in/out, and host coordination. Implemented server-side API routes and NextAuth session management with SWR caching.
                  </div>

                  <div>
                    <strong className="text-white block">• Fitmitra Calorie Tracker:</strong>
                    Developed a calorie-tracking web application with reusable UI components, food logging, calorie calculations, nutrition tracking, and dashboard views with Zustand state.
                  </div>

                  <div>
                    <strong className="text-white block">• Issue Management System:</strong>
                    Built issue, task, and bug tracking workflows with authentication, status management, dynamic forms, real-time issue chat, and notifications.
                  </div>

                  <div>
                    <strong className="text-white block">• PixelGPT AI Interface:</strong>
                    Developed an AI-powered chat interface with dynamic typewriter markdown responses, chat history, and Zustand-based state management while preventing duplicate message rendering.
                  </div>

                  <div>
                    <strong className="text-white block">• Careocure Telehealth Platform:</strong>
                    Developed appointment scheduling, doctor/patient views, and integrated Razorpay payments and Zoom video calls with Google Analytics & GTM tracking.
                  </div>
                </div>
              </div>

              {/* Symlink Technologies */}
              <div className="pt-4 border-t border-white/[0.05]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono font-semibold">
                  <span className="text-white text-sm">Junior Web Developer — Symlink Technologies LLP</span>
                  <span className="text-cyan-400">06/2022 – 09/2022</span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5 mb-2">
                  Tech: React.js, Redux, Redux-Saga, REST APIs, JavaScript, HTML5, CSS3
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Worked on dynamic single-page applications using React.js and Redux with Redux-Saga for side-effect handling. Built reusable UI components and integrated REST APIs for application workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-400 mb-2 border-b border-white/[0.06] pb-1">
                Education
              </h3>
              <div className="text-xs">
                <div className="font-bold text-white">B.Tech / Computer Science Engineering</div>
                <div className="text-slate-400 font-mono">Techno India Batanagar | Graduated 2018</div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-400 mb-2 border-b border-white/[0.06] pb-1">
                Certifications / Training
              </h3>
              <ul className="text-xs space-y-1 text-slate-300">
                <li>• 6-month MERN Stack Training — Webskitters Academy</li>
                <li>• Python Online Certification — IIT Bombay</li>
                <li>• Industrial Training in Python</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
