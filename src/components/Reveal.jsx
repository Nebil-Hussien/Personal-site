import { useEffect, useRef, useState } from "react";

// Fades children in once they scroll into view. Falls back to visible without IntersectionObserver.
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(typeof IntersectionObserver === "undefined");

  useEffect(() => {
    if (seen || !ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.08 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);

  return <Tag ref={ref} className={`reveal${seen ? " in" : ""} ${className}`} {...rest}>{children}</Tag>;
}
