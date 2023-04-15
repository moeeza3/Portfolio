import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container-lg container-fluid hero-container">
          <div className="d-flex flex-md-row flex-column hero-row">
            <div className="col-md col-12 d-flex flex-column justify-content-center align-items-md-start align-items-center">
              <p className="fs-2 mb-3">Hi!, There I am</p>
              <h1 className="display-4 hero-name mb-3 mb-md-0">Moeez Ahmad!</h1>

              <p className="fs-3 mb-3">
                Web Developer <span>/</span> Front-end Developer
              </p>
              <button className="fs-5 px-4 py-2 resume mb-3">
                Download Resume
              </button>
            </div>
            <div className="col-md col-12 d-flex justify-content-center align-items-center">
              <div className="w-100 d-flex justify-content-center">
                <Image
                  src="/code-typing.svg"
                  className="img-fluid profile-img"
                  width={550}
                  height={700}
                  layout="intrinsic"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
