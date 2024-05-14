// import React, { useEffect, useRef } from "react";

// export default function RevealScrollRight(props) {
//   const { children } = props;
//   const domRef = useRef();

//   useEffect(() => {
//     const element = domRef.current;

//     const startRevealRight = (event) => {
//       if (event.animationName === "fadeIn") {
//         element.classList.remove("animate-fadeInRight");
//         element.classList.add("animate-fadeInRight");
//       }
//       if (event.animationName === "fadeOut") {
//         element.classList.remove("animate-fadeInRight");
//         element.classList.add("animate-fadeOutRight");
//       }
//     };

//     element.classList.add("animate-fadeIn");
//     element.addEventListener("animationend", startRevealRight, false);

//     return () => {
//       element.removeEventListener("animationend", startRevealRight);
//     };
//   }, []);

//   return <div ref={domRef}>{children}</div>;
// }
