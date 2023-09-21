import React from "react";
import styles from "./hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.section}>
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
              Hi, I'm Luke Cloete, a passionate Full-Stack React Developer based
              in Windhoek, Namibia.
            </p>
            {/* Social links */}
            <div className="flex gap-2">
              <Link href="https://www.instagram.com/" target="blank_">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-black text-3xl"
                />
              </Link>
              <Link href="https://github.com/LukeCloete" target="blank_">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-black text-3xl"
                />
              </Link>
            </div>
          </div>
          {/* Picture */}
          <div className="border border-red-400 w-full h-full">Picture</div>
        </div>
        {/* Tech Stack */}
        <div className="border">Tech Stack</div>
      </div>
    </section>
    //   {/* About Section */}
    //   <section className="w-full h-[165vh] bg-slate-700">
    //   {/* Container */}
    //   <div className="h-full w-full flex gap-2 items-center justify-around p-16 px-36">
    //     {/* Content */}
    //   </div>
    // </section>
  );
}
