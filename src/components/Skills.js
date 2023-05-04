import React from "react";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <>
      <div className="skills ">
        <div className="skills-container ">
          <div className="skills-header">
            <h1 className="display-4 text-center">Skills</h1>
          </div>
          <div className="skills-detail d-flex flex-column">
            <div className="main-1 d-flex justify-content-md-between align-items-md-center flex-md-row flex-column">
              <div className="main common ">
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
                <div className="css skill-container">
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
                <div className="js skill-container">
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
              <div className="frameworks common ">
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
            </div>
            {/* css-preprocessor */}
            <div className="main-1 d-flex justify-content-md-between align-items-center flex-md-row flex-column">
              <div className="frameworks common ">
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
              <div className="frameworks common ">
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
            </div>
            {/* backend -----------------------*/}
            <div className="main-1 d-flex justify-content-md-between align-items-center flex-md-row flex-column">
              <div className="frameworks common ">
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
              <div className="frameworks common ">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
