import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyPartner from "../components/WhyPartner";
import Products from "../components/Products";
import Projects from "../components/Projects";
import Resources from "../components/Resources";
import Certifications from "../components/Certifications";
import FactoryTour from "../components/FactoryTour";
import FAQ from "../components/FAQ";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Preloader />

      <Navbar />

      <main>
        <Hero />
        <WhyPartner />
        <Products />
        <Projects />
        <Resources />
        <Certifications />
        <FactoryTour />
        <FAQ />
        <About />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}