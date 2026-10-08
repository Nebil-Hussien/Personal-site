import { useMemo, useState } from "react";
import Gallery from "./Gallery.jsx";
import { getMedia } from "../gallery.js";

const FILTERS = [["all", "All"], ["software", "Software"], ["research", "Research"]];
const LINK_LABELS = { code: "Code", demo: "Live demo", paper: "Paper" };
const MAX_TAGS = 4;

function Card({ work, onOpen }) {
  const media = getMedia(work);
  const hasVideo = media.some((m) => m.kind !== "image");
  const cover = media.find((m) => m.kind === "image");
  const label = hasVideo ? (cover ? "Demo & gallery" : "Demo video") : "Gallery";
  const links = Object.entries(work.links || {}).filter(([, url]) => url);
  const extra = work.tags.length - MAX_TAGS;
  return (
    <article className={`card ${work.type}`}>
      {media.length > 0 && (
        <button className={`thumb${cover ? "" : " no-cover"}`} onClick={() => onOpen(work, media)} aria-label={`Open ${work.title} ${label.toLowerCase()}`}>
          {cover && <img src={cover.url} alt="" loading="lazy" />}
          {hasVideo && <span className="play" aria-hidden="true">▶</span>}
          <span className="thumb-hint">{hasVideo ? "Watch demo" : "View gallery"} · {media.length}</span>
        </button>
      )}
      <div className="card-top">
        <span className={`badge ${work.type}`}>{work.type}</span>
        {work.featured && <span className="star" title="Featured">★</span>}
      </div>
      <h3>{work.title}</h3>
      <p>{work.description}</p>
      <ul className="tags">
        {work.tags.slice(0, MAX_TAGS).map((t) => <li key={t}>{t}</li>)}
        {extra > 0 && <li className="more">+{extra}</li>}
      </ul>
      {(links.length > 0 || media.length > 0) && (
        <div className="card-links">
          {media.length > 0 && (
            <button className="link-btn" onClick={() => onOpen(work, media)}>{label} ({media.length})</button>
          )}
          {links.map(([k, url]) => (
            <a key={k} href={url} target="_blank" rel="noopener noreferrer">{LINK_LABELS[k] || k} ↗</a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function WorkGrid({ works }) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState(null);

  const counts = useMemo(() => ({
    all: works.length,
    software: works.filter((w) => w.type === "software").length,
    research: works.filter((w) => w.type === "research").length
  }), [works]);

  const q = query.trim().toLowerCase();
  const matching = works.filter((w) =>
    (filter === "all" || w.type === filter) &&
    (!q || `${w.title} ${w.description} ${w.tags.join(" ")}`.toLowerCase().includes(q))
  );
  // Featured-first view unless the visitor is searching or expanded the list.
  const curated = !showAll && !q;
  const shown = curated ? matching.filter((w) => w.featured) : matching;
  const hidden = matching.length - shown.length;

  return (
    <>
      <div className="toolbar">
        <div className="filters" role="tablist">
          {FILTERS.map(([key, label]) => (
            <button key={key} className={`chip${filter === key ? " active" : ""}`} onClick={() => setFilter(key)}>
              {label} <span className="count">{counts[key]}</span>
            </button>
          ))}
        </div>
        <input
          className="search"
          type="search"
          placeholder="Search projects, tags…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search projects"
        />
      </div>

      {shown.length === 0 ? (
        <p className="empty">No projects match “{query}”.</p>
      ) : (
        <div className="grid">{shown.map((w) => <Card key={w._id ?? w.title} work={w} onOpen={(work, media) => setOpen({ work, media })} />)}</div>
      )}

      {(hidden > 0 || (showAll && !q)) && (
        <div className="more-wrap">
          <button className="btn" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Show featured only" : `Show all projects (+${hidden})`}
          </button>
        </div>
      )}

      {open && <Gallery work={open.work} media={open.media} onClose={() => setOpen(null)} />}
    </>
  );
}
