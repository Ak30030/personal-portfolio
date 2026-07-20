"use client";

import { Home, User, Code2, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {
  const { isLight, toggleTheme } = useTheme();

  return (
    <div className="flex justify-center pt-8 relative z-50">
      <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-[#121B2E]/80 backdrop-blur px-3 py-2 shadow-lg">
        <div className="nav-item-wrapper relative">
          <span className="nav-tooltip">Home</span>
          <a
            href="/"
            className="cursor-hover-target p-2 rounded-full hover:bg-[#E8A33D]/20 transition-colors block"
            style={{ color: "#E8A33D" }}
            aria-label="Home"
          >
            <Home size={18} />
          </a>
        </div>

        <div className="nav-item-wrapper relative">
          <span className="nav-tooltip">About</span>
          <a
            href="/about"
            className="cursor-hover-target p-2 rounded-full hover:bg-white/10 transition-colors block text-[var(--text-muted)]"
            aria-label="About"
          >
            <User size={18} />
          </a>
        </div>

        <div className="nav-item-wrapper relative">
          <span className="nav-tooltip">Projects</span>
          <a
            href="/projects"
            className="cursor-hover-target p-2 rounded-full hover:bg-white/10 transition-colors block text-[var(--text-muted)]"
            aria-label="Projects"
          >
            <Code2 size={18} />
          </a>
        </div>

        <div className="nav-item-wrapper relative">
          <span className="nav-tooltip">Contact</span>
          <a
            href="/contact"
            className="cursor-hover-target p-2 rounded-full hover:bg-white/10 transition-colors block text-[var(--text-muted)]"
            aria-label="Contact"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="nav-item-wrapper relative">
          <span className="nav-tooltip">
            {isLight ? "Switch to Dark" : "Switch to Light"}
          </span>
          <button
            onClick={toggleTheme}
            className="cursor-hover-target p-2 rounded-full hover:bg-white/10 transition-colors block text-[var(--text-muted)]"
            aria-label="Toggle background"
          >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </nav>
    </div>
  );
}