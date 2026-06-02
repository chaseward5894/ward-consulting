import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Package from "@/components/Package";
import WhoItsFor from "@/components/WhoItsFor";
import DemoWorkflow from "@/components/DemoWorkflow";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <DemoWorkflow />
        <Package />
        <WhoItsFor />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
