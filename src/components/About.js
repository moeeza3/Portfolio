import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import Education from "./Education";
import { motion } from "framer-motion";
import Skills from "./Skills";
const About = (style) => {
  return (
    <>
      <motion.div className="about" id="about">
        <div className="about-container container-md container-fluid px-0 col-11 col-md-12">
          <div className="about-header mb-3">
            <h1 className="display-4 text-center">About Me</h1>
          </div>
          <div className="about-col d-flex flex-md-row justify-content-md-between align-items-md-center flex-column  justify-content-between align-items-center my-4 my-lg-5 px-0">
            <div className="col-md col-11 d-flex flex-column justify-content-center align-items-md-start align-items-center bg-warning">
              <div className="about-img ">
                <Image
                  src="/3.jpg"
                  className="img-fluid"
                  width={400}
                  height={200}
                />
              </div>
            </div>
            <div className="about-info col-md col-11 d-flex flex-column justify-content-md-between justify-content-evenly ps-md-5">
              <p className="fs-5 about-text text-center text-md-start">
                I am a Website Developer from Rawalpindi, with a strong focus in
                Web Development. I love to get new experiences and always learn
                from my surroundings. I've done many projects. You can check it
                through portfolio section on this website. I looking forward to
                any opportunities and challenges.
              </p>
              <div className="about-social d-flex ">
                <div className="about-social-text d-flex justify-content-center align-items-center col-2 fs-5">
                  Follow:
                </div>
                <div className="about-social-container col-10 d-flex justify-content-around">
                  <div className="fb about-icon">
                    <a
                      href="https://web.facebook.com/ma04ma/"
                      className="nav-link"
                    >
                      <FaFacebookF className="about-icon-text fb-icon fs-5" />
                    </a>
                  </div>
                  <div className="ins about-icon">
                    <a
                      href="https://www.instagram.com/moeez6332/"
                      className="nav-link"
                    >
                      <FaInstagram className="about-icon-text ins-icon fs-5" />
                    </a>
                  </div>
                  <div className="lin about-icon">
                    <a
                      href="https://www.linkedin.com/in/moeez-ahmad-19a417131/"
                      className="nav-link"
                    >
                      <FaLinkedinIn className="about-icon-text fs-5" />
                    </a>
                  </div>
                  <div className="git about-icon">
                    <a href="https://github.com/moeeza3" className="nav-link">
                      <FaGithub className="about-icon-text fs-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Education />
          <Skills />
        </div>
      </motion.div>
    </>
  );
};

export default About;
