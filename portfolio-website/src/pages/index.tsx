import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luke Cloete | Front-end Developer</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <meta
          name="description"
          content="Welcome to my portfolio! Explore my collection of my projects showcasing my expertise and get in touch.
            With a passion for clean code and innovative solutions, I strive to create seamless user experiences that blend functionality with stunning designs."
        />
        <meta
          name="keywords"
          content="Namibian Developer, Front-end developer, software developer, software engineer, Luke Cloete, Web developer, Namibian web developer"
        />
        <meta name="author" content="Luke Cloete, cloeteluke@gmail.com" />
        <meta
          name="My personal portfolio site."
          content="Front-end developer portfolio"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
