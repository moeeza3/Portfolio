import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container-lg container-fluid hero-container">
          <div className="d-flex flex-md-row flex-column hero-row">
            <div className="col-md col-12 d-flex flex-column justify-content-center align-items-md-start align-items-center">
              <p className="fs-2">Hi!, There I am</p>
              <h1 className="display-4 hero-name">Moeez Ahmad!</h1>

              <p className="fs-3">
                Web Developer <span>/</span> Front-end Developer
              </p>
              <button className="fs-5 px-4 py-2 resume">Download Resume</button>
            </div>
            <div className="col-md col-12 d-flex justify-content-center align-items-center">
              <Image
                src="/code-typing.svg"
                className="img-fluid profile-img"
                width={550}
                height={700}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
