import React from "react";
import Menu from "./Menu";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
const Main = () => {
  return (
    <>
      <div className="main">
        <Menu />
        <Hero />
        <About />
        <Education />
      </div>
    </>
  );
};

export default Main;
