import {
  Trophy,
  Code2,
  Users,
  Coffee,
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  Download,
} from "lucide-react";

const STATS = [
  { icon: Trophy, value: "2+", label: "Years Coding" },
  { icon: Code2, value: "10+", label: "Projects Built" },
  { icon: Users, value: "3+", label: "Clients" },
  { icon: Coffee, value: "∞", label: "Coffee Cups" },
];
const TECH_STACK = [
  { icon: "🟨", name: "JavaScript" },
  { icon: "🔷", name: "TypeScript" },
  { icon: "⚛️", name: "React / Next.js" },
  { icon: "📱", name: "React Native" },
  { icon: "🟢", name: "Node.js / Express" },
  { icon: "🐘", name: "PHP" },
  { icon: "🍃", name: "MongoDB" },
  { icon: "🐬", name: "MySQL" },
  { icon: "🎨", name: "Tailwind CSS" },
  { icon: "🌐", name: "HTML5 / CSS3" },
  { icon: "🐙", name: "Git / GitHub" },
  { icon: "🟣", name: "PostgreSQL" },

];

// Fill these in with your real experience — placeholders for now
const EXPERIENCE = [
  {
    period: "2025",
    role: "Freelance Software Developer",
    company: "USSD Voucher Platform — Client Project",
    points: [
      "Built a USSD-based platform for selling result-checker vouchers across Ghana.",
      "Integrated USSD gateway APIs and an admin dashboard for voucher management.",
      "Deployed and handed off with documentation for ongoing client use.",
    ],
  },
  {
    period: "2025",
    role: "Full-Stack Developer",
    company: "DicesHub — Personal Project",
    points: [
      "Built a full-stack MERN e-commerce platform for t-shirts.",
      "Implemented product catalog, cart, and checkout flow end to end.",
      "Handled both frontend UI and backend API design.",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-mono text-5xl font-bold mb-12 text-center" style={{ color: "var(--text)" }}>
          About Me
        </h1>

        {/* HERO ROW */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div
              className="border-l-4 pl-5 space-y-4 text-lg leading-relaxed text-[var(--text-muted)]"
              style={{ borderColor: "#E8A33D" }}
            >
              <p>
                I&apos;m a full-stack developer based in Ghana-Kumasi,
                building modern web applications with Next.js, TypeScript,
                and MongoDB — always with a focus on clean code and
                practical solutions.
              </p>
              <p>
                I&apos;m currently a Computer Science student at Kumasi
                Technical University. Outside of code, I trade forex —
                the same pattern-recognition instinct that helps me
                debug, helps me read charts.
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="/contact"
                className="cursor-hover-target flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "#E8A33D", color: "#0B1220" }}
              >
                Get in Touch <span aria-hidden>→</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-hover-target flex items-center gap-2 rounded-full px-6 py-3 font-semibold border transition-colors hover:border-[#E8A33D]"
                style={{ borderColor: "#E8A33D", color: "var(--text)" }}
              >
                Resume <Download size={16} />
              </a>
            </div>
          </div>

          {/* PROFILE IMAGE — replace src with your real photo */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl rotate-3"
              style={{ backgroundColor: "#E8A33D", opacity: 0.15 }}
            />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] bg-[#121B2E] flex items-center justify-center">
              <img src="/profile.jpg" alt="Fred" className="w-full h-full object-cover" />
              <span className="text-[var(--text-muted)] text-sm">
              
              </span>
            </div>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-[#121B2E]/60 p-5"
            >
              <Icon size={20} color="#E8A33D" className="mb-2" />
              <p className="font-mono text-2xl font-bold" style={{ color: "var(--text)" }}>
                {value}
              </p>
              <p className="text-sm text-[var(--text-muted)]">{label}</p>
            </div>
          ))}
        </div>

        {/* EXPERIENCE + TECH STACK */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* EXPERIENCE TIMELINE */}
          <div>
            <h2 className="flex items-center gap-3 font-mono text-2xl font-bold mb-8" style={{ color: "var(--text)" }}>
              <Briefcase size={22} color="#E8A33D" />
              Experience
            </h2>

            <div className="space-y-10">
              {EXPERIENCE.map((job, i) => (
                <div
                  key={i}
                  className="relative pl-6 border-l-2"
                  style={{ borderColor: "#E8A33D" }}
                >
                  <span
                    className="absolute -left-[7px] top-1 w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#E8A33D" }}
                  />
                  <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-1">
                    <Calendar size={14} />
                    {job.period}
                  </div>
                  <h3 className="font-mono font-bold text-lg" style={{ color: "var(--text)" }}>
                    {job.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-3">
                    <Building2 size={14} />
                    {job.company}
                  </div>
                  <ul className="space-y-1.5">
                    {job.points.map((point, j) => (
                      <li key={j} className="text-sm text-[var(--text-muted)] flex gap-2">
                        <span style={{ color: "#E8A33D" }}>•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* TECH STACK */}
          <div>
            <h2 className="flex items-center gap-3 font-mono text-2xl font-bold mb-8" style={{ color: "var(--text)" }}>
              <Code2 size={22} color="#E8A33D" />
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {TECH_STACK.map(({ icon, name }) => (
                <div
                  key={name}
                  className="cursor-hover-target flex items-center gap-3 rounded-xl border border-white/10 bg-[#121B2E]/60 px-4 py-3 transition-colors hover:border-[#E8A33D]"
                >
                  <span className="text-lg">{icon}</span>
                  <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div>
          <h2 className="flex items-center gap-3 font-mono text-2xl font-bold mb-8" style={{ color: "var(--text)" }}>
            <GraduationCap size={22} color="#E8A33D" />
            Education
          </h2>
          <div className="rounded-xl border border-white/10 bg-[#121B2E]/60 p-6 max-w-md">
            <div className="flex items-center gap-2 text-sm mb-2" style={{ color: "#E8A33D" }}>
              <GraduationCap size={16} />
              Education
            </div>
            <h3 className="font-mono font-bold text-lg mb-1" style={{ color: "var(--text)" }}>
              BSc in Computer Science
            </h3>
            <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
              <span>Kumasi Technical University</span>
              <span>2024 - 2027</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}