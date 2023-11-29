import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import debounce from "lodash.debounce";

function Nav() {
  const { scrollY } = useScroll();
  const [isMinimal, setIsMinimal] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const debouncedCallback = debounce((latest) => {
    if (latest < 25) {
      setIsMinimal(false);
    } else {
      setIsMinimal(true);
    }
  }, 25);
  useMotionValueEvent(scrollY, "change", debouncedCallback);

  const toggleNav = () => {
    setIsNavOpen((prevOpen) => !prevOpen);
  };

  const menuVariations = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVariations = {
    initial: {
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        duartion: 0.8,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };
  return (
    <div className="flex z-10 items-center fixed h-[15vh] w-full justify-center">
      <motion.nav
        variants={{
          Minimal: {
            width: "75%",
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
        <div className="flex justify-between items-center top-0 h-full w-full px-4 lg:px-12">
          {/* Logo */}
          <div className="hover:text-blue-500 text-xl font-semibold">
            <Link href="/#home">Luke.dev</Link>
          </div>
          {/* Hamburger menu */}
          <div className="flex items center justify-center md:hidden">
            <button onClick={toggleNav}>
              <FontAwesomeIcon icon={faBars} className="text-black" />
            </button>
          </div>

          {/* Navigation and links */}
          <div className="hidden md:flex items-center gap-6">
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
                  <Link href="#portfolio">Portfolio</Link>
                </li>
                <li className="hover:text-blue-500">
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
            {/* Socials and contact info */}
            <div className="hidden md:flex gap-8 items-center justify-center">
              {/* Contact Info */}
              <button>
                <Link
                  href="/Luke_Cloete_CV.pdf"
                  download="Luke_Cloete_CV.pdf"
                  target="blank_"
                  className=" before:ease relative h-12 w-40 overflow-hidden shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-500 hover:before:-translate-x-40 rounded-md p-3 px-3 lg:px-5 text-sm font-bold bg-blue-500 text-white"
                >
                  Download my CV
                </Link>
              </button>

              {/* Social icons */}
              <div className="flex text-lg gap-4">
                <Link
                  href="https://www.linkedin.com/in/luke-cloete-2b288b231/"
                  target="blank_"
                  aria-label="My LinkedIn Profile"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-500 hover:text-black"
                  />
                </Link>
                <Link
                  href="https://github.com/LukeCloete"
                  target="blank_"
                  aria-label="My GitHub Profile"
                >
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
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            variants={menuVariations}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 w-full left-0 h-screen bg-gradient-radial origin-top from-blue-200 to-white"
          >
            <div className="w-[90%] sm:w-[80%] mx-auto gap-20 h-full flex flex-col justify-start items-center">
              <div className="flex justify-between items-start mt-6 p-1 h-fit w-full ">
                {/* Logo */}
                <div className=" hover:text-blue-500 text-xl font-semibold">
                  <Link href="/#home" onClick={toggleNav}>
                    Luke.dev
                  </Link>
                </div>
                <button aria-label="Open Menu" onClick={toggleNav}>
                  <FontAwesomeIcon icon={faXmark} className="text-black" />
                </button>
              </div>
              <motion.ul
                variants={{
                  initial: {
                    transition: {
                      duration: 5.3,
                      delayChildren: 0.3,
                      staggerDirection: -1,
                    },
                  },
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 0px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.1,
                    },
                  },
                }}
                animate="open"
                initial="initial"
                className="w-full h-fit p-4 flex flex-col gap-8 justify-center items-center text-2xl"
              >
                <div className=" overflow-hidden">
                  <motion.div
                    variants={mobileLinkVariations}
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                  >
                    <Link href="/#home" onClick={toggleNav}>
                      Home
                    </Link>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    variants={mobileLinkVariations}
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                  >
                    <Link href="#about" onClick={toggleNav}>
                      About
                    </Link>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    variants={mobileLinkVariations}
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                  >
                    <Link href="#portfolio" onClick={toggleNav}>
                      Portfolio
                    </Link>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    variants={mobileLinkVariations}
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                  >
                    <Link href="#contact" onClick={toggleNav}>
                      Contact
                    </Link>
                  </motion.div>
                </div>
                <div className="p-2 overflow-hidden">
                  <motion.div
                    variants={mobileLinkVariations}
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                  >
                    <Link
                      href="/Luke_Cloete_CV.pdf"
                      target="blank_"
                      download="Luke_Cloete_CV.pdf"
                      className="  shadow-2xl w-40 h-fit rounded-xl p-3 px-5 text-sm font-bold bg-blue-500 text-white"
                    >
                      Download my CV
                    </Link>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    className="flex text-lg gap-4"
                    variants={mobileLinkVariations}
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                  >
                    <Link
                      href="https://www.linkedin.com/in/luke-cloete-2b288b231/"
                      target="blank_"
                      aria-label="My LinkedIn Profile"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="text-blue-500"
                      />
                    </Link>
                    <Link
                      href="https://github.com/LukeCloete"
                      target="blank_"
                      aria-label="My GitHub Profile"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="2x"
                        className="text-blue-500"
                      />
                    </Link>
                  </motion.div>
                </div>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Nav;
