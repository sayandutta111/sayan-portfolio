"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Clock,
  Sparkles,
  MessageSquare,
  ExternalLink,
  ShieldCheck
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Time Engineering Role",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending email / triggering mailto
    setIsSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry - ${formData.subject}] from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Sayan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      )}`;
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-x-clip overflow-y-hidden w-full max-w-full">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] max-w-full h-[350px] bg-gradient-to-t from-cyan-600/15 via-indigo-600/15 to-transparent rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0 max-w-full">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Let&apos;s Build Something Extraordinary
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Interested in discussing an engineering opportunity, high-scale web platform, or full-stack role? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 max-w-5xl mx-auto">

          {/* Left Column: Direct Contact Info & Timezone Card */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">

            {/* Direct Email Card */}
            <div className="rounded-2xl glass-panel-interactive border border-white/[0.08] p-4 sm:p-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Email Address</span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, "email")}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Direct Phone Card */}
            <div className="rounded-2xl glass-panel-interactive border border-white/[0.08] p-4 sm:p-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Phone & WhatsApp</span>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, "phone")}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Live Clock Card */}
            <div className="rounded-2xl glass-panel border border-white/[0.08] p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Kolkata, West Bengal, India</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400 self-start sm:self-auto shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <span>IST (UTC+5:30)</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs text-slate-400">Local Time:</span>
                <span className="text-xs font-mono font-bold text-white tracking-widest">{currentTime || "Loading..."}</span>
              </div>
            </div>

            {/* Quick Status Note */}
            <div className="rounded-2xl glass-panel-subtle border border-emerald-500/20 p-3.5 sm:p-4 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-xs text-slate-300 leading-relaxed">
                Notice period completed. Open to immediate deployment on on-site, remote, or hybrid enterprise teams.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 rounded-3xl glass-panel border border-white/10 p-5 sm:p-8 shadow-2xl">
            <h3 className="text-base sm:text-lg font-bold text-white mb-1 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-5 sm:mb-6">
              Fill out this form to connect directly with Sayan.
            </p>

            {isSubmitted ? (
              <div className="p-6 sm:p-8 text-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-3 animate-in fade-in">
                <Check className="w-10 h-10 mx-auto text-emerald-400 bg-emerald-500/20 p-2 rounded-full" />
                <h4 className="text-base font-bold text-white">Opening Email Client...</h4>
                <p className="text-xs text-slate-300">
                  Thank you! Your message payload has been prepared and your native mail client is launching to send to <strong>{PORTFOLIO_DATA.personal.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-base sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-base sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-[#090d16] border border-white/10 text-base sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Full-Time Engineering Role">Full-Time Engineering Role (Remote / Hybrid / On-site)</option>
                    <option value="Contract / Architecture Consultation">Contract / Architecture Consultation</option>
                    <option value="MERN / Next.js Development Project">MERN / Next.js Development Project</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the role, technical stack, or project goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-base sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="min-h-[46px] w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/30 hover:shadow-cyan-500/40 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
