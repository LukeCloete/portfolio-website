import {
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="w-full bg-white h-20 fixed shadow-md">
      {/* Container */}
      <div className="flex justify-between items-center top-0 h-full w-full px-10">
        {/* Logo */}
        <div>Luke.dev</div>

        {/* Navigation and links */}
        <div className="flex items-center gap-16">
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
          <div className="hidden lg:flex gap-8 items-end justify-center">
            {/* Social icons */}
            <div className="flex text-lg gap-4">
              <Link href="https://www.instagram.com/" target="blank_">
                <FontAwesomeIcon icon={faLinkedin} className="text-blue-500" />
              </Link>
              <Link href="https://twitter.com/" target="blank_">
                <FontAwesomeIcon icon={faTwitter} className="text-blue-500" />
              </Link>
            </div>

            {/* Contact Info */}
            <div>
              <Link
                href="tel:+264-81-638-9757"
                className="rounded-sm p-3 px-5 text-sm font-bold bg-blue-500 text-white"
              >
                Let's Talk!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
