import Image from "next/image";
import styles from "./contact.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        {/* Container */}
        <div className="h-full w-[80%] sm:w-[70%] mx-auto flex flex-col items-start justify-start gap-16 py-24">
          {/* Content */}
          <div className="flex flex-col items-start justify-start gap-4 h-1/2 w-full sm:w-1/2">
            <h2>CONTACT</h2>
            <div className="flex flex-col-reverse md:flex-row items-center justify-start gap-2">
              <h3 className="font-bold text-2xl w-full">
                Let's build together!
              </h3>
              <p className=" inline-block text-2xl color-black animate-pulse">
                🤝
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col sm:flex-row h-full gap-16">
            <div className="flex w-fit h-full gap-8">
              <div className="flex items-center justify-center ">
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  size="2x"
                  className="rounded-full p-4 bg-black text-white"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-lg font-bold">Location</h4>
                <Link
                  className="text-lg text-slate-500 hover:text-blue-500"
                  href="https://g.co/kgs/YUByi9"
                  target="blank_"
                  rel="noopener noreferrer"
                >
                  Windhoek, Namibia
                </Link>
              </div>
            </div>
            <div className="flex w-fit h-full gap-8">
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="rounded-full p-4 bg-black text-white"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-lg font-bold">Mail</h4>
                <Link
                  className="text-lg text-slate-500 hover:text-blue-500"
                  href="mailto:cloeteluke@gmail.com"
                >
                  cloeteluke@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
