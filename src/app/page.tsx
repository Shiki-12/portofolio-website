import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Footer />
    </main>
  );
}
