import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(255,255,255)] text-gray-700 h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Neesha's Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      {/* Contact me */}
    </div>
  );
};

export default Home;
