import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4 transition-colors duration-300">
      <Navbar />
      <ScrollToTop />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Skills />
        <Features />
        <Projects />
        <Contact />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
