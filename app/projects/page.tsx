import { Github, ArrowUpRight } from "lucide-react";
import connectDB from "@/lib/db";
import Project, { IProject } from "@/models/Project";
import ProjectsList from "@/components/ProjectsList";

async function getProjects(): Promise<IProject[]> {
  await connectDB();
  const projects = await Project.find({})
    .sort({ featured: -1, createdAt: -1 })
    .lean();

  return JSON.parse(JSON.stringify(projects));
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-mono text-5xl font-bold mb-5" style={{ color: "var(--text)" }}>
            My Projects
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing my expertise in web
            development, from responsive applications to innovative
            solutions using modern technologies.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com/Ak30030"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-hover-target flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#E8A33D", color: "#0B1220" }}
          >
            GitHub Profile <Github size={18} />
          </a>
          <a
            href="/contact"
            className="cursor-hover-target flex items-center gap-2 rounded-full px-6 py-3 font-semibold border transition-colors hover:border-[#E8A33D]"
            style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--text)" }}
          >
            Work With Me <ArrowUpRight size={18} />
          </a>
        </div>

        {projects.length === 0 ? (
          <p className="text-center text-[var(--text-muted)]">
            No projects added yet. Check back soon.
          </p>
        ) : (
          <ProjectsList projects={projects} />
        )}
      </div>
    </main>
  );
}