export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Enterprise & CRM" | "AI & Real-Time" | "Health & Travel";
  period: string;
  company: string;
  role: string;
  image: string;
  tech: string[];
  summary: string;
  features: string[];
  architecture: string[];
  metrics: { label: string; value: string }[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  techStack: string[];
  projectsWorkedOn?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    icon: string;
    highlight: string;
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Sayan Dutta",
    title: "MERN Stack & Next.js Developer",
    experienceYears: "4+",
    email: "sayandutta83@gmail.com",
    phone: "+91 8906367874",
    location: "Kolkata, India",
    availability: "Available for MERN & Full-Stack Roles (Remote / Hybrid / On-site)",
    bio: "MERN Stack & Next.js Developer with 4+ years of expertise architecting high-performance web applications, scalable enterprise CRMs, real-time dashboards, and AI-powered interfaces. Proficient in bridging complex frontend UI design with resilient Node.js backends, secure NextAuth/JWT workflows, and optimized state management.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:sayandutta83@gmail.com",
      phone: "tel:+918906367874",
    },
    stats: [
      { label: "Years of Experience", value: "4+" },
      { label: "Production Systems", value: "10+" },
      { label: "Core Technologies", value: "MERN" },
      { label: "Code Quality & Uptime", value: "99.9%" },
    ],
  },

  skills: [
    {
      category: "Frontend Excellence",
      description: "Modern component architectures, SSR/SSG rendering, and design systems",
      skills: [
        { name: "Next.js (App Router)", level: "Advanced", experience: "3+ yrs", icon: "Globe", highlight: "Server Components, API Routes, SSR, Turbopack" },
        { name: "React.js", level: "Expert", experience: "4+ yrs", icon: "Code2", highlight: "Custom hooks, component lifecycle, virtual DOM" },
        { name: "TypeScript", level: "Advanced", experience: "3+ yrs", icon: "FileCode2", highlight: "Strict type safety, generics, interfaces" },
        { name: "Tailwind CSS", level: "Advanced", experience: "3+ yrs", icon: "Palette", highlight: "Design tokens, responsive layouts, glassmorphism" },
        { name: "HTML5 & CSS3", level: "Expert", experience: "4+ yrs", icon: "Layout", highlight: "Semantic markup, CSS Grid, Flexbox, Animations" },
        { name: "Angular", level: "Intermediate", experience: "1 yr", icon: "Layers", highlight: "RxJS, Dependency Injection, Services, Modules" },
      ],
    },
    {
      category: "Backend & Cloud Architecture",
      description: "Scalable REST APIs, role-based authentication, and serverless workflows",
      skills: [
        { name: "Node.js", level: "Advanced", experience: "4+ yrs", icon: "Server", highlight: "Event loop, asynchronous IO, microservices" },
        { name: "Express.js", level: "Advanced", experience: "4+ yrs", icon: "Cpu", highlight: "Middleware chains, RESTful controllers, routing" },
        { name: "Next.js API Routes", level: "Advanced", experience: "3+ yrs", icon: "Workflow", highlight: "Edge functions, request handlers, server actions" },
        { name: "JWT & NextAuth", level: "Expert", experience: "3+ yrs", icon: "ShieldCheck", highlight: "Role-based access control (RBAC), secure sessions" },
        { name: "REST APIs", level: "Expert", experience: "4+ yrs", icon: "Network", highlight: "API design, versioning, serialization, security" },
      ],
    },
    {
      category: "Database & Data Modeling",
      description: "High-throughput database design, indexing, and aggregations",
      skills: [
        { name: "MongoDB", level: "Advanced", experience: "4+ yrs", icon: "Database", highlight: "Schema design, aggregation pipelines, indexing" },
        { name: "Mongoose", level: "Advanced", experience: "4+ yrs", icon: "Boxes", highlight: "Data modeling, validation hooks, population" },
      ],
    },
    {
      category: "State Management & Forms",
      description: "Predictable client state, reactive data fetching, and high-performance validation",
      skills: [
        { name: "Zustand", level: "Expert", experience: "2+ yrs", icon: "Zap", highlight: "Minimal boilerplate, transient updates, slices" },
        { name: "Redux & Redux-Saga", level: "Advanced", experience: "3+ yrs", icon: "RefreshCw", highlight: "Predictable state container, generators, side-effects" },
        { name: "SWR & Axios", level: "Advanced", experience: "3+ yrs", icon: "DownloadCloud", highlight: "Stale-while-revalidate, caching, interceptors" },
        { name: "React Hook Form", level: "Advanced", experience: "3+ yrs", icon: "CheckSquare", highlight: "Uncontrolled components, dynamic schema validation" },
        { name: "RxJS", level: "Intermediate", experience: "1 yr", icon: "Activity", highlight: "Observables, streams, reactive pipelines" },
      ],
    },
    {
      category: "Integrations & Tooling",
      description: "Payment gateways, video streaming, version control, and CI/CD pipelines",
      skills: [
        { name: "Razorpay Gateway", level: "Advanced", experience: "1 yr", icon: "CreditCard", highlight: "Webhooks, signature verification, checkouts" },
        { name: "Zoom Video SDK", level: "Proficient", experience: "1 yr", icon: "Video", highlight: "Live tele-consultation video streaming" },
        { name: "Git, GitHub & GitLab", level: "Expert", experience: "4+ yrs", icon: "GitBranch", highlight: "Branching strategies, PR reviews, CI workflows" },
        { name: "Webpack & Vite", level: "Advanced", experience: "3+ yrs", icon: "Package", highlight: "Bundling, code splitting, asset optimization" },
        { name: "Google Analytics & GTM", level: "Advanced", experience: "2+ yrs", icon: "BarChart3", highlight: "Custom event tracking, conversion funnels" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "enterprise-crm",
      title: "Enterprise Multi-Module CRM",
      subtitle: "Full-scale corporate operational suite with RBAC and dynamic workflows",
      category: "Enterprise & CRM",
      period: "04/2026 – 11/09/2026",
      company: "Pixel Solutionz",
      role: "Lead Full-Stack Developer",
      image: "/crm-preview.jpg",
      tech: ["MongoDB", "Express.js", "React.js", "Next.js", "Node.js", "TypeScript", "JWT", "NextAuth", "REST APIs"],
      summary:
        "Developed and maintained an enterprise CRM covering employee management, IT hardware/software assets, attendance, leaves, timesheets, holidays, audits, and administrative reporting.",
      features: [
        "End-to-end CRUD pipelines with fine-grained role-based permission control (Admin, Manager, Employee)",
        "Dynamic high-performance data tables with multi-field search, multi-column sorting, and server-side pagination",
        "Secure JWT authentication and NextAuth session synchronization across client and server layers",
        "Interactive dashboard analytics for leave approvals, timesheet audits, and hardware inventory tracking",
      ],
      architecture: [
        "Modular React component library with decoupled business logic via custom hooks",
        "Express & Node.js REST API layer with rate limiting, payload sanitization, and structured error boundaries",
        "MongoDB indexing strategies for rapid aggregation of timesheets and attendance data",
      ],
      metrics: [
        { label: "Core Modules", value: "8+" },
        { label: "Role Hierarchy", value: "Multi-Tier" },
        { label: "Data Integrity", value: "100%" },
      ],
      featured: true,
    },
    {
      id: "pixelgpt",
      title: "PixelGPT — AI Chat Engine",
      subtitle: "High-performance generative AI interface with typewriter streaming markdown",
      category: "AI & Real-Time",
      period: "07/2025 – 08/2025",
      company: "Pixel Solutionz",
      role: "Application Developer",
      image: "/pixelgpt-preview.jpg",
      tech: ["Next.js", "React.js", "Node.js", "TypeScript", "Zustand", "Markdown Rendering", "REST APIs"],
      summary:
        "Engineered an AI-powered conversational web application with real-time API streaming, responsive markdown code syntax rendering, and chat session persistence.",
      features: [
        "Typewriter-style real-time markdown streaming effect for human-like conversational responsiveness",
        "Zustand-powered state management with intelligent message deduplication preventing ghost render loops",
        "Code syntax highlighting with one-click copy, collapsible history drawer, and conversation export",
        "Node.js/REST backend orchestrating message queues and payload delivery with minimal latency",
      ],
      architecture: [
        "Chunk-based token parsing pipeline updating React DOM without triggering re-render cascades",
        "Zustand slice pattern separating UI interaction state, active chat context, and message histories",
        "Resilient fallback retry mechanism for interrupted stream requests",
      ],
      metrics: [
        { label: "Stream Latency", value: "<120ms" },
        { label: "Zero Duplicates", value: "Verified" },
        { label: "State Overhead", value: "Minimal" },
      ],
      featured: true,
    },
    {
      id: "fitmitra",
      title: "Fitmitra — Nutrition & Calorie Suite",
      subtitle: "Dynamic health tracking portal with instant nutrient computation",
      category: "Health & Travel",
      period: "05/2025 – 01/2026",
      company: "Pixel Solutionz",
      role: "Application Developer",
      image: "/fitmitra-preview.jpg",
      tech: ["Next.js", "Node.js", "TypeScript", "REST APIs", "Zustand", "Tailwind CSS"],
      summary:
        "Engineered a comprehensive calorie and nutrition monitoring application featuring food logging, live calorie metrics, macro-nutrient targets, and interactive dashboard views.",
      features: [
        "Interactive food log with instantaneous macro calculations (Carbohydrates, Protein, Fat, Net Calories)",
        "Zustand client-side state caching with zero lag even with hundreds of daily meal logs",
        "Node.js-backed REST API providing real-time nutritional database lookups and caloric benchmarks",
        "Visual circular progress gauges and historical adherence charts for goal monitoring",
      ],
      architecture: [
        "Optimistic UI updates for immediate feedback on item additions and deletions",
        "Memoized calculation pipelines reducing JavaScript execution overhead during food list changes",
        "Responsive, mobile-first design system built with custom modern Tailwind utilities",
      ],
      metrics: [
        { label: "Calc Latency", value: "Instant" },
        { label: "Client Cache", value: "Zustand" },
        { label: "UI Response", value: "60 FPS" },
      ],
      featured: true,
    },
    {
      id: "careocure",
      title: "Careocure — Telehealth & Therapy",
      subtitle: "Healthcare booking platform with Razorpay and Zoom video call integration",
      category: "Health & Travel",
      period: "01/2023 – 09/2023",
      company: "Pixel Solutionz",
      role: "Application Developer",
      image: "/careocure-preview.jpg",
      tech: ["Angular", "HTML5", "CSS3", "Redux", "Webpack", "RxJS", "Razorpay", "Zoom SDK", "GTM"],
      summary:
        "Constructed a multi-role digital therapy and healthcare platform featuring calendar appointment scheduling, secure video tele-consultations, and integrated payments.",
      features: [
        "Interactive appointment booking calendar connecting patients with accredited therapists and physicians",
        "Direct Razorpay payment gateway integration with verified server-side transaction confirmations",
        "Embedded Zoom video consultation sessions with encrypted meeting access and real-time alerts",
        "Comprehensive admin, therapist, and patient dashboards with Google Analytics and Tag Manager analytics",
      ],
      architecture: [
        "Reactive RxJS stream patterns managing real-time slot availability and checkout transitions",
        "Decoupled state architecture using Redux for multi-step consultation bookings",
        "Strict medical appointment access controls and automated session link generation",
      ],
      metrics: [
        { label: "Payment Success", value: "99.8%" },
        { label: "Consultations", value: "Video-Ready" },
        { label: "Analytics", value: "GTM + GA" },
      ],
      featured: true,
    },
    {
      id: "ecl-visitor",
      title: "ECL Visitor Management System",
      subtitle: "Enterprise visitor tracking, host coordination, and automated approvals",
      category: "Enterprise & CRM",
      period: "01/2026 – 05/2026",
      company: "Pixel Solutionz",
      role: "Application Developer",
      image: "/crm-preview.jpg",
      tech: ["Next.js", "Node.js", "TypeScript", "NextAuth", "SWR", "REST APIs", "API Routes"],
      summary:
        "Developed corporate visitor request and check-in workflows, host approvals, digital visitor pass generation, and role-based administrative control.",
      features: [
        "NextAuth session management orchestrating host approvals, gatekeeper check-ins, and security logs",
        "SWR client-side data fetching with real-time revalidation and background caching",
        "Next.js server-side API routes handling badge generation, identity verification, and audit trails",
      ],
      architecture: [
        "Edge-compatible API handlers processing time-sensitive check-in events",
        "Optimized database queries for instant badge scanning and log verification",
      ],
      metrics: [
        { label: "Check-in Flow", value: "<15s" },
        { label: "Data Caching", value: "SWR" },
      ],
    },
    {
      id: "issue-management",
      title: "Collaborative Issue & Bug Tracker",
      subtitle: "Real-time task pipelines, kanban workflow, and issue discussion chat",
      category: "AI & Real-Time",
      period: "04/2025 – 06/2025",
      company: "Pixel Solutionz",
      role: "Application Developer",
      image: "/pixelgpt-preview.jpg",
      tech: ["Next.js", "React.js", "Node.js", "TypeScript", "NextAuth", "REST APIs", "Zustand"],
      summary:
        "Built an interactive task, bug, and issue management platform featuring role-based assignments, lifecycle status boards, and embedded team chat.",
      features: [
        "Interactive issue lifecycles (Backlog, In Progress, Code Review, QA, Closed) with status triggers",
        "Embedded real-time issue chat allowing engineering and product teams to collaborate instantly",
        "NextAuth authenticated access protecting sensitive product roadmaps and customer bug logs",
      ],
      architecture: [
        "Zustand state synchronization updating active discussion threads without page reloads",
        "Dynamic form validations ensuring accurate severity tagging and reproducible steps",
      ],
      metrics: [
        { label: "Sync Speed", value: "Real-time" },
        { label: "Role Security", value: "NextAuth" },
      ],
    },
    {
      id: "skyhubtrip",
      title: "SkyhubTrip — Global Travel Platform",
      subtitle: "Travel package booking engine with advanced modular form handling",
      category: "Health & Travel",
      period: "07/2024 – 05/2025",
      company: "Pixel Solutionz",
      role: "Application Developer",
      image: "/careocure-preview.jpg",
      tech: ["Next.js", "Node.js", "TypeScript", "Zustand", "React Hook Form", "RSuite", "REST APIs"],
      summary:
        "Contributed to high-traffic travel booking platform featuring flight/hotel exploratory forms, customizable itineraries, and dynamic price aggregations.",
      features: [
        "Multi-step itinerary configuration powered by React Hook Form for zero-jank input performance",
        "RSuite UI patterns customized with modern brand styles and responsive mobile navigation",
        "State synchronization with Zustand handling complex traveler configurations and date selections",
      ],
      architecture: [
        "Modular form schema architecture decoupling complex travel criteria into isolated fields",
        "Frontend performance tuning eliminating re-renders during high-frequency price recalculations",
      ],
      metrics: [
        { label: "Form Speed", value: "Uncontrolled" },
        { label: "State Library", value: "Zustand" },
      ],
    },
    {
      id: "maitrip",
      title: "Maitrip — Tour & Experience Engine",
      subtitle: "Server-side rendered trip exploration portal with lazy loaded packages",
      category: "Health & Travel",
      period: "01/2024 – 09/2026",
      company: "Pixel Solutionz",
      role: "Application Developer",
      image: "/crm-preview.jpg",
      tech: ["Next.js", "React.js", "Node.js", "TypeScript", "React Hook Form", "Axios", "REST APIs"],
      summary:
        "Architected trip catalog and package detail interfaces backed by Node.js REST services, SSR caching, and lazy loading for maximal SEO performance.",
      features: [
        "Server-Side Rendering (SSR) delivering instant LCP scores and optimized search indexing",
        "Dynamic image and video lazy loading reducing initial payload weight by over 45%",
        "Interactive booking inquiries handled via React Hook Form and validated Axios payloads",
      ],
      architecture: [
        "Next.js App Router layout composition ensuring persistent search filters across route transitions",
        "Node.js API pipeline transforming raw database payloads into optimized client representations",
      ],
      metrics: [
        { label: "SSR Enabled", value: "100%" },
        { label: "Payload Reduced", value: "-45%" },
      ],
    },
    {
      id: "gllit",
      title: "Gllit — Real Estate Marketplace",
      subtitle: "Modern property buy, sell, and rent portal with interactive listings",
      category: "Enterprise & CRM",
      period: "10/2023 – 01/2024",
      company: "Pixel Solutionz",
      role: "Application Developer",
      image: "/fitmitra-preview.jpg",
      tech: ["Next.js", "React.js", "Node.js", "TypeScript", "REST APIs", "CSS3"],
      summary:
        "Engineered real-estate discovery application with dynamic property filtering, interactive image galleries, and inquiry contact workflows.",
      features: [
        "Multi-parameter property search (Location, Price, BHK, Amenities, Possession Date)",
        "Reusable UI component kit ensuring consistent visual language across residential & commercial tabs",
        "REST API integrations for real-time agent leads and property availability updates",
      ],
      architecture: [
        "Component-driven design with modular card layouts and interactive virtual tours",
        "Optimized asset delivery and clean client-side routing",
      ],
      metrics: [
        { label: "Listing Filter", value: "Instant" },
        { label: "Component Kit", value: "Reusable" },
      ],
    },
  ] as Project[],

  experience: [
    {
      id: "pixel-solutionz",
      role: "Application Developer",
      company: "Pixel Solutionz",
      period: "01/2023 – 09/2026 (3 Yrs 9 Mos)",
      location: "Kolkata, India",
      type: "Full-Time",
      description:
        "Spearheaded frontend and full-stack development for enterprise CRMs, AI chat engines, visitor management systems, health trackers, and high-traffic booking platforms.",
      highlights: [
        "Architected an enterprise multi-module CRM managing thousands of corporate assets, employee attendance, and timesheet records with role-based access control.",
        "Engineered PixelGPT conversational web app featuring typewriter-style markdown streaming and duplicate-proof Zustand state synchronization.",
        "Constructed the ECL Visitor Management System leveraging NextAuth for secure credential verification and SWR for real-time client state revalidation.",
        "Developed Fitmitra's health calculation engine with optimistic UI updates and live nutritional calculation.",
        "Integrated Razorpay payment gateways and Zoom Video SDK for the Careocure telemedicine web platform.",
      ],
      techStack: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TypeScript",
        "JavaScript",
        "NextAuth",
        "JWT",
        "Zustand",
        "SWR",
        "React Hook Form",
        "REST APIs",
      ],
      projectsWorkedOn: [
        "Enterprise CRM",
        "ECL Visitor Management",
        "Fitmitra Health",
        "PixelGPT AI",
        "SkyhubTrip",
        "Maitrip",
        "Gllit Real Estate",
        "Careocure Telehealth",
      ],
    },
    {
      id: "symlink-technologies",
      role: "Junior Web Developer",
      company: "Symlink Technologies LLP",
      period: "06/2022 – 09/2022",
      location: "Kolkata, India",
      type: "Full-Time",
      description:
        "Built responsive single-page web applications utilizing React.js, Redux, and Redux-Saga for robust asynchronous side-effect and API transaction handling.",
      highlights: [
        "Constructed reusable React component libraries adhering to strict design specifications.",
        "Integrated REST APIs and implemented Redux-Saga generator workflows for complex asynchronous operations.",
        "Collaborated with lead engineers on state normalization, unit testing, and cross-browser responsiveness.",
      ],
      techStack: ["React.js", "Redux", "Redux-Saga", "JavaScript (ES6+)", "REST APIs", "CSS3", "HTML5"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Techno India Batanagar",
      year: "Graduated 2018",
      location: "Kolkata, India",
      details: "Comprehensive curriculum focusing on Data Structures, Algorithms, Web Technologies, Database Management Systems, and Object-Oriented Software Engineering.",
    },
  ],

  certifications: [
    {
      title: "6-Month Full MERN Stack Specialized Training",
      issuer: "Webskitters Academy",
      year: "Professional Certification",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Full-Stack Development"],
    },
    {
      title: "Python Online Certification",
      issuer: "IIT Bombay",
      year: "Technical Program",
      skills: ["Python Programming", "Algorithm Design", "Data Structures"],
    },
    {
      title: "Industrial Training in Python",
      issuer: "Industrial Institute",
      year: "Hands-on Industry Training",
      skills: ["Applied Scripting", "Backend Integration", "File Systems"],
    },
  ],
};
