import React, { useEffect, useRef } from "react";
import Menu from "./Menu";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <div className="main">
        <Menu />
        <Hero />
        <About />

        <Services />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
};

export default Main;
