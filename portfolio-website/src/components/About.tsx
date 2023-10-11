import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="w-full h-[85vh] bg-white">
        {/* Container */}
        <div className="h-full w-[70%] mx-auto flex items-center justify-center p-4 py-32 gap-16">
          {/* Content */}
          <div className="w-1/2 shadow-xl rounded-2xl overflow-hidden relative max-w-[600px] h-full">
            <Image
              fill={true}
              alt="Desk and monitor"
              className="rounded-2xl"
              src="/software-developer-namibia.jpg"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 h-full w-1/2">
            <h2 className="text-primary font-semibold text-lg">ABOUT ME</h2>
            <h3 className="font-bold flex text-2xl w-full items-end">
              A dedicated Junior developer
              <br />
              based in Windhoek, Namibia📍
            </h3>

            <p className="text-lg text-slate-500">
              As a Junior Developer, I possess a good background of skills in
              HTML, CSS, Java, JavaScript, Typescript, React and Tailwind.
              Currently, I am refining my craft in designing and maintaining
              responsive websites that offer a smooth user experience. My
              expertise lies in utilizing cutting-edge development tools and
              techniques to craft engaging interfaces through writing clean and
              optimized code. I am always looking to expand my skillset and
              close the gap between my front-end and back-end development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
