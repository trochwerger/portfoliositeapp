import React, { useEffect, useRef } from "react";

export default function RevealScroll(props) {
  const { children } = props;
  const domRef = useRef();

  useEffect(() => {
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
        rootMargin: "0px",
        threshold: 0.5,
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
        rootMargin: "0px",
        threshold: 0.8,
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
