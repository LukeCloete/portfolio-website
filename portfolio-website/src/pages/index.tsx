import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Luke Cloete - Full-Stack Web Developer - Portfolio Website
        </title>
      </Head>

      <main>
        <Navbar />
        <Hero />
        <About />
      </main>
    </>
  );
}
