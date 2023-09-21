import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Nav() {
  const { scrollY } = useScroll();
  const [isTopOfScreen, setIsTopOfScreen] = useState(false);
  const [isMinimal, setIsMinimal] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 10) {
      // setIsTopOfScreen(true);
      setIsMinimal(false);
    } else {
      // setIsTopOfScreen(false);
      setIsMinimal(true);
    }
  });
  return (
    <nav className="w-full h-20 fixed flex items-center">
      {/* Container */}
      <motion.div
        variants={{
          Minimal: {
            width: "45%",
            padding: "0rem",
            justifyContent: "center",
            gap: "3rem",
            borderRadius: "1rem",
            margin: "0 auto",
            backgroundColor: "rgba(255,255,255,0.95)",
            height: "75%",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          },
          Natural: { boxShadow: "none", backgroundColor: "transparent" },
        }}
        animate={isMinimal ? "Minimal" : "Natural"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex justify-between items-center top-0 h-full w-full px-12"
      >
        {/* Logo */}
        <div>Luke.dev</div>

        {/* Navigation and links */}
        <div className="flex items-center gap-6">
          {/* Links */}
          <div className="flex gap-8 justify-center items-center">
            <ul className="flex gap-4 justify-center items-center">
              <li>
                <Link href="/#">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="/menu">Portfolio</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Socials and contact info */}
          <div className="hidden lg:flex gap-16 items-end justify-center">
            {/* Contact Info */}
            <div>
              <Link
                href="tel:+264-81-638-9757"
                className="rounded-sm p-3 px-5 text-sm font-bold bg-blue-500 text-white"
              >
                Let's Talk!
              </Link>
            </div>

            {/* Social icons */}
            <div className="flex text-lg gap-4">
              <Link href="https://www.instagram.com/" target="blank_">
                <FontAwesomeIcon icon={faLinkedin} className="text-blue-500" />
              </Link>
              <Link href="https://github.com/LukeCloete" target="blank_">
                <FontAwesomeIcon icon={faGithub} className="text-blue-500" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

export default Nav;
