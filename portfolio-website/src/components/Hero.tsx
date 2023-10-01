import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className={styles.section}>
      {/* Container */}
      <div className="w-full h-full flex flex-col gap-12 justify-center items-center">
        {/* Info and Picture */}
        <div className="w-3/4 flex gap-8 h-3/4">
          {/* Info */}
          <div className="flex w-full h-full flex-col items-start gap-6 justify-center">
            <h1 className="font-bold text-[70px] leading-none">
              Full-Stack React Developer
            </h1>
            <p className="text-lg tracking-tighter">
              Hi, I&apos;m Luke Cloete, a passionate Full-Stack React Developer
              based in Windhoek, Namibia.
            </p>

            <div className="flex gap-8">
              <div className="flex gap-2">
                <Link
                  href="https://www.linkedin.com/in/luke-cloete-2b288b231/"
                  target="blank_"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-black hover:text-blue-500 text-3xl"
                  />
                </Link>
                <Link href="https://github.com/LukeCloete" target="blank_">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-black hover:text-blue-500 text-3xl"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <button className=" p-2 rounded-sm transition font-bold ease-in-out duration-300 bg-black text-white hover:bg-transparent hover:border-black hover:border hover:text-black">
                  Download my CV
                </button>
              </div>
            </div>
          </div>
          {/* Picture */}
          <div className="border border-red-400 w-full h-full">Picture</div>
        </div>
        {/* Tech Stack */}
        <div className="h-[5vh] flex items-center justify-center w-3/4 flex-row">
          <div className="w-1/5">My Tech Stack |</div>
          <div className="flex items-center gap-8 w-full h-full">
            <ul className="flex items-center justify-center gap-6">
              <li className="flex items-center justify-center gap-2">
                <FontAwesomeIcon
                  icon={faHtml5}
                  width="28"
                  height="32"
                  size="2x"
                  className="hover:scale-125 ease-in-out transition duration-300"
                />
                <FontAwesomeIcon
                  icon={faCss3}
                  width="32"
                  height="28"
                  size="2x"
                  className="hover:scale-125 ease-in-out transition duration-300"
                />
              </li>
              <li className="flex items-center justify-center gap-2">
                <FontAwesomeIcon
                  icon={faJava}
                  width="28"
                  height="32"
                  size="2x"
                  className="hover:scale-125 ease-in-out transition duration-300"
                />
                <FontAwesomeIcon
                  icon={faJs}
                  width="28"
                  height="32"
                  size="2x"
                  className="hover:scale-125 ease-in-out transition duration-300"
                />
                <Image
                  height="32"
                  width="28"
                  alt="Typescript"
                  className="hover:scale-125 ease-in-out transition duration-300"
                  src="./typescript.svg"
                />
              </li>
              <li className="flex items-center justify-center gap-2">
                <FontAwesomeIcon
                  icon={faReact}
                  width="28"
                  height="32"
                  size="2x"
                  className="hover:scale-125 ease-in-out transition duration-300"
                />
                <Image
                  height="32"
                  width="28"
                  alt="Next.js"
                  className="hover:scale-125 ease-in-out transition duration-300"
                  src="./next-js.svg"
                />
                <Image
                  height="32"
                  width="28"
                  alt="Tailwind CSS"
                  className="hover:scale-125 ease-in-out transition duration-300"
                  src="./tailwindcss.svg"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
