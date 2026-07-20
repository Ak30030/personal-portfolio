import mongoose from "mongoose";
import * as dotenv from "dotenv";
import Project from "../models/Project";

dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

const sampleProjects = [
  {
    title: "DicesHub",
    slug: "diceshub",
    description:
      "A full-stack t-shirt e-commerce platform. React + Vite frontend on Vercel, Node.js/Express + MongoDB backend on Render, with Firebase auth, Paystack mobile money checkout, guest cart, and a full admin panel.",
    techStack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Firebase", "Paystack"],
    category: "Web",
    githubUrl: "https://github.com/Ak30030/diceshub",
    liveUrl: "https://diceshub.vercel.app",
    featured: true,
  },
  {
    title: "USSD Voucher Platform",
    slug: "ussd-voucher-platform",
    description:
      "A client USSD platform for selling WAEC/BECE result checker vouchers across Ghana. Integrates with NALO Solutions for live USSD/SMS, with CSV voucher upload and live price management via a React admin panel.",
    techStack: ["Node.js", "Express", "MongoDB", "React", "NALO Solutions API"],
    category: "Other",
    githubUrl: "",
    liveUrl: "https://enshalombusiness.vercel.app",
    featured: true,
  },
  {
    title: "This Portfolio",
    slug: "portfolio-site",
    description:
      "My personal portfolio — built with Next.js App Router, TypeScript, and MongoDB, with a custom-designed dark theme, interactive cursor, and letter-hover animations.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "daisyUI"],
    category: "Web",
    githubUrl: "https://github.com/Ak30030/portfolio",
    liveUrl: "",
    featured: false,
  },
];

async function seed() {
  if (!MONGODB_URI) {
    console.error("MONGODB_URI is not set in .env.local — aborting seed.");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB.");

    for (const project of sampleProjects) {
      await Project.findOneAndUpdate(
        { slug: project.slug },
        project,
        { upsert: true, returnDocument: "after" }
      );
      console.log(`Seeded: ${project.title}`);
    }

    console.log("Seeding complete.");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();