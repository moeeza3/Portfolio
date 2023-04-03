import React from "react";
import Image from "next/image";
const Education = () => {
  return (
    <>
      <div className="education">
        <div className="education-container container">
          <div className="education-header">
            <h1 className="display-4 text-center">Education</h1>
          </div>
          <div className="education-detail d-flex justify-content-between">
            <div className="education1  educations text-warning d-flex flex-column align-items-center">
              <div className="education-icon my-3">
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
              <div className="date">2016-2020</div>
              <div className="program fs-4">Bachelors In Computer Science</div>
              <div className="institute">Preston University,Islambad</div>
            </div>
            <div className="education2  educations text-warning d-flex flex-column align-items-center">
              <div className="education-icon my-3">
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
              <div className="date">2016-2020</div>
              <div className="program fs-4">Intermediate</div>
              <div className="institute">
                Chinar Army public College, Murree
              </div>
            </div>
            <div className="education3 educations text-warning d-flex flex-column align-items-center">
              <div className="education-icon my-3">
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
              <div className="date">2016-2020</div>
              <div className="program fs-4">Matriculation</div>
              <div className="institute">
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
