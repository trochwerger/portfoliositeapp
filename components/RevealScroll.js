import React, { useEffect, useRef } from "react";

export default function RevealScroll(props) {
  const { children } = props;
  const domRef = useRef();

  useEffect(() => {
    const viewportWidth = window.innerWidth;
    const fadeInThreshold = 0.5;
    const fadeOutThreshold = 0.9;
    // const fadeInThreshold = viewportWidth < 600 ? 0.8 : 0.5;
    // const fadeOutThreshold = viewportWidth < 600 ? 1 : 0.8;

    const fadeInObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            entry.target.classList.remove("animate-fadeOut");
          }
        });
      },
      {
        rootMargin: "-50px",
        threshold: fadeInThreshold,
      }
    );

    const fadeOutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.classList.remove("animate-fadeIn");
            entry.target.classList.add("animate-fadeOut");
          }
        });
      },
      {
        rootMargin: "-50px",
        threshold: fadeOutThreshold,
      }
    );

    fadeInObserver.observe(domRef.current);
    fadeOutObserver.observe(domRef.current);
    return () => {
      fadeInObserver.unobserve(domRef.current);
      fadeOutObserver.unobserve(domRef.current);
    };
  }, []);

  return <div ref={domRef}>{children}</div>;
}
