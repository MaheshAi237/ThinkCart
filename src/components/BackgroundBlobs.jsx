import React, { useEffect, useRef } from "react";

// Purely decorative: slow floating blobs, scoped to whatever
// `position: relative; overflow: hidden` section renders this (e.g. a
// hero), with a subtle scroll-linked drift. Uses the standalone
// `translate` CSS property (not `transform`) so it never fights the
// blobs' own float keyframes.
const BackgroundBlobs = ({ colors = ["#64B5F6", "#2EC4B6", "#7B7FE8"] }) => {
  const ref = useRef(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (ref.current) {
        ref.current.style.translate = `0 ${window.scrollY * 0.06}px`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-blobs" ref={ref} aria-hidden="true">
      <div className="bg-blob bg-blob-1" style={{ background: colors[0] }} />
      <div className="bg-blob bg-blob-2" style={{ background: colors[1] }} />
      <div className="bg-blob bg-blob-3" style={{ background: colors[2] }} />
    </div>
  );
};

export default BackgroundBlobs;
