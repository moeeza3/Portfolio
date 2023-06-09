import React from "react";
import Image from "next/image";
// import cv from "../../public/assets/cv/MoeezAhmadcv";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container-md  container-fluid hero-container px-0 col-11 col-md-12">
          <div className="d-flex flex-md-row flex-column hero-row">
            <div className="col-md col-12 d-flex flex-column justify-content-center align-items-md-start align-items-center">
              <p className="fs-2 mb-3">Hi!, There I am</p>
              <h1 className="display-4 hero-name mb-3 mb-md-0">Moeez Ahmad!</h1>

              <p className="fs-3 mb-3 d-flex flex-sm-row flex-column align-items-center">
                Web Developer <span className="mx-0 mx-sm-2">/</span> Front-end
                Developer
              </p>
              <a
                className="fs-5 px-4 py-2 resume nav-link mb-3"
                href="../assets/cv/MoeezAhmadcv.pdf"
                download
              >
                Download Resume
              </a>
            </div>
            <div className="col-md col-12 d-flex justify-content-center align-items-center ">
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
