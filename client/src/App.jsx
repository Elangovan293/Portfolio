import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import components
import Preloader from "./components/Preloader";
import NavigationBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Initialize AOS scroll transitions
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  return (
    <>
      {/* Premium initial loading effect */}
      <Preloader />
      
      {/* Main navigation */}
      <NavigationBar />
      
      {/* Portfolio sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      
      {/* Site footer */}
      <Footer />
    </>
  );
}

export default App;
