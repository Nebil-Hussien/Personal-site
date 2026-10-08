// Auto-discovers media in src/projects/<slug>/*. No config needed: just drop files in.
const files = import.meta.glob("./projects/*/*.{png,jpg,jpeg,webp,gif,svg,avif,mp4,webm}", {
  eager: true,
  query: "?url",
  import: "default"
});

const VIDEO_EXT = /\.(mp4|webm)$/i;

const caption = (name) =>
  name
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+[-_. ]*/, "")
    .replace(/[-_]+/g, " ")
    .replace(/^./, (c) => c.toUpperCase());

const bySlug = {};
for (const [path, url] of Object.entries(files)) {
  const [, slug, name] = path.match(/\.\/projects\/([^/]+)\/([^/]+)$/);
  (bySlug[slug] ??= []).push({
    kind: VIDEO_EXT.test(name) ? "video" : "image",
    name,
    url,
    caption: caption(name)
  });
}
for (const list of Object.values(bySlug)) {
  list.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
}

// Turn a YouTube / Vimeo / Loom link into an embeddable URL. Anything else is ignored.
export function toEmbedUrl(raw) {
  try {
    const u = new URL(raw);
    const host = u.hostname.replace(/^www\./, "");
    let id;
    if (host === "youtu.be") id = u.pathname.slice(1);
    else if (host === "youtube.com" || host === "m.youtube.com") {
      id = u.searchParams.get("v") || u.pathname.match(/^\/(?:embed|shorts)\/([\w-]+)/)?.[1];
    }
    if (id && /^[\w-]{6,}$/.test(id)) return `https://www.youtube-nocookie.com/embed/${id}`;
    if (host === "vimeo.com") {
      id = u.pathname.match(/^\/(\d+)/)?.[1];
      if (id) return `https://player.vimeo.com/video/${id}`;
    }
    if (host === "loom.com") {
      id = u.pathname.match(/^\/(?:share|embed)\/([\w]+)/)?.[1];
      if (id) return `https://www.loom.com/embed/${id}`;
    }
  } catch { /* not a URL */ }
  return null;
}

// Slides for a work: external demo video, then local videos, then images.
export function getMedia(work) {
  const local = bySlug[work.slug] ?? [];
  const embed = work.video ? toEmbedUrl(work.video) : null;
  return [
    ...(embed ? [{ kind: "embed", url: embed, caption: "Demo video" }] : []),
    ...local.filter((m) => m.kind === "video"),
    ...local.filter((m) => m.kind === "image")
  ];
}
