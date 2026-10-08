import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: String,
  title: String,
  affiliation: String,
  tagline: String,
  about: [String],
  skills: [String],
  stats: [{ value: String, label: String, _id: false }],
  experience: [{ role: String, org: String, period: String, points: [String], _id: false }],
  education: [{ degree: String, school: String, period: String, _id: false }],
  links: { email: String, github: String, linkedin: String, researchgate: String }
});

export const Profile = mongoose.models.Profile || mongoose.model("Profile", profileSchema);
