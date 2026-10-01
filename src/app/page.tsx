"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import InteractivePlayground from "@/components/InteractivePlayground";
import SkillsMatrix from "@/components/SkillsMatrix";
import EducationCertifications from "@/components/EducationCertifications";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-indigo-500 selection:text-white w-full max-w-full overflow-x-clip">
      {/* Top Fixed Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Feature Simulator & Engineering Playground */}
      <InteractivePlayground />

      {/* Production Projects Showcase */}
      <ProjectsSection />

      {/* Work Experience Timeline */}
      <ExperienceTimeline />

      {/* Comprehensive Technical Skills Matrix */}
      <SkillsMatrix />

      {/* Academic Education & Certifications */}
      <EducationCertifications />

      {/* Contact & Availability */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Printable & Interactive Verified Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </main>
  );
}
