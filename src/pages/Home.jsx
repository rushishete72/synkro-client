import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Fixed navbar offset */}
      <main className="pt-16 bg-neutral-950 text-white">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="achievements">
          <Achievements />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  );
}
