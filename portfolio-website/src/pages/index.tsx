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
