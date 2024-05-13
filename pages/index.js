import { Container } from "postcss";
import { Image, Row, Col } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import RevealOnScroll from "@/components/RevealScroll";
import RevealRightScroll from "@/components/RevealRightScroll";
import Skills from "@/components/Skills";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div
        id="introSection"
        className="h-dvh m-auto flex justify-center flex-col"
      >
        {/* <RevealOnScroll> */}
        <div className="border rounded">
          <div className="h-4/6 p-5 ">
            <div>
              <h3>Welcome To My Site!</h3>
            </div>
            <div className="grid md:grid-cols-6 grid-cols-1  text-sm lg:text-lg my-5">
              <div className="md:col-start-1 md:col-end-4 col-span-5 content-center">
                <p>
                  I&apos;m a passionate and driven student currently pursuing my
                  third year in the Computer Programmer Analyst Program at
                  Seneca Polytechnic.
                  <br />
                  <br />
                  With a focus on web development, I&apos;ve gained substantial
                  experience in various programming languages and technologies.
                  My skill set encompasses both frontend and backend
                  development, enabling me to create seamless and robust web
                  applications.
                </p>
              </div>
              <div className="md:col-end-7 md:col-span-2 col-span-auto size-5/6 md:size-fit justify-center mx-auto md:mt-0 mt-10 content-center">
                <Image
                  src="/profilePicture.jpeg"
                  rounded
                  fluid
                  alt="AI Generated Profile Picture"
                />
              </div>
            </div>
          </div>
        </div>
        {/* </RevealOnScroll> */}
      </div>
      {/* <div id="backGroundSection" className="h-dvh m-auto flex  flex-col"> */}
      <div className="-mt-55 mb-96">
        {/* <RevealOnScroll>
          <RevealRightScroll> */}
        {/* <Skills /> */}
        <div className="container flex justify-content-end my-3">
          <div className="w-100 md:p-10 py-4 bg-slate-400 ">
            {/* <p>Skills</p>
          <hr /> */}
            <div className="grid grid-cols-5 size-8/12 gap-4 mx-auto ">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" />
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
            </div>
          </div>
        </div>
        {/* </RevealRightScroll> */}
        <div className="container mx-auto border rounded flex flex-col">
          <h3 className="pt-3 pl-2">Projects</h3>
          <div className="grid grid-cols-3 p-2 gap-3">
            <div className="col-span-1 ">
              <Link
                className="no-underline text-black"
                target="blank"
                href={"https://met-collection-app-kap.vercel.app/"}
              >
                <div className="border rounded  p-2 hover:bg-slate-50">
                  <Image className="h-48" src="/metAPIpreview.png" />
                  <p className="text-center pt-2">Metropolitan Museum API</p>
                </div>
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                className="no-underline text-black"
                target="blank"
                href={"https://github.com/trochwerger/OOP-Project"}
              >
                <div className="border rounded  p-2 hover:bg-slate-50">
                  <Image className="h-48" src="/assemblyline.jpg" />
                  <p className="text-center pt-2">Assembly Line Simulation</p>
                </div>
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                className="no-underline text-black"
                target="blank"
                href={"https://github.com/trochwerger/OOP-Project"}
              >
                <div className="border rounded  p-2 hover:bg-slate-50">
                  <Image className="h-48" src="/assemblyline.jpg" />
                  <p className="text-center pt-2">Assembly Line Simulation</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container border rounded">
          <h4 className="">Education</h4>
          <div className="md:mb-20 mb-10 my-20">
            <div className="grid grid-cols-3 mt-10">
              <div className="col-span-1">
                <Image className="size-3/6" src="/seneca-logo.svg" />
              </div>
              <div className="col-span-1">
                <p className="text-sm md:text-base">
                  Advanced Diploma, Computer Programmer Analyst, Seneca
                  Polytechnic
                  <br />
                  2022-2025
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </RevealOnScroll> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
