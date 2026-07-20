"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import SplitText from "./SplitText";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 mt-24 px-6 py-16">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-10">
        {/* BRAND */}
        <div>
          <h3 className="font-mono text-2xl font-bold mb-3">
            <SplitText text="Fred" hoverColor="#E8A33D" />
          </h3>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Full-Stack Developer building modern digital solutions —
            turning ideas into polished software products through clean
            code.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-mono font-bold mb-4" style={{ color: "var(--text)" }}>
            Quick Links
          </h4>
          <div className="flex flex-col gap-3">
            <a
              href="/about"
              className="cursor-hover-target text-sm text-[var(--text-muted)] hover:text-[#E8A33D] transition-colors w-fit"
            >
              About
            </a>
            <a
              href="/projects"
              className="cursor-hover-target text-sm text-[var(--text-muted)] hover:text-[#E8A33D] transition-colors w-fit"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="cursor-hover-target text-sm text-[var(--text-muted)] hover:text-[#E8A33D] transition-colors w-fit"
            >
              Contact
            </a>
          </div>
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="font-mono font-bold mb-4" style={{ color: "var(--text)" }}>
            Connect
          </h4>
          <div className="flex gap-3">
            <a
              href="https://github.com/Ak30030"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover-target p-2.5 rounded-lg border border-white/10 hover:border-[#E8A33D] transition-colors"
              style={{ color: "#E8A33D" }}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/awuntuba-fredrick-528767259"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover-target p-2.5 rounded-lg border border-white/10 hover:border-[#E8A33D] transition-colors"
              style={{ color: "#E8A33D" }}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:awuntubafredrick@gmail.com"
              className="cursor-hover-target p-2.5 rounded-lg border border-white/10 hover:border-[#E8A33D] transition-colors"
              style={{ color: "#E8A33D" }}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto border-t border-white/10 mt-10 pt-6 flex items-center justify-between">
        <p className="text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} Fred. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="cursor-hover-target p-2 rounded-full border border-white/15 hover:border-[#E8A33D] transition-colors"
          style={{ color: "var(--text)" }}
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}