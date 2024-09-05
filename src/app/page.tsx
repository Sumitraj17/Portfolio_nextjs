import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/About"
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills"
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="bg-black h-full">
        {" "}
        <Navbar></Navbar>
        <Hero></Hero>
        <About/>
        <Portfolio/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}
