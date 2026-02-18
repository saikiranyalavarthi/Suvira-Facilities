import About from "./components/About";
import ChairmanExecutive from "./components/ChairmanExecutive";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Training from "./components/Training";
import WhyChoose from "./components/WhyChoose";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ChairmanExecutive/>
      <Services />
      <Training />
      <WhyChoose />
 
      <Contact />
      <Footer />

    </>
  );
}
