import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { motion, useScroll } from "framer-motion";
const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skills-container container">
          <div className="skills-header">
            <h1 className="display-4 text-center">Skills</h1>

            {/* <motion.div
              className="div"
              whileInView={{
                backgroundColor: "#00b4d8",
                width: "600px",
                transition: { duration: 1, delay: 0.5 },
     3   }}
            ></motion.div> */}
          </div>
          <div className="skills-detail d-flex flex-wrap justify-content-between">
            <div className="main common col-5">
              <div className="fs-3 common-text">Main</div>
              <div className="html skill-container">
                <div className="skill-cont d-flex justify-content-between">
                  <div className="fs-5 skill-text">HTML</div>
                  <div className="skill-percent fs-5">90%</div>
                </div>

                <div className="skill-bar ">
                  <motion.div
                    className="html-skill skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "90%",
                      transition: { delay: 0.5, duration: 3 },
                    }}
                  ></motion.div>
                </div>
              </div>
              {/* css */}
              <div className="html skill-container">
                <div className="skill-cont d-flex justify-content-between">
                  <div className="fs-5 skill-text">CSS</div>
                  <div className="skill-percent fs-5">85%</div>
                </div>

                <div className="skill-bar ">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "85%",
                      transition: { delay: 0.5, duration: 3 },
                    }}
                  ></motion.div>
                </div>
              </div>
              {/* js */}
              <div className="html skill-container">
                <div className="skill-cont d-flex justify-content-between">
                  <div className="fs-5 skill-text">Javascript</div>
                  <div className="skill-percent fs-5">80%</div>
                </div>

                <div className="skill-bar ">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "80%",
                      transition: { delay: 0.5, duration: 3 },
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="frameworks common col-5">
              <div className="fs-3 common-text">FrameWorks</div>
              <div className="bootstrap skill-container">
                <div className="skill-cont d-flex justify-content-between">
                  <div className="fs-5 skill-text">Bootstrap</div>
                  <div className="skill-percent fs-5">85%</div>
                </div>

                <div className="skill-bar ">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "85%",
                      transition: { delay: 0.5, duration: 3 },
                    }}
                  ></motion.div>
                </div>
              </div>

              <div className="react skill-container">
                <div className="skill-cont d-flex justify-content-between">
                  <div className="fs-5 skill-text">React</div>
                  <div className="skill-percent fs-5">75%</div>
                </div>

                <div className="skill-bar ">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "75%",
                      transition: { delay: 0.5, duration: 3 },
                    }}
                  ></motion.div>
                </div>
              </div>
              <div className="nextjs skill-container">
                <div className="skill-cont d-flex justify-content-between">
                  <div className="fs-5 skill-text">NextJs</div>
                  <div className="skill-percent fs-5">75%</div>
                </div>

                <div className="skill-bar ">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "75%",
                      transition: { delay: 0.5, duration: 3 },
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>
            {/* css-preprocessor */}
            <div className="frameworks common col-5">
              <div className="fs-3 common-text">CSS Pre-Processors</div>
              <div className="css-processors skill-container">
                <div className="skill-cont d-flex justify-content-between">
                  <div className="fs-5 skill-text">SASS / SCSS</div>
                  <div className="skill-percent fs-5">80%</div>
                </div>

                <div className="skill-bar ">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "80%",
                      transition: { delay: 0.5, duration: 3 },
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>
            {/* library */}
            <div className="frameworks common col-5">
              <div className="fs-3 common-text">Js Library</div>
              <div className="jquery skill-container">
                <div className="skill-cont d-flex justify-content-between">
                  <div className="fs-5 skill-text">JQuery</div>
                  <div className="skill-percent fs-5">80%</div>
                </div>

                <div className="skill-bar ">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "80%",
                      transition: { delay: 0.5, duration: 3 },
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>
            {/* backend -----------------------*/}
            <div className="frameworks common col-5">
              <div className="fs-3 common-text">Backend</div>
              <div className="php skill-container">
                <div className="skill-cont d-flex justify-content-between">
                  <div className="fs-5 skill-text">PHP</div>
                  <div className="skill-percent fs-5">60%</div>
                </div>

                <div className="skill-bar ">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "60%",
                      transition: { delay: 0.5, duration: 3 },
                    }}
                  ></motion.div>
                </div>
              </div>
              <div className="sql skill-container">
                <div className="skill-cont d-flex justify-content-between">
                  <div className="fs-5 skill-text">MYSQL / SQL</div>
                  <div className="skill-percent fs-5">70%</div>
                </div>

                <div className="skill-bar ">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "70%",
                      transition: { delay: 0.5, duration: 3 },
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="frameworks common col-5">
              <div className="fs-3 common-text">Others</div>
              <div className="seo skill-container">
                <div className="skill-cont d-flex justify-content-between">
                  <div className="fs-5 skill-text">SEO Basics</div>
                  <div className="skill-percent fs-5">50%</div>
                </div>

                <div className="skill-bar ">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "50%",
                      transition: { delay: 0.5, duration: 3 },
                    }}
                  ></motion.div>
                </div>
              </div>
              <div className="wordpress">
                <div className="skill-cont d-flex justify-content-between">
                  <div className="fs-5 skill-text">Wordpress</div>
                  <div className="skill-percent fs-5">80%</div>
                </div>

                <div className="skill-bar ">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "80%",
                      transition: { delay: 0.5, duration: 3 },
                    }}
                  ></motion.div>
                </div>
              </div>
              <div className="canva skill-container">
                <div className="skill-cont d-flex justify-content-between">
                  <div className="fs-5 skill-text">Canva</div>
                  <div className="skill-percent fs-5">80%</div>
                </div>

                <div className="skill-bar ">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "80%",
                      transition: { delay: 0.5, duration: 3 },
                    }}
                  ></motion.div>
                </div>
              </div>
              <div className="ai skill-container">
                <div className="skill-cont d-flex justify-content-between">
                  <div className="fs-5 skill-text">Adobe Illustrator</div>
                  <div className="skill-percent fs-5">50%</div>
                </div>

                <div className="skill-bar ">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "50%",
                      transition: { delay: 0.5, duration: 3 },
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="skills-detail d-flex flex-column">
            <div className="front-end">
              <p className="fs-4">Frontend</p>
              <hr />
            </div>
            <div className="skills-info d-flex justify-content-between">
              <div className="html d-flex col-5">
                <div className="html-container skill  d-flex flex-column justify-content-center align-items-center">
                  <div className="logo d-flex  justify-content-center align-items-center ">
                    <svg width="0px" height="40px">
                      <linearGradient
                        id="html"
                        x1="100%"
                        y1="100%"
                        x2="0%"
                        y2="0%"
                      >
                        <stop stopColor="#e34c26" offset="0%" />
                        <stop stopColor="#f06529" offset="100%" />
                      </linearGradient>
                    </svg>
                    <AiFillHtml5
                      className="skill-icons mx-0 display-4"
                      style={{ fill: "url(#html)" }}
                    />
                  </div>
                  <div className="fs-4">HTML</div>
                  <div className="fs-6">90%</div>
                </div>
                <div class="skill-bar">
                  <div class="skills-progress html-skill"></div>
                </div>
              </div>
              
              <div className="html d-flex col-5">
                <div className="html-container skill  d-flex flex-column justify-content-center align-items-center">
                  <div className="logo d-flex  justify-content-center align-items-center ">
                    <svg width="0px" height="40px">
                      <linearGradient
                        id="html"
                        x1="100%"
                        y1="100%"
                        x2="0%"
                        y2="0%"
                      >
                        <stop stopColor="#e34c26" offset="0%" />
                        <stop stopColor="#f06529" offset="100%" />
                      </linearGradient>
                    </svg>
                    <AiFillHtml5
                      className="skill-icons mx-0 display-4"
                      style={{ fill: "url(#html)" }}
                    />
                  </div>
                  <div className="fs-4">HTML</div>
                  <div className="fs-6 percent text-warning">90%</div>
                </div>
                <div class="skill-bar">
                  <div class="skills-progress html-skill"></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Skills;
