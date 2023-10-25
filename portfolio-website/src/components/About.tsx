import React from "react";
import Image from "next/image";
import softwareDeveloper from "../../public/software-developer-namibia.jpg";

export default function About() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="w-full h-fit bg-white">
        {/* Container */}
        <div className="h-full w-[90%] md:w-[70%] mx-auto flex  lg:flex-row blue flex-col items-center justify-center p-4 py-16 md:py-32 gap-16">
          {/* Content */}
          <div className="w-full lg:w-1/2 shadow-[0px_0px_12px_rgba(59,130,246,0.3)] rounded-2xl relative max-w-[600px] h-fit ">
            <Image
              alt="Desk and monitor"
              className="rounded-2xl"
              src={softwareDeveloper}
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 h-fit w-full lg:w-1/2">
            <h2>ABOUT ME</h2>
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center">
              <h3 className="font-bold flex text-xl text md:text-2xl w-full items-end">
                A dedicated Junior developer
                <br />
                based in Windhoek, Namibia
              </h3>
              <span className=" text-2xl animate-bounce">📍</span>
            </div>

            <p className=" text-base md:text-lg text-slate-500">
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
