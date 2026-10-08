import mongoose from "mongoose";
import { Work } from "../server/models/Work.js";
import { Profile } from "../server/models/Profile.js";
import { profile, works } from "../server/seedData.js";

if (!process.env.MONGODB_URI) throw new Error("Set MONGODB_URI in .env first");
await mongoose.connect(process.env.MONGODB_URI);
await Work.deleteMany({});
await Profile.deleteMany({});
await Work.insertMany(works);
await Profile.create(profile);
console.log(`Seeded ${works.length} works and 1 profile.`);
await mongoose.disconnect();
