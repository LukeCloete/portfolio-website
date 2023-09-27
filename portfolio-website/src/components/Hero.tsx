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
  faTypo3,
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
            {/* Social links */}
            <div className="flex gap-2">
              <Link href="https://www.instagram.com/" target="blank_">
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
          </div>
          {/* Picture */}
          <div className="border border-red-400 w-full h-full">Picture</div>
        </div>
        {/* Tech Stack */}
        <div className="h-[5vh] flex items-center justify-center w-3/4 flex-row">
          <div className="w-1/5">My Tech Stack |</div>
          <div className="flex items-center gap-8 w-full h-full">
            <div className="flex gap-2">
              <Image
                width="70"
                height="70"
                alt="HTML5"
                className="hover:scale-125 ease-in-out transition duration-300"
                src="https://skillicons.dev/icons?i=html"
              />
              <Image
                height="70"
                width="70"
                alt="CSS3"
                className="hover:scale-125 ease-in-out transition duration-300"
                src="https://skillicons.dev/icons?i=css"
              />
            </div>
            <div className="flex gap-2">
              <Image
                height="70"
                width="70"
                alt="Java"
                className="hover:scale-125 ease-in-out transition duration-300"
                src="https://skillicons.dev/icons?i=java"
              />
              <Image
                height="70"
                width="70"
                alt="Javascript"
                className="hover:scale-125 ease-in-out transition duration-300"
                src="https://skillicons.dev/icons?i=js"
              />
              <Image
                height="70"
                width="70"
                alt="Typescript"
                className="hover:scale-125 ease-in-out transition duration-300"
                src="https://skillicons.dev/icons?i=typescript"
              />
            </div>
            <div className="flex gap-2">
              <Image
                height="70"
                width="70"
                alt="React"
                className="hover:scale-125 ease-in-out transition duration-300"
                src="https://skillicons.dev/icons?i=react"
              />
              <Image
                height="70"
                width="70"
                alt="Next.js"
                className="hover:scale-125 ease-in-out transition duration-300"
                src="https://skillicons.dev/icons?i=nextjs"
              />
              <Image
                height="70"
                width="70"
                alt="Tailwind CSS"
                className="hover:scale-125 ease-in-out transition duration-300"
                src="https://skillicons.dev/icons?i=tailwindcss"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
