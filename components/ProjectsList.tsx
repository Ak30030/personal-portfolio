"use client";

import { useState } from "react";
import { List, LayoutGrid, Github, ExternalLink } from "lucide-react";
import { IProject } from "@/models/Project";

type Filter = "All" | "Web" | "Mobile" | "Other";
type ViewMode = "list" | "grid";

export default function ProjectsList({ projects }: { projects: IProject[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [view, setView] = useState<ViewMode>("list");

  const counts = {
    All: projects.length,
    Web: projects.filter((p) => p.category === "Web").length,
    Mobile: projects.filter((p) => p.category === "Mobile").length,
    Other: projects.filter((p) => p.category === "Other").length,
  };

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const TABS: Filter[] = ["All", "Mobile", "Other", "Web"];

  return (
    <div>
      {/* FILTER TABS + VIEW TOGGLE */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div className="flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className="cursor-hover-target transit-tab px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: filter === tab ? "#E7ECF3" : "transparent",
                color: filter === tab ? "#0B1220" : "var(--text-muted)",
                border: filter === tab ? "none" : "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {tab}
              {counts[tab] > 0 && <sup className="ml-0.5">{counts[tab]}</sup>}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setView("list")}
            className="cursor-hover-target p-2.5 rounded-full transition-colors"
            style={{
              backgroundColor: view === "list" ? "#E7ECF3" : "transparent",
              color: view === "list" ? "#0B1220" : "var(--text-muted)",
              border: view === "list" ? "none" : "1px solid rgba(255,255,255,0.15)",
            }}
            aria-label="List view"
          >
            <List size={18} />
          </button>
          <button
            onClick={() => setView("grid")}
            className="cursor-hover-target p-2.5 rounded-full transition-colors"
            style={{
              backgroundColor: view === "grid" ? "#E7ECF3" : "transparent",
              color: view === "grid" ? "#0B1220" : "var(--text-muted)",
              border: view === "grid" ? "none" : "1px solid rgba(255,255,255,0.15)",
            }}
            aria-label="Grid view"
          >
            <LayoutGrid size={18} />
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-[var(--text-muted)] py-10 text-center">
          No projects in this category yet.
        </p>
      ) : view === "list" ? (
        <ListView projects={filtered} />
      ) : (
        <GridView projects={filtered} />
      )}
    </div>
  );
}

function ListView({ projects }: { projects: IProject[] }) {
  return (
    <div>
      <div className="hidden sm:flex justify-between text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] border-b border-white/10 pb-3 mb-2">
        <span>Client</span>
        <div className="flex gap-16">
          <span>Services</span>
          <span>Year</span>
        </div>
      </div>
      {projects.map((project) => (
        <a
          key={project.slug}
          href={project.liveUrl || project.githubUrl || "#"}
          target={project.liveUrl || project.githubUrl ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="cursor-hover-target transit-row flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 py-6 px-4 -mx-4 rounded-lg group"
        >
          <h3
            className="transit-row-title text-xl sm:text-2xl font-semibold transition-colors group-hover:text-[#E8A33D]"
            style={{ color: "var(--text)" }}
          >
            {project.title}
          </h3>
          <div className="flex gap-16 text-sm text-[var(--text-muted)] mt-2 sm:mt-0">
            <span>{project.category}</span>
            <span>{new Date(project.createdAt).getFullYear()}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

function GridView({ projects }: { projects: IProject[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project.slug}
          className="transit-card rounded-2xl border border-white/10 bg-[#121B2E]/60 overflow-hidden flex flex-col"
        >
          {/* Image, or a gradient placeholder if none is set */}
          <div className="transit-card-image aspect-video w-full flex items-center justify-center overflow-hidden">
            {project.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center font-mono text-3xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #E8A33D22, #2DD4BF22)",
                  color: "var(--text-muted)",
                }}
              >
                {project.title.charAt(0)}
              </div>
            )}
          </div>

          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-mono font-bold text-lg" style={{ color: "var(--text)" }}>
                {project.title}
              </h3>
              {project.featured && (
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#E8A33D", color: "#0B1220" }}
                >
                  Featured
                </span>
              )}
            </div>

            <p className="text-sm text-[var(--text-muted)] mb-4 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-full border border-white/15"
                  style={{ color: "#2DD4BF" }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-hover-target flex items-center gap-1.5 text-sm px-4 py-2 rounded-full border border-white/15 font-mono transition-colors hover:border-[#E8A33D]"
                  style={{ color: "var(--text)" }}
                >
                  <Github size={14} /> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-hover-target flex items-center gap-1.5 text-sm px-4 py-2 rounded-full font-mono font-semibold transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: "#E8A33D", color: "#0B1220" }}
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}