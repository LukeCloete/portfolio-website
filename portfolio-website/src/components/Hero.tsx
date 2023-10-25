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
import tailwindIcon from "../../public/tailwindcss.svg";
import nextjsIcon from "../../public/next-js.svg";
import typescriptIcon from "../../public/typescript.svg";
import heroPicture from "../../public/temp-hero-picture.jpg";

export default function Hero() {
  return (
    <>
      <section id="home" className={styles.section}>
        {/* Container */}
        <div className="w-[80%] md:w-[70%] mx-auto h-full  mt-6 md:mt-20 flex flex-col gap-12 lg:gap-24 justify-center items-center">
          {/* Info and Picture */}
          <div className=" w-full flex justify-end md:gap-20 h-3/4 lg:h-1/2 flex-col-reverse md:flex-row">
            {/* Info */}
            <div className="flex w-full h-fit md:h-full flex-col items-center md:items-start justify-start md:justify-center">
              <h1 className="text-center md:text-left font-bold h-fit py-4 leading-tight text-4xl sm:text-[55px] tracking-tight w-full flex-shrink-0">
                The Front-end Engineer.
              </h1>
              <p className=" text-center md:text-left  text-lg sm:text-lg tracking-relaxed mb-8 flex-shrink-0">
                Hi, I&apos;m Luke Cloete, a passionate Front-end Software
                Developer based in Windhoek, Namibia.
              </p>

              <div className="flex flex-col-reverse sm:flex-row gap-8">
                <div className="flex gap-2 items-end justify-center md:justify-start">
                  <Link
                    href="https://www.linkedin.com/in/luke-cloete-2b288b231/"
                    target="blank_"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-black hover:text-blue-500 text-3xl"
                    />
                  </Link>
                  <Link
                    href="https://github.com/LukeCloete"
                    target="blank_"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-black hover:text-blue-500 text-3xl"
                    />
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                  <button className=" text-base p-2 rounded-md transition font-semibold ease-in-out duration-300 bg-black text-white hover:bg-transparent hover:border-black hover:border hover:text-black">
                    Download my CV
                  </button>
                </div>
              </div>
            </div>
            {/* Picture */}
            <div className="relative  p-1 z-0 flex items-center overflow-hidden animate-warp justify-center transition-all max-w-[600px] w-[80%] sm:w-[30%] md:w-[80%] mx-auto h-fit">
              <div className=" bg-gradient-to-bl absolute -z-[1] from-blue-100 to-blue-700 w-[600px] h-[600px] animate-slowSpin"></div>
              <Image
                src={heroPicture}
                alt="A close-up of myself"
                className="animate-warp transition-all"
                loading="eager"
              />
            </div>
          </div>
          {/* Tech Stack */}
          <div className=" h-fit gap-8 mt-8 mb-16 lg:mb-8 flex md:flex-row flex-col items-center justify-center md:justify-start w-full">
            <div className=" w-fit md:w-fit text-center md:text-left font-semibold  border-b-2 border-black md:border-none text-lg opacity-80 md:after:content-['_|']">
              My Tech Stack
            </div>

            <ul className="flex flex-col md:flex-row items-center justify-center gap-6">
              <li className="flex items-center justify-center gap-2">
                <FontAwesomeIcon
                  icon={faHtml5}
                  height={50}
                  size="3x"
                  className="hover:scale-125 ease-in-out transition duration-300"
                />
                <FontAwesomeIcon
                  icon={faCss3}
                  height={50}
                  size="3x"
                  className="hover:scale-125 ease-in-out transition duration-300"
                />
              </li>
              <li className="flex items-center justify-center gap-2">
                <FontAwesomeIcon
                  icon={faJava}
                  height={50}
                  size="3x"
                  className="hover:scale-125 ease-in-out transition duration-300"
                />
                <FontAwesomeIcon
                  icon={faJs}
                  size="3x"
                  className="hover:scale-125 ease-in-out transition duration-300"
                />
                <Image
                  height={42}
                  alt="Typescript"
                  className="hover:scale-125 ease-in-out transition duration-300"
                  src={typescriptIcon}
                />
              </li>
              <li className="flex items-center justify-center gap-2">
                <FontAwesomeIcon
                  icon={faReact}
                  height={45}
                  size="3x"
                  className="hover:scale-125 ease-in-out transition duration-300"
                />
                <Image
                  height={45}
                  alt="Next.js"
                  className="hover:scale-125 ease-in-out transition duration-300"
                  src={nextjsIcon}
                />
                <Image
                  alt="Tailwind CSS"
                  height={45}
                  src={tailwindIcon}
                  className="hover:scale-125 ease-in-out transition duration-300"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
