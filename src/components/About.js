import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { RxLink1 } from "react-icons/rx";
import Education from "./Education";
import Skills from "./Skills";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-container container-md container-fluid">
          <div className="about-header mb-3">
            <h1 className="display-4 text-center">About Me</h1>
          </div>
          <div className="about-col d-flex ">
            <div className="col">
              <div className="about-img">
                <Image
                  src="/3.jpg"
                  className="img-fluid"
                  width={400}
                  height={200}
                />
              </div>
            </div>
            <div className="col about-info d-flex flex-column justify-content-between">
              <p className="fs-5 about-text">
                I am a Website Developer from Rawalpindi, with a strong focus in
                Web Development. I love to get new experiences and always learn
                from my surroundings. I've done many projects. You can check it
                through portfolio section on this website. I looking forward to
                any opportunities and challenges.
              </p>
              <div className="about-social d-flex ">
                <div className="about-social-text d-flex justify-content-center align-items-center col-2 ">
                  <RxLink1 className="fs-4" />
                </div>
                <div className="about-social-container col-10 d-flex justify-content-around">
                  <div className="fb about-icon">
                    <FaFacebookF className="about-icon-text fb-icon fs-5" />
                  </div>
                  <div className="ins about-icon">
                    <FaInstagram className="about-icon-text ins-icon fs-5" />
                  </div>
                  <div className="lin about-icon">
                    <FaLinkedinIn className="about-icon-text fs-5" />
                  </div>
                  <div className="git about-icon">
                    <FaGithub className="about-icon-text fs-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Education />
        <Skills />
      </div>
    </>
  );
};

export default About;
