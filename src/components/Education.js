import React from "react";
import Image from "next/image";
const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <div className="education-container">
          <div className="education-header mb-3">
            <h1 className="display-4 text-center">Education</h1>
          </div>
          <div className="education-detail  d-flex flex-md-row justify-content-md-between align-items-md-center flex-column justify-content-center align-items-center">
            <div className="education1  educations d-flex flex-column align-items-center justify-content-evenly">
              <div className="education-icon mb-3">
                <object
                  type="image/svg+xml"
                  data="/education-icon.svg"
                  width="300"
                  height="300"
                  className="svg"
                >
                  School
                </object>
              </div>
              <div className="date my-2">2016-2020</div>
              <div className="program program1 fs-4 mb-2">BSCS</div>

              <div className="institute text-lg-start text-center">
                Preston University, Islambad
              </div>
            </div>
            <div className="education2  educations d-flex flex-column align-items-center justify-content-evenly my-md-0 my-4">
              <div className="education-icon ">
                <object
                  type="image/svg+xml"
                  data="/book1.svg"
                  width="300"
                  height="300"
                  className="svg"
                >
                  School
                </object>
              </div>
              <div className="date my-2">2013-2015</div>
              <div className="program program2 fs-4 ">Intermediate</div>
              <div className="institute text-lg-start text-center">
                Chinar Army public College, Murree
              </div>
            </div>
            <div className="education3 educations d-flex flex-column align-items-center justify-content-evenly">
              <div className="education-icon mb-3">
                <object
                  type="image/svg+xml"
                  data="/school-icon.svg"
                  width="300"
                  height="300"
                  className="svg"
                >
                  School
                </object>
              </div>
              <div className="date my-2">2011-2013</div>
              <div className="program program3 fs-4 mb-2">Matriculation</div>
              <div className="institute text-lg-start text-center">
                Chinar Army public College, Murree
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
