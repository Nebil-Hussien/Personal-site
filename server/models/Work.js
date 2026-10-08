import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
  type: { type: String, enum: ["software", "research"], required: true },
  slug: { type: String, default: "" },
  video: { type: String, default: "" },
  featured: { type: Boolean, default: false },
  title: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  tags: { type: [String], default: [] },
  links: {
    code: { type: String, default: "" },
    demo: { type: String, default: "" },
    paper: { type: String, default: "" }
  },
  order: { type: Number, default: 0 }
});

export const Work = mongoose.models.Work || mongoose.model("Work", workSchema);
