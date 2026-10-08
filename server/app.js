import express from "express";
import { connect } from "./db.js";
import { Work } from "./models/Work.js";
import { Profile } from "./models/Profile.js";
import { profile as sampleProfile, works as sampleWorks } from "./seedData.js";

const app = express();
app.use(express.json());

const requireAdmin = (req, res, next) => {
  const key = process.env.ADMIN_KEY;
  if (!key || req.get("x-admin-key") !== key) return res.status(401).json({ error: "Unauthorized" });
  next();
};
const needsDb = async (req, res, next) => {
  if (!(await connect())) return res.status(503).json({ error: "MONGODB_URI is not configured" });
  next();
};

// Public reads. Fall back to sample data when no database is configured.
app.get("/api/profile", async (req, res, next) => {
  try {
    if (!(await connect())) return res.json(sampleProfile);
    res.json((await Profile.findOne().lean()) ?? sampleProfile);
  } catch (e) { next(e); }
});

app.get("/api/works", async (req, res, next) => {
  try {
    if (!(await connect())) return res.json(sampleWorks);
    res.json(await Work.find().sort({ order: 1, _id: 1 }).lean());
  } catch (e) { next(e); }
});

// Admin writes (send header: x-admin-key: <ADMIN_KEY>)
app.post("/api/works", requireAdmin, needsDb, async (req, res, next) => {
  try { res.status(201).json(await Work.create(req.body)); } catch (e) { next(e); }
});
app.put("/api/works/:id", requireAdmin, needsDb, async (req, res, next) => {
  try {
    const w = await Work.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    w ? res.json(w) : res.status(404).json({ error: "Not found" });
  } catch (e) { next(e); }
});
app.delete("/api/works/:id", requireAdmin, needsDb, async (req, res, next) => {
  try {
    const w = await Work.findByIdAndDelete(req.params.id);
    w ? res.json({ ok: true }) : res.status(404).json({ error: "Not found" });
  } catch (e) { next(e); }
});
app.put("/api/profile", requireAdmin, needsDb, async (req, res, next) => {
  try { res.json(await Profile.findOneAndUpdate({}, req.body, { new: true, upsert: true })); } catch (e) { next(e); }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.name === "ValidationError" ? 400 : 500).json({ error: err.message });
});

export default app;
