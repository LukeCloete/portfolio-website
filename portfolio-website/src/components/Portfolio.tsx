import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import landingPagePic from "../../public/product-landing-page-project.webp";
import hangmanGamePic from "../../public/hangman-java-game-project.gif";

export default function Portfolio() {
  const [isHoveringCode, setIsHoveringCode] = useState(false);
  const [isHoveringDemo, setIsHoveringDemo] = useState(false);
  return (
    <>
      <section id="portfolio" className="w-full h-fit bg-slate-100 ">
        {/* Container */}
        <div className="flex flex-col h-full w-full md:w-[70%] mx-auto p-4 py-20 pb-0 sm:pb-20 justify-start items-start ">
          <div className="flex w-[90%] mx-auto flex-col justify-start items-start gap-4 mb-16">
            <h2>Portfolio</h2>
            <div className="flex flex-col-reverse md:flex-row items-center justify-start gap-2">
              <h3 className="font-bold flex text-2xl w-full items-end">
                Projects I&apos;ve worked on
              </h3>
              <span className=" animate-wrench text-2xl">🔧</span>
            </div>
          </div>
          {/* Project grid */}
          <div className="w-full h-fit grid gap-16 grid-cols-1 grid-rows-2">
            {/* Project */}
            <div className="flex flex-col lg:flex-row  rounded-lg shadow-ring h-[130vh] lg:h-[75vh] w-full items-center bg-white justify-between gap-4 p-4">
              <div className=" w-full md:w-3/5 h-full relative overflow-hidden border shadow-ring rounded-2xl">
                <Link href="https://lukecloete.github.io/Product-Landing-Page/">
                  <Image
                    src={landingPagePic}
                    alt="Product Landing Page"
                    placeholder="blur"
                    className=" transition ease-in-out translate-y-[-50px] hover:translate-y-[-73%] duration-10s"
                  />
                </Link>
              </div>

              {/* Text */}
              <div className="flex flex-col w-fit md:w-2/5 h-full items-center text-lg justify-center gap-4 md:p-4">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <h3 className="font-semibold tracking-wide">
                    Apple Vision Series
                  </h3>
                  <span className="text-sm text-slate-500">April 2023</span>
                </div>
                <p className="text-slate-500 text-center mb-4">
                  Fully responsive concept product landing page created with
                  html and vanilla css. Built as part of the certification
                  projects for
                  <br />
                  <Link
                    className="text-blue-300 hover:text-blue-500"
                    href="https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-product-landing-page-project/build-a-product-landing-page"
                    target="blank_"
                    rel="noopener noreferrer"
                  >
                    freeCodeCamp.org.
                  </Link>
                </p>
                {/* Tech used */}
                <div className="flex gap-4 mb-8 font-sans font-semibold">
                  <div className="p-2 shadow-ring">HTML5</div>
                  <div className="p-2 shadow-ring">CSS3</div>
                  <div className="p-2 shadow-ring">JS</div>
                </div>
                {/* links */}
                <div className="flex gap-3 sm:gap-6 ">
                  <Link
                    href="https://lukecloete.github.io/Product-Landing-Page/"
                    target="blank_"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center justify-center hover:text-blue-500"
                    onMouseEnter={() => setIsHoveringDemo(true)}
                    onMouseLeave={() => setIsHoveringDemo(false)}
                  >
                    Live Demo
                    {isHoveringDemo ? (
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-blue-500 transition-colors delay-100 text-base "
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-black  text-base "
                      />
                    )}
                  </Link>
                  <Link
                    href="https://github.com/LukeCloete/Product-Landing-Page"
                    target="blank_"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center justify-center hover:text-blue-500"
                    onMouseEnter={() => setIsHoveringCode(true)}
                    onMouseLeave={() => setIsHoveringCode(false)}
                  >
                    View Code
                    {isHoveringCode ? (
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-blue-500 transition-colors delay-100 text-base"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-black text-base"
                      />
                    )}
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse rounded-lg shadow-ring h-[80vh] sm:h-[120vh] lg:h-[60vh] w-full items-center bg-white justify-between gap-4 p-4">
              <div className=" w-full md:w-3/5 h-fit relative overflow-hidden border shadow-ring rounded-2xl">
                <Link
                  href="https://github.com/LukeCloete/Java-hangman-game"
                  target="blank_"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={hangmanGamePic}
                    alt="Product Landing Page"
                    className=""
                  />
                </Link>
              </div>

              {/* Text */}
              <div className="flex flex-col w-full md:w-2/5 h-full items-center text-lg justify-center gap-4 md:p-4">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <h3 className="font-semibold tracking-wide">Hangman</h3>
                  <span className="text-sm text-slate-500">July 2023</span>
                </div>
                <p className="text-slate-500 text-center mb-4">
                  A simple implementation of the Hangman game showcasing some
                  Java fundamentals.
                </p>
                {/* Tech used */}
                <div className="flex gap-4 mb-8 font-sans font-semibold">
                  <div className="p-2 shadow-ring">Java</div>
                </div>
                {/* links */}
                <div className="flex">
                  <Link
                    href="https://github.com/LukeCloete/Java-hangman-game"
                    target="blank_"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center justify-center hover:text-blue-500"
                    onMouseEnter={() => setIsHoveringCode(true)}
                    onMouseLeave={() => setIsHoveringCode(false)}
                  >
                    View Code
                    {isHoveringCode ? (
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-blue-500 transition-colors delay-100 text-lg"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-black text-lg"
                      />
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="https://github.com/LukeCloete"
            target="blank_"
            rel="noopener noreferrer"
            className="mx-auto"
          >
            <div className="text-base -mt-40 sm:-mt-0 p-2 transition font-semibold ease-in-out duration-300 rounded-md bg-black text-white hover:bg-transparent hover:text-black hover:border hover:border-black">
              View all projects on Github
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
