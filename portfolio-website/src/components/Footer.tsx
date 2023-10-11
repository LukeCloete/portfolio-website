import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="w-full h-[5vh]">
        <div className="flex border-t-2 border-slate-400 h-full w-[70%] mx-auto justify-between items-center">
          <h3>© 2023 Luke.dev</h3>
          <div className="flex gap-2 items-end">
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
        </div>
      </section>
    </>
  );
}
