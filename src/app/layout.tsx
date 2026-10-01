import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sayan Dutta | MERN Stack & Next.js Developer",
  description:
    "Portfolio of Sayan Dutta, MERN Stack & Next.js Developer with 4+ years building enterprise CRMs, AI-driven applications, real-time dashboards, and high-performance web systems.",
  keywords: [
    "Sayan Dutta",
    "MERN Stack Developer",
    "Next.js Developer",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "Frontend Engineer",
    "Full Stack Engineer",
    "Kolkata",
    "Portfolio",
  ],
  authors: [{ name: "Sayan Dutta", url: "mailto:sayandutta83@gmail.com" }],
  creator: "Sayan Dutta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sayandutta.dev",
    title: "Sayan Dutta | MERN Stack & Next.js Developer",
    description:
      "Explore the portfolio, enterprise projects, real-time architectures, and full-stack technical expertise of Sayan Dutta.",
    siteName: "Sayan Dutta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayan Dutta | MERN Stack & Next.js Developer",
    description:
      "4+ years building enterprise CRMs, AI-driven applications, real-time dashboards, and high-performance web systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#07090e] text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
