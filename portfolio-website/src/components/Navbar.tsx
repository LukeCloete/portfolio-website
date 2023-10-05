import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";

function Nav() {
  const { scrollY } = useScroll();
  const [isMinimal, setIsMinimal] = useState(false);

  const debouncedCallback = debounce((latest) => {
    if (latest < 25) {
      setIsMinimal(false);
    } else {
      setIsMinimal(true);
    }
  }, 15);
  useMotionValueEvent(scrollY, "change", debouncedCallback);
  return (
    <div className="flex items-center fixed h-[15vh] w-full justify-center">
      <motion.nav
        variants={{
          Minimal: {
            width: "60%",
            padding: "0rem",
            justifyContent: "center",
            gap: "3rem",
            borderRadius: "1rem",
            backgroundColor: "rgba(255,255,255,0.95)",
            height: "60%",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          },
          Natural: {
            boxShadow: "none",
            backgroundColor: "transparent",
            height: "full",
          },
        }}
        animate={isMinimal ? "Minimal" : "Natural"}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="w-full flex items-center"
      >
        {/* Container */}
        <div className="flex justify-between items-center top-0 h-full w-full px-12">
          {/* Logo */}
          <div className="hover:text-blue-500 text-xl font-semibold">
            <Link href="/#home">Luke.dev</Link>
          </div>

          {/* Navigation and links */}
          <div className="flex items-center gap-6">
            {/* Links */}
            <div className="flex gap-8 justify-center items-center">
              <ul className="flex gap-4 font-semibold opacity-80 justify-center items-center">
                <li className="hover:text-blue-500">
                  <Link href="/#home">Home</Link>
                </li>
                <li className="hover:text-blue-500">
                  <Link href="#about">About</Link>
                </li>
                <li className="hover:text-blue-500">
                  <Link href="/menu">Portfolio</Link>
                </li>
                <li className="hover:text-blue-500">
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Socials and contact info */}
            <div className="hidden lg:flex gap-16 items-end justify-center">
              {/* Contact Info */}
              <button>
                <Link
                  href=""
                  className=" before:ease relative h-12 w-40 overflow-hidden shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-500 hover:before:-translate-x-40 rounded-sm p-3 px-5 text-sm font-bold bg-blue-500 text-white"
                >
                  Download my CV
                </Link>
              </button>

              {/* Social icons */}
              <div className="flex text-lg gap-4">
                <Link
                  href="https://www.linkedin.com/in/luke-cloete-2b288b231/"
                  target="blank_"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-500 hover:text-black"
                  />
                </Link>
                <Link href="https://github.com/LukeCloete" target="blank_">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-blue-500 hover:text-black"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

export default Nav;
