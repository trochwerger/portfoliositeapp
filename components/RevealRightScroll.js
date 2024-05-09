import React, { useEffect, useRef } from "react";

export default function RevealScroll(props) {
  const { children } = props;
  const domRef = useRef();

  useEffect(() => {
    const fadeInObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInRight");
            entry.target.classList.remove("animate-fadeOutRight");
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const fadeOutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.classList.remove("animate-fadeInRight");
            entry.target.classList.add("animate-fadeOutRight");
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
