import { useCallback, useEffect, useRef, useState } from "react";

const LINK_LABELS = { code: "Code", demo: "Live demo", paper: "Paper" };

export default function Gallery({ work, media, onClose }) {
  const [i, setI] = useState(0);
  const closeRef = useRef(null);
  const n = media.length;
  const go = useCallback((d) => setI((v) => (v + d + n) % n), [n]);

  useEffect(() => {
    const opener = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      opener?.focus?.();
    };
  }, [go, onClose]);

  const links = Object.entries(work.links || {}).filter(([, url]) => url);
  const slide = media[i];

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={`${work.title} media`}>
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close gallery">×</button>

        <div className="stage">
          {slide.kind === "image" && <img key={slide.url} src={slide.url} alt={slide.caption} />}
          {slide.kind === "video" && (
            <video key={slide.url} src={slide.url} controls playsInline preload="metadata" />
          )}
          {slide.kind === "embed" && (
            <iframe
              key={slide.url}
              src={slide.url}
              title={`${work.title} demo video`}
              allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
            />
          )}
          {n > 1 && (
            <>
              <button className="nav-btn prev" onClick={() => go(-1)} aria-label="Previous image">‹</button>
              <button className="nav-btn next" onClick={() => go(1)} aria-label="Next image">›</button>
            </>
          )}
        </div>

        <div className="modal-body">
          <div className="modal-meta">
            <span className={`badge ${work.type}`}>{work.type}</span>
            <h3>{work.title}</h3>
            <p className="caption">{slide.caption} <span>({i + 1}/{n})</span></p>
          </div>
          {n > 1 && (
            <div className="thumbs">
              {media.map((t, idx) => (
                <button key={t.url} className={idx === i ? "on" : ""} onClick={() => setI(idx)} aria-label={`Show ${t.kind === "image" ? "image" : "video"} ${idx + 1}`}>
                  {t.kind === "image" ? <img src={t.url} alt="" loading="lazy" /> : <span className="thumb-play">▶</span>}
                </button>
              ))}
            </div>
          )}
          <p className="modal-desc">{work.description}</p>
          {links.length > 0 && (
            <div className="card-links">
              {links.map(([k, url]) => (
                <a key={k} href={url} target="_blank" rel="noopener noreferrer">{LINK_LABELS[k] || k} ↗</a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
