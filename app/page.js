import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Crypto from "./components/crypto";
import Skills from "./components/skills";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Crypto />
      <Skills />
      <Footer />
    </>
  );
}
