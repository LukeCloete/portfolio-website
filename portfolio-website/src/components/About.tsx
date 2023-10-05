import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="w-full h-[80vh] bg-white">
        {/* Container */}
        <div className="h-full w-2/3 mx-auto flex gap-2 items-center justify-center p-16">
          {/* Content */}
          <div className="w-1/2">Picture</div>
          <div className="flex flex-col items-start justify-center gap-4 w-1/2">
            <h2 className="text-primary font-semibold text-lg">ABOUT ME</h2>
            <h3 className="font-bold text-2xl">
              A dedicated Junior developer based in Windhoek Namibia
            </h3>
            <p className="text-lg text-slate-500">
              As a Junior Developer, I possess an good background of skills in
              HTML, CSS, Java, JavaScript, Typescript, React and Tailwind.
              Currently, I excel in designing and maintaining responsive
              websites that offer a smooth user experience. My expertise lies in
              utilizing cutting-edge development tools and techniques to craft
              engaging interfaces through writing clean and optimized code. I am
              always looking to expand my skillset and close the gap between my
              front-end and back-end development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
