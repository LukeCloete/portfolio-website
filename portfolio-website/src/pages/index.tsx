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
        <meta property="og:title" content="Luke Cloete | Your Next Developer" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta
          property="og:image"
          content="https://lukecloeteportfolio.netlify.app/api/og"
        />
        <meta property="og:url" content="https://lukecloete.com" />

        <meta
          name="description"
          content="Developer with experience building performant websites and web applications. Expertise in React/Next.js. Competent in UX/UI design. "
        />
        <meta property="og:type" content="website" />

        <meta
          name="keywords"
          content="Namibian Developer, Front-end developer, software developer, software engineer, Luke Cloete, Web developer, Namibian web developer"
        />
        <meta name="author" content="Luke Cloete, cloeteluke@gmail.com" />
        <meta
          name="My personal portfolio site."
          content="Developer portfolio"
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
