"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import SplitText from "@/components/SplitText";

const ROLES = ["Full-Stack Developer", "Forex Trader"];

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(45,212,191,0.15), transparent)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 pt-16 pb-24 flex flex-col items-center text-center">
        {/* STATUS BADGE */}
        <div className="flex items-center gap-2 rounded-full bg-[#121B2E]/60 border border-white/10 px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: "#E8A33D" }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: "#E8A33D" }}
            />
          </span>
          <span className="text-sm text-(--text-muted)">
            Available for freelance work
          </span>
        </div>

        {/* BIG NAME */}
        <h1 className="font-mono text-6xl sm:text-7xl font-bold mb-3">
          <SplitText text="Fred" hoverColor="#E8A33D" />
        </h1>

        {/* ROTATING ROLE TAG */}
        <p
          className="text-2xl font-bold font-mono mb-8 transition-opacity duration-300"
          style={{ color: "#E8A33D", opacity: fade ? 1 : 0 }}
        >
          {ROLES[roleIndex]}
        </p>

        {/* BIO WITH HIGHLIGHTS */}
        <p className="max-w-2xl text-lg leading-relaxed text-(--text-muted) mb-10">
          Full-stack developer building{" "}
          <span className="font-semibold" style={{ color: "var(--text)" }}>
            modern web applications
          </span>{" "}
          with Next.js, TypeScript, and MongoDB. I help turn ideas into{" "}
          <mark
            className="px-1 rounded font-semibold"
            style={{ backgroundColor: "#E8A33D", color: "#0B1220" }}
          >
            polished software products
          </mark>{" "}
          through clean code — and off the clock, I read{" "}
          <mark
            className="px-1 rounded font-semibold"
            style={{ backgroundColor: "#2DD4BF", color: "#0B1220" }}
          >
            candlestick charts
          </mark>{" "}
          with the same eye.
        </p>

        {/* SIGNATURE CHART LINE */}
        <div className="w-full max-w-sm mb-10">
          <svg
            viewBox="0 0 400 120"
            className="w-full h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 100 L60 85 L100 95 L150 60 L200 70 L250 35 L300 45 L340 15"
              stroke="#2DD4BF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="signal-line"
            />
            <rect
              x="336"
              y="6"
              width="10"
              height="18"
              fill="#E8A33D"
              className="signal-cursor"
            />
          </svg>
        </div>

        {/* CTA ROW */}
        <div className="flex items-center gap-4">
          <a
            href="/contact"
            className="cursor-hover-target flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#E8A33D", color: "#0B1220" }}
          >
            Let&apos;s Talk <span aria-hidden="true">→</span>
          </a>

          <a
            href="https://github.com/Ak30030"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-hover-target p-3 rounded-full border border-white/15 hover:border-[#E8A33D] transition-colors text-(--text)"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/awuntuba-fredrick-528767259"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-hover-target p-3 rounded-full border border-white/15 hover:border-[#E8A33D] transition-colors text-(--text)"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:awuntubafredrick@gmail.com"
            className="cursor-hover-target p-3 rounded-full border border-white/15 hover:border-[#E8A33D] transition-colors text-(--text)"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </main>
  );
}