import mongoose, { Schema } from "mongoose";

export interface IProject {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  category: "Web" | "Mobile" | "Other";
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    techStack: { type: [String], default: [] },
    category: {
      type: String,
      enum: ["Web", "Mobile", "Other"],
      default: "Web",
    },
    imageUrl: { type: String },
    liveUrl: { type: String },
    githubUrl: { type: String },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Access models/model directly off the mongoose default export —
// avoids inconsistent named-export destructuring across mongoose versions.
const Project =
  (mongoose.models.Project as mongoose.Model<IProject>) ||
  mongoose.model<IProject>("Project", ProjectSchema);

export default Project;