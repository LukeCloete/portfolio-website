import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
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
        <Contact />
        <Footer />
      </main>
    </>
  );
}
