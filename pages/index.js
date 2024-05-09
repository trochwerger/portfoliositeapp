import { Container } from "postcss";
import { Image, Row, Col } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import RevealOnScroll from "@/components/RevealScroll";
import RevealRightScroll from "@/components/RevealRightScroll";
// const RevealOnScroll = (props) => {
//   const { children } = props;
//   const domRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate-fadeIn");
//           entry.target.classList.remove("animate-fadeOut");
//         } else {
//           entry.target.classList.remove("animate-fadeIn");
//           entry.target.classList.add("animate-fadeOut");
//         }
//       });
//     });

//     observer.observe(domRef.current);
//     return () => observer.unobserve(domRef.current);
//   }, []);

//   return <div ref={domRef}>{children}</div>;
// };

export default function Home() {
  return (
    <>
      <div
        id="introSection"
        className="h-screen m-auto flex justify-center flex-col"
      >
        <RevealOnScroll>
          <div className="h-4/6 p-5">
            <div>
              <h3>Welcome To My Site!</h3>
            </div>
            <div className="grid md:grid-cols-6 grid-cols-1  text-sm lg:text-lg my-5">
              <div className="md:col-start-1 md:col-end-4 col-span-5 content-center">
                <p>
                  I'm a passionate and driven student currently pursuing my
                  third year in the Computer Programmer Analyst Program at
                  Seneca Polytechnic.
                  <br />
                  <br />
                  With a focus on web development, I've gained substantial
                  experience in various programming languages and technologies.
                  My skill set encompasses both frontend and backend
                  development, enabling me to create seamless and robust web
                  applications.
                </p>
              </div>
              <div className="md:col-end-7 md:col-span-2 col-span-auto size-5/6 md:size-fit justify-center mx-auto md:mt-0 mt-10 content-center">
                <RevealOnScroll>
                  <Image
                    src="/profilePicture.jpeg"
                    rounded
                    fluid
                    alt="AI Generated Profile Picture"
                  />
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
      {/* <div id="backGroundSection" className="h-dvh m-auto flex  flex-col"> */}
      <div className="-mt-10 mb-96">
        <RevealOnScroll>
          <div className="container mx-auto">
            <div className="w-50">
              <h4>Education</h4>
              <hr />
              <p>
                Advanced Diploma, Computer Programmer Analyst, Seneca
                Polytechnic
                <br />
                2022-2025
              </p>
            </div>
          </div>
          <RevealRightScroll>
            <div className="container flex justify-content-end my-3">
              <div className="w-100 p-5 md:p-10">
                {/* <p>Skills</p>
          <hr /> */}
                <div className="grid grid-cols-5 size-8/12 gap-4 mx-auto ">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                </div>
              </div>
            </div>
          </RevealRightScroll>
        </RevealOnScroll>
      </div>
    </>
  );
}
