import React from "react";
import Menu from "./Menu";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Services from "./Services";
import Portfolio from "./Portfolio";
const Main = () => {
  return (
    <>
      <div className="main">
        <Menu />
        <Hero />
        <About />
        {/* <Education /> */}
        {/* <Services />
        <Portfolio /> */}
      </div>
    </>
  );
};

export default Main;
