"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Terminal,
  Sparkles,
  Send,
  Search,
  Filter,
  Plus,
  Trash2,
  RotateCcw,
  Bot,
  User,
  CheckCircle2,
  Shield,
  Activity,
  Flame,
  Beef,
  Wheat,
  Droplet,
  Copy,
  Check,
} from "lucide-react";

export default function InteractivePlayground() {
  const [activeTab, setActiveTab] = useState<"ai-chat" | "crm" | "nutrition">(
    "ai-chat",
  );

  // ==========================================
  // 1. AI Streaming Chat Simulator State
  // ==========================================
  const [chatMessages, setChatMessages] = useState<
    Array<{ sender: "user" | "ai"; text: string }>
  >([
    {
      sender: "ai",
      text: "👋 Hello! I am an AI interface engineered by Sayan Dutta. I support streaming markdown responses, deduplication, and zero-flicker Zustand state management. Try asking me a question below!",
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedText, setStreamedText] = useState("");
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const samplePrompts = [
    "How did Sayan optimize state in the AI Chat Engine?",
    "Explain Next.js App Router vs Pages Router",
    "Show a sample TypeScript Zustand slice",
  ];

  const simulatedResponses: Record<string, string> = {
    "How did Sayan optimize state in the AI Chat Engine?":
      "In the **AI Chat Engine**, Sayan implemented a custom chunk parser coupled with **Zustand** slice-based state management.\n\n### Key Highlights:\n- **Typewriter Markdown Streaming:** Chunks are rendered at high frame rates without triggering whole-page re-renders.\n- **Message Deduplication:** Guaranteed unique hashing on incoming stream chunks prevents duplicate message bubbles during network fluctuations.\n- **Performance:** Reduced render cycle overhead by over **65%** compared to standard React setState loops.",

    "Explain Next.js App Router vs Pages Router":
      "Next.js **App Router** represents a foundational shift to React Server Components (RSC):\n\n```typescript\n// Example: Server Action in Next.js 16\n'use server';\nexport async function updateRecord(id: string, formData: FormData) {\n  const session = await auth();\n  if (!session?.user) throw new Error('Unauthorized');\n  return await db.records.update(id, formData);\n}\n```\n\n### Core Advantages:\n1. Zero-bundle size for server components\n2. Built-in streaming SSR with Suspense\n3. Simplified layouts & nested route caching",

    "Show a sample TypeScript Zustand slice":
      "Here is the pattern Sayan utilizes for clean, scalable state architecture:\n\n```typescript\nimport { create } from 'zustand';\n\ninterface ChatState {\n  messages: Array<{ id: string; content: string }>;\n  isStreaming: boolean;\n  addChunk: (chunk: string) => void;\n}\n\nexport const useChatStore = create<ChatState>((set) => ({\n  messages: [],\n  isStreaming: false,\n  addChunk: (chunk) =>\n    set((state) => ({ ...state /* optimized immutable update */ })),\n}));\n```",
  };

  const handleSendPrompt = (promptText?: string) => {
    const textToSend = promptText || inputPrompt;
    if (!textToSend.trim() || isStreaming) return;

    // Add user message
    setChatMessages((prev) => [...prev, { sender: "user", text: textToSend }]);
    setInputPrompt("");
    setIsStreaming(true);
    setStreamedText("");

    const fullResponse =
      simulatedResponses[textToSend] ||
      `Here is Sayan's approach for **${textToSend}**:\n\nSayan applies standard MERN & Next.js production patterns, utilizing **TypeScript** for strict interfaces, **NextAuth** for secure authentication, and resilient **Node.js/Express** microservice endpoints. Every architectural choice prioritizes sub-100ms response times, maintainability, and clean separation of concerns.`;

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex += 3;
      if (currentIndex >= fullResponse.length) {
        clearInterval(interval);
        setStreamedText(fullResponse);
        setIsStreaming(false);
        setChatMessages((prev) => [
          ...prev,
          { sender: "ai", text: fullResponse },
        ]);
        setStreamedText("");
      } else {
        setStreamedText(fullResponse.slice(0, currentIndex));
      }
    }, 20);
  };

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages, streamedText]);

  // ==========================================
  // 2. Enterprise CRM Filter & RBAC State
  // ==========================================
  interface EmployeeRecord {
    id: string;
    name: string;
    email: string;
    role: "Admin" | "Lead Developer" | "Product Manager" | "HR Ops";
    department: "Engineering" | "Management" | "Operations";
    status: "Active" | "On Leave" | "Remote";
    attendanceRate: string;
    assignedAssets: number;
  }

  const initialEmployees: EmployeeRecord[] = [
    {
      id: "EMP-101",
      name: "Sayan Dutta",
      email: "sayandutta83@gmail.com",
      role: "Lead Developer",
      department: "Engineering",
      status: "Active",
      attendanceRate: "99.4%",
      assignedAssets: 3,
    },
    {
      id: "EMP-102",
      name: "Ananya Roy",
      email: "ananya.r@pixelsolutionz.com",
      role: "Product Manager",
      department: "Management",
      status: "Active",
      attendanceRate: "97.8%",
      assignedAssets: 2,
    },
    {
      id: "EMP-103",
      name: "Sourav Mukherjee",
      email: "sourav.m@pixelsolutionz.com",
      role: "Admin",
      department: "Operations",
      status: "Active",
      attendanceRate: "98.2%",
      assignedAssets: 4,
    },
    {
      id: "EMP-104",
      name: "Pooja Sharma",
      email: "pooja.s@pixelsolutionz.com",
      role: "HR Ops",
      department: "Operations",
      status: "On Leave",
      attendanceRate: "94.5%",
      assignedAssets: 1,
    },
    {
      id: "EMP-105",
      name: "Vikram Sen",
      email: "vikram.s@pixelsolutionz.com",
      role: "Lead Developer",
      department: "Engineering",
      status: "Remote",
      attendanceRate: "98.9%",
      assignedAssets: 2,
    },
    {
      id: "EMP-106",
      name: "Rohan Das",
      email: "rohan.d@pixelsolutionz.com",
      role: "Admin",
      department: "Management",
      status: "Active",
      attendanceRate: "96.5%",
      assignedAssets: 3,
    },
  ];

  const [crmList, setCrmList] = useState<EmployeeRecord[]>(initialEmployees);
  const [crmSearch, setCrmSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedDept, setSelectedDept] = useState("All");

  const filteredCrm = crmList.filter((emp) => {
    const matchSearch =
      emp.name.toLowerCase().includes(crmSearch.toLowerCase()) ||
      emp.id.toLowerCase().includes(crmSearch.toLowerCase());
    const matchRole = selectedRole === "All" || emp.role === selectedRole;
    const matchDept = selectedDept === "All" || emp.department === selectedDept;
    return matchSearch && matchRole && matchDept;
  });

  const toggleStatus = (id: string) => {
    setCrmList((prev) =>
      prev.map((emp) => {
        if (emp.id === id) {
          const nextStatus =
            emp.status === "Active"
              ? "On Leave"
              : emp.status === "On Leave"
                ? "Remote"
                : "Active";
          return { ...emp, status: nextStatus };
        }
        return emp;
      }),
    );
  };

  // ==========================================
  // 3. Nutrition & Calorie Calculator State
  // ==========================================
  interface FoodItem {
    id: string;
    name: string;
    servings: number;
    caloriesPerServing: number;
    proteinGrams: number;
    carbsGrams: number;
    fatGrams: number;
  }

  const [foodItems, setFoodItems] = useState<FoodItem[]>([
    {
      id: "1",
      name: "Oatmeal with Almond Milk & Berries",
      servings: 1,
      caloriesPerServing: 320,
      proteinGrams: 12,
      carbsGrams: 54,
      fatGrams: 6,
    },
    {
      id: "2",
      name: "Grilled Chicken Breast (200g)",
      servings: 1,
      caloriesPerServing: 330,
      proteinGrams: 62,
      carbsGrams: 0,
      fatGrams: 7,
    },
    {
      id: "3",
      name: "Avocado & Quinoa Salad",
      servings: 1,
      caloriesPerServing: 280,
      proteinGrams: 8,
      carbsGrams: 32,
      fatGrams: 14,
    },
    {
      id: "4",
      name: "Whey Protein Isolate Shake",
      servings: 1,
      caloriesPerServing: 140,
      proteinGrams: 28,
      carbsGrams: 2,
      fatGrams: 1,
    },
  ]);

  const [newFoodName, setNewFoodName] = useState("");
  const [newFoodCals, setNewFoodCals] = useState("");
  const [newFoodProtein, setNewFoodProtein] = useState("");

  const totalCalories = foodItems.reduce(
    (acc, item) => acc + item.caloriesPerServing * item.servings,
    0,
  );
  const totalProtein = foodItems.reduce(
    (acc, item) => acc + item.proteinGrams * item.servings,
    0,
  );
  const totalCarbs = foodItems.reduce(
    (acc, item) => acc + item.carbsGrams * item.servings,
    0,
  );
  const totalFat = foodItems.reduce(
    (acc, item) => acc + item.fatGrams * item.servings,
    0,
  );

  const calorieGoal = 2200;
  const proteinGoal = 160;
  const caloriePercent = Math.min(
    Math.round((totalCalories / calorieGoal) * 100),
    100,
  );
  const proteinPercent = Math.min(
    Math.round((totalProtein / proteinGoal) * 100),
    100,
  );

  const addFoodItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFoodName.trim()) return;
    const cals = parseInt(newFoodCals) || 200;
    const protein = parseInt(newFoodProtein) || 15;
    const newItem: FoodItem = {
      id: Date.now().toString(),
      name: newFoodName,
      servings: 1,
      caloriesPerServing: cals,
      proteinGrams: protein,
      carbsGrams: Math.round(cals * 0.1),
      fatGrams: Math.round(cals * 0.04),
    };
    setFoodItems([...foodItems, newItem]);
    setNewFoodName("");
    setNewFoodCals("");
    setNewFoodProtein("");
  };

  const removeFoodItem = (id: string) => {
    setFoodItems(foodItems.filter((item) => item.id !== id));
  };

  return (
    <section id="playground" className="py-16 sm:py-20 lg:py-20 relative overflow-x-clip overflow-y-hidden w-full max-w-full">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 max-w-full bg-cyan-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 max-w-full bg-purple-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0 max-w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Engineering Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Test Live Feature Demos
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Experience real-world interactive capabilities built with
            Sayan&apos;s production techniques: typewriter streaming markdown,
            role-based CRM data tables, and high-performance reactive state
            management.
          </p>

          {/* Tab Selector Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md w-full sm:w-auto sm:max-w-xl mx-auto">
            <button
              onClick={() => setActiveTab("ai-chat")}
              className={`flex items-center justify-center gap-2 min-h-[40px] px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "ai-chat"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>AI Chat Simulator</span>
            </button>

            <button
              onClick={() => setActiveTab("crm")}
              className={`flex items-center justify-center gap-2 min-h-[40px] px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "crm"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Enterprise CRM Table</span>
            </button>

            <button
              onClick={() => setActiveTab("nutrition")}
              className={`flex items-center justify-center gap-2 min-h-[40px] px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "nutrition"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Macro & Calorie Engine</span>
            </button>
          </div>
        </div>

        {activeTab === "ai-chat" && (
          <div className="max-w-4xl mx-auto rounded-3xl glass-panel border border-white/10 p-3.5 sm:p-6 shadow-2xl w-full min-w-0 max-w-full overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.08] mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    AI Streaming Assistant Terminal
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                    Simulating typewriter markdown & duplicate prevention
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-[11px] font-mono text-emerald-400">
                  Stream Ready
                </span>
              </div>
            </div>

            {/* Quick Sample Prompts */}
            <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
              <span className="text-[11px] text-slate-400 font-mono">
                Suggested:
              </span>
              {samplePrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(prompt)}
                  disabled={isStreaming}
                  className="px-2.5 py-1 rounded-lg text-xs bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Chat Messages Box */}
            <div
              ref={chatScrollRef}
              className="h-72 sm:h-80 overflow-y-auto space-y-3 sm:space-y-4 p-3 sm:p-4 rounded-2xl bg-[#05070c]/80 border border-white/[0.06] mb-3 sm:mb-4"
            >
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 sm:gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "ai" && (
                    <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center shrink-0 text-cyan-400">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[90%] sm:max-w-[85%] rounded-2xl p-3 sm:p-3.5 text-xs sm:text-sm leading-relaxed break-words ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-tr-none shadow-md shadow-indigo-600/20"
                        : "bg-white/[0.05] border border-white/[0.08] text-slate-200 rounded-tl-none whitespace-pre-line"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-cyan-600/30 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {/* Real-time Streaming Message */}
              {isStreaming && (
                <div className="flex gap-2.5 sm:gap-3 justify-start">
                  <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center shrink-0 text-cyan-400">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="max-w-[90%] sm:max-w-[85%] rounded-2xl p-3 sm:p-3.5 text-xs sm:text-sm leading-relaxed bg-white/[0.05] border border-white/[0.08] text-slate-200 rounded-tl-none whitespace-pre-line break-words">
                    {streamedText}
                    <span className="typewriter-cursor" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendPrompt();
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
            >
              <input
                type="text"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder="Ask about Sayan's architecture or Next.js patterns..."
                disabled={isStreaming}
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-base sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button
                type="submit"
                disabled={isStreaming || !inputPrompt.trim()}
                className="min-h-[44px] sm:min-h-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20 disabled:opacity-50 cursor-pointer"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}

        {activeTab === "crm" && (
          <div className="max-w-5xl mx-auto rounded-3xl glass-panel border border-white/10 p-3.5 sm:p-6 shadow-2xl w-full min-w-0 max-w-full overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08] mb-5">
              <div>
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  Enterprise Directory & RBAC Pipeline
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Interactive replica of Sayan&apos;s Enterprise CRM module
                  (Pixel Solutionz)
                </p>
              </div>

              {/* Quick Summary Pill */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] sm:text-xs text-slate-300 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.08] self-start sm:self-auto">
                <span>
                  Showing:{" "}
                  <strong className="text-cyan-400">
                    {filteredCrm.length}
                  </strong>{" "}
                  of {crmList.length}
                </span>
                <span className="text-slate-600">•</span>
                <span>
                  Active:{" "}
                  <strong className="text-emerald-400">
                    {crmList.filter((e) => e.status === "Active").length}
                  </strong>
                </span>
              </div>
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name or EMP ID..."
                  value={crmSearch}
                  onChange={(e) => setCrmSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 sm:py-2 rounded-xl bg-white/[0.04] border border-white/10 text-base sm:text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full px-3 py-2.5 sm:py-2 rounded-xl bg-[#090d16] border border-white/10 text-base sm:text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                >
                  <option value="All">All Roles (RBAC Filter)</option>
                  <option value="Lead Developer">Lead Developer</option>
                  <option value="Admin">Admin</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="HR Ops">HR Ops</option>
                </select>
              </div>

              <div>
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="w-full px-3 py-2.5 sm:py-2 rounded-xl bg-[#090d16] border border-white/10 text-base sm:text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                >
                  <option value="All">All Departments</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Management">Management</option>
                  <option value="Operations">Operations</option>
                </select>
              </div>
            </div>

            {/* Responsive Table */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#05070c]/60 overflow-hidden">
              <div className="sm:hidden text-[10px] text-slate-400 font-mono text-center py-1.5 bg-white/[0.02] border-b border-white/[0.05]">
                ← Swipe table horizontally to see all columns →
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs min-w-[620px] sm:min-w-full">
                  <thead className="bg-white/[0.04] border-b border-white/[0.08] text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Employee</th>
                      <th className="py-3 px-4">Role</th>
                      <th className="py-3 px-4">Department</th>
                      <th className="py-3 px-4">Attendance</th>
                      <th className="py-3 px-4">Assets</th>
                      <th className="py-3 px-4">Status (Click to toggle)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.05]">
                    {filteredCrm.map((emp) => (
                      <tr
                        key={emp.id}
                        className="hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="py-3 px-4">
                          <div className="font-medium text-white">
                            {emp.name}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono">
                            {emp.id} • {emp.email}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                            {emp.role}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-300 font-medium">
                          {emp.department}
                        </td>
                        <td className="py-3 px-4 font-mono font-medium text-emerald-400">
                          {emp.attendanceRate}
                        </td>
                        <td className="py-3 px-4 font-mono text-slate-300">
                          {emp.assignedAssets} Items
                        </td>
                        <td className="py-3 px-4">
                          <button
                            onClick={() => toggleStatus(emp.id)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                              emp.status === "Active"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
                                : emp.status === "On Leave"
                                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20"
                                  : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${emp.status === "Active" ? "bg-emerald-400" : emp.status === "On Leave" ? "bg-amber-400" : "bg-cyan-400"}`}
                            />
                            <span>{emp.status}</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-500 font-mono">
              <span>
                Dynamic state updates powered by custom React hooks &
                memoization
              </span>
              <button
                onClick={() => setCrmList(initialEmployees)}
                className="hover:text-cyan-400 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                Reset Data
              </button>
            </div>
          </div>
        )}

        {activeTab === "nutrition" && (
          <div className="max-w-4xl mx-auto rounded-3xl glass-panel border border-white/10 p-3.5 sm:p-6 shadow-2xl w-full min-w-0 max-w-full overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5 sm:mb-6">
              <div>
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  Live Macro & Calorie Engine
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Reactive client state simulation reflecting Sayan&apos;s
                  Zustand nutrition tracker
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-slate-400">
                  Daily Target
                </span>
                <div className="text-sm font-bold text-white font-mono">
                  {calorieGoal} kcal
                </div>
              </div>
            </div>

            {/* Macro Summary Gauges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              {/* Calories */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    Calories
                  </span>
                  <span className="font-mono text-amber-400 font-semibold">
                    {caloriePercent}%
                  </span>
                </div>
                <div className="text-base sm:text-lg font-bold text-white font-mono">
                  {totalCalories}{" "}
                  <span className="text-[10px] sm:text-xs text-slate-400 font-normal">
                    / {calorieGoal}
                  </span>
                </div>
                <div className="w-full bg-white/[0.1] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-amber-400 to-orange-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${caloriePercent}%` }}
                  />
                </div>
              </div>

              {/* Protein */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="flex items-center gap-1">
                    <Beef className="w-3.5 h-3.5 text-cyan-400" />
                    Protein
                  </span>
                  <span className="font-mono text-cyan-400 font-semibold">
                    {proteinPercent}%
                  </span>
                </div>
                <div className="text-base sm:text-lg font-bold text-white font-mono">
                  {totalProtein}g{" "}
                  <span className="text-[10px] sm:text-xs text-slate-400 font-normal">
                    / {proteinGoal}g
                  </span>
                </div>
                <div className="w-full bg-white/[0.1] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${proteinPercent}%` }}
                  />
                </div>
              </div>

              {/* Carbs */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="flex items-center gap-1">
                    <Wheat className="w-3.5 h-3.5 text-emerald-400" />
                    Carbs
                  </span>
                </div>
                <div className="text-base sm:text-lg font-bold text-white font-mono">
                  {totalCarbs}g
                </div>
                <div className="w-full bg-white/[0.1] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className="bg-emerald-400 h-full rounded-full"
                    style={{ width: `${Math.min(totalCarbs / 2.5, 100)}%` }}
                  />
                </div>
              </div>

              {/* Fats */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="flex items-center gap-1">
                    <Droplet className="w-3.5 h-3.5 text-purple-400" />
                    Fats
                  </span>
                </div>
                <div className="text-base sm:text-lg font-bold text-white font-mono">
                  {totalFat}g
                </div>
                <div className="w-full bg-white/[0.1] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className="bg-purple-400 h-full rounded-full"
                    style={{ width: `${Math.min(totalFat / 0.8, 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Quick Add Food Form */}
            <form
              onSubmit={addFoodItem}
              className="grid grid-cols-1 sm:grid-cols-12 gap-2 mb-4"
            >
              <input
                type="text"
                placeholder="Food item name (e.g., Salmon Salad)"
                value={newFoodName}
                onChange={(e) => setNewFoodName(e.target.value)}
                className="sm:col-span-6 px-3.5 py-2.5 sm:py-2 rounded-xl bg-white/[0.04] border border-white/10 text-base sm:text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <input
                type="number"
                placeholder="Calories (kcal)"
                value={newFoodCals}
                onChange={(e) => setNewFoodCals(e.target.value)}
                className="sm:col-span-2 px-3.5 py-2.5 sm:py-2 rounded-xl bg-white/[0.04] border border-white/10 text-base sm:text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <input
                type="number"
                placeholder="Protein (g)"
                value={newFoodProtein}
                onChange={(e) => setNewFoodProtein(e.target.value)}
                className="sm:col-span-2 px-3.5 py-2.5 sm:py-2 rounded-xl bg-white/[0.04] border border-white/10 text-base sm:text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="sm:col-span-2 min-h-[44px] sm:min-h-0 px-3 py-2.5 sm:py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-semibold flex items-center justify-center gap-1 shadow-md shadow-emerald-500/20 hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Meal
              </button>
            </form>

            {/* Current Logged Meal List */}
            <div className="space-y-2">
              {foodItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors"
                >
                  <div className="flex flex-col pr-2">
                    <span className="text-xs font-medium text-white">
                      {item.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 mt-0.5">
                      {item.caloriesPerServing * item.servings} kcal •{" "}
                      {item.proteinGrams * item.servings}g Protein •{" "}
                      {item.carbsGrams * item.servings}g Carbs •{" "}
                      {item.fatGrams * item.servings}g Fat
                    </span>
                  </div>

                  <button
                    onClick={() => removeFoodItem(item.id)}
                    className="min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer shrink-0"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
