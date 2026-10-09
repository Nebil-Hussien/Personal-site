import { useEffect, useState } from "react";
import WorkGrid from "./components/WorkGrid.jsx";
import Timeline from "./components/Timeline.jsx";
import Reveal from "./components/Reveal.jsx";

const LINKS = [
  ["github", "GitHub"],
  ["linkedin", "LinkedIn"],
  ["researchgate", "ResearchGate"]
];

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { const t = localStorage.getItem("theme"); if (t) return t; } catch {}
    return "dark";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

const initials = (name) => name.split(" ").map((p) => p[0]).slice(0, 2).join("");

export default function App() {
  const [profile, setProfile] = useState(null);
  const [works, setWorks] = useState([]);
  const [error, setError] = useState("");
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    Promise.all([
      fetch("/api/profile").then((r) => r.ok ? r.json() : Promise.reject(r.statusText)),
      fetch("/api/works").then((r) => r.ok ? r.json() : Promise.reject(r.statusText))
    ])
      .then(([p, w]) => { setProfile(p); setWorks(w); document.title = `${p.name} — Portfolio`; })
      .catch(() => setError("Could not load content. Is the API running?"));
  }, []);

  if (error) return <p className="status">{error}</p>;
  if (!profile) return <p className="status">Loading…</p>;

  return (
    <>
      <header className="nav">
        <a href="#top" className="brand"><span className="logo">{initials(profile.name)}</span>{profile.name}</a>
        <nav>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleTheme} aria-label="Toggle dark mode">{theme === "dark" ? "☀" : "☾"}</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="glow" aria-hidden="true" />
          <p className="eyebrow">{profile.affiliation}</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.title}</p>
          <p className="tagline">{profile.tagline}</p>
          <div className="cta">
            <a className="btn primary" href="#work">View my work</a>
            <a className="btn" href="#contact">Get in touch</a>
          </div>
          {profile.stats?.length > 0 && (
            <dl className="stats">
              {profile.stats.map((s) => (
                <div key={s.label}><dt>{s.value}</dt><dd>{s.label}</dd></div>
              ))}
            </dl>
          )}
        </section>

        <Reveal as="section" id="work">
          <h2>Selected work</h2>
          <WorkGrid works={works} />
          <p className="code-note">
            <strong>Source code access:</strong> The code for my business and client projects is private and not publicly available.
            Read-only collaborator access can be provided on request{profile.links.email && <> — <a href={`mailto:${profile.links.email}?subject=Code access request`}>email me</a></>}.
          </p>
        </Reveal>

        <Reveal as="section" id="experience">
          <h2>Experience</h2>
          <Timeline experience={profile.experience} education={profile.education} />
        </Reveal>

        <Reveal as="section" id="about">
          <h2>About</h2>
          <div className="about-text">{profile.about.map((p, i) => <p key={i}>{p}</p>)}</div>
          <ul className="skills">{profile.skills.map((s) => <li key={s}>{s}</li>)}</ul>
        </Reveal>

        <Reveal as="section" id="contact" className="contact">
          <h2>Let’s talk</h2>
          <p>Open to research collaborations and software roles. The best way to reach me is by email.</p>
          <div className="links">
            {profile.links.email && <a className="btn primary" href={`mailto:${profile.links.email}`}>Email me</a>}
            {LINKS.filter(([k]) => profile.links[k]).map(([k, label]) => (
              <a key={k} className="btn" href={profile.links[k]} target="_blank" rel="noopener noreferrer">{label}</a>
            ))}
          </div>
        </Reveal>
      </main>

      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
