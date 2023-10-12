import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const [isHoveringCode, setIsHoveringCode] = useState(false);
  const [isHoveringDemo, setIsHoveringDemo] = useState(false);
  return (
    <>
      <section id="portfolio" className="w-full h-[150vh] bg-slate-100 ">
        {/* Container */}
        <div className="flex flex-col h-full w-[70%] mx-auto p-4 py-24 justify-start items-start ">
          <div className="flex flex-col justify-start items-start gap-4 mb-16">
            <h2>Portfolio</h2>
            <div className="flex items-center justify-start gap-2">
              <h3 className="font-bold flex text-2xl w-full items-end">
                See what I&apos;m working on
              </h3>
              <p className=" animate-wrench inline-block text-2xl">🔧</p>
            </div>
          </div>
          {/* Project grid */}
          <div className="w-full h-2/3 grid grid-cols-1 grid-rows-2">
            <div className="flex rounded-lg shadow-ring h-[30vh] w-full items-center justify-center gap-8">
              <div className="w-1/2 h-full border">Image</div>
              {/* Text */}
              <div className="flex flex-col w-1/2 h-full border items-center justify-center">
                <h3>Product Landing Page</h3>
                <p>This product landing page project kau</p>
                {/* Tech used */}
                <div className="flex gap-4">
                  <div className="p-2">HTML5</div>
                  <div className="p-2">CSS3</div>
                </div>
                {/* links */}
                <div className="flex gap-4 ">
                  <Link
                    href="https://github.com/LukeCloete"
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
                  <Link
                    href="https://github.com/LukeCloete"
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
                        className="text-blue-500 transition-colors delay-100  text-lg "
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-black  text-lg "
                      />
                    )}
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex rounded-lg shadow-ring h-[30vh] w-full items-center justify-center">
              miessji
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
