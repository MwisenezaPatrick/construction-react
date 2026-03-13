import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import Working from "./sections/Working";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Working />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  );
}

export default App;