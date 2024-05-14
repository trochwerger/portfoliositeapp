import { Container } from "postcss";
import { Image, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        id="introSection"
        className="md:h-dvh h-1/2 m-auto flex justify-center flex-col md:pb-0 pb-10"
      >
        <div className="border rounded">
          <div className="p-5">
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
        <div className="invisible md:visible">
          <a
            href="#background-section"
            className="mx-auto mt-5 text-blue no-underline"
            onClick={(e) => {
              e.preventDefault();
              const yOffset = -100; // Adjust this value according to your header's height
              const element = document.querySelector("#background-section");
              const y =
                element.getBoundingClientRect().top + window.scrollY + yOffset;

              window.scrollTo({ top: y, behavior: "smooth" });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </a>
        </div>
      </div>

      <div
        id="background-section"
        className="md:h-dvh h-1/2 m-auto flex justify-center gap-8 flex-col"
      >
        <div className="container mx-auto border rounded flex flex-col">
          <h3 className="pt-3 pl-2">Projects</h3>
          <div className="grid md:grid-cols-3 grid-cols-1 p-2 gap-3">
            <div className="col-span-1 ">
              <Link
                className="no-underline text-black"
                target="blank"
                href={"https://met-collection-app-kap.vercel.app/"}
              >
                <div className="border rounded p-2 hover:bg-slate-50">
                  <Image
                    className="h-48 mx-auto"
                    src="/metAPIpreview.png"
                    alt="MetApp Preview"
                  />
                  <p className="text-center pt-2">Metropolitan Museum API</p>
                </div>
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                className="no-underline text-black"
                target="blank"
                href={"https://github.com/trochwerger/currencyCounter"}
              >
                <div className="border rounded  p-2 hover:bg-slate-50">
                  <Image
                    className="h-48 size mx-auto"
                    src="/currencyCounter.jpg"
                    alt="Currency Counter Preview"
                  />
                  <p className="text-center pt-2">Currency Counter</p>
                </div>
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                className="no-underline text-black"
                target="blank"
                href={"https://github.com/trochwerger/assemblyline/"}
              >
                <div className="border rounded p-2 hover:bg-slate-50">
                  <Image
                    className="h-48 mx-auto"
                    src="/assemblyline.jpg"
                    alt="Assembly Line Preview"
                  />
                  <p className="text-center pt-2">Assembly Line Simulation</p>
                </div>
              </Link>
            </div>
          </div>
          <Link
            href={"https://github.com/trochwerger"}
            target="blank"
            className="flex justify-center p-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
        </div>
        <div className="container border rounded mt-5 grid md:grid-cols-2 grid-cols-1 pb-10 md:pb-0">
          <div className="col-span-1 pl-2">
            <h4 className="pt-4">Education</h4>
            <div className="md:mb-20 mb-10 my-20">
              <div className="grid grid-cols-3 mt-10">
                <div className="col-span-1">
                  <Image
                    className="size-3/6"
                    src="/seneca-logo.svg"
                    alt="Seneca Logo"
                  />
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
          <div className="col-span-1 my-auto bg-slate-400 h-full">
            <div className="container flex">
              <div className="w-100 p-10">
                <div className="grid md:grid-cols-5  grid-cols-3 size-8/12 gap-4 mx-auto ">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                    alt="Skills Icon"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    alt="Skills Icon"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                    alt="Skills Icon"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                    alt="Skills Icon"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg"
                    alt="Skills Icon"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                    alt="Skills Icon"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                    alt="Skills Icon"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                    alt="Skills Icon"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                    alt="Skills Icon"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                    alt="Skills Icon"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    alt="Skills Icon"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="Skills Icon"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                    alt="Skills Icon"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                    alt="Skills Icon"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                    alt="Skills Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
