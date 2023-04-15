import React from "react";
import Image from "next/image";
const Education = () => {
  return (
    <>
      <div className="education">
        <div className="education-container">
          <div className="education-header mb-3">
            <h1 className="display-4 text-center">Education</h1>
          </div>
          <div className="education-detail row row-cols-1 row-cols-md-3 g-4 justify-content-center ">
            <div className="col education1  educations d-flex flex-column align-items-center justify-content-center">
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

              <div className="institute">Preston University, Islambad</div>
            </div>
            <div className="col education2  educations d-flex flex-column align-items-center justify-content-center">
              <div className="education-icon mb-3">
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
              <div className="program program2 fs-4 mb-2">Intermediate</div>
              <div className="institute">
                Chinar Army public College, Murree
              </div>
            </div>
            <div className="col education3 educations d-flex flex-column align-items-center justify-content-center">
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
