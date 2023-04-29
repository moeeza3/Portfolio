import React from "react";
import { AiFillCode, AiOutlineCode } from "react-icons/ai";
import { SiWordpress } from "react-icons/si";

const Services = () => {
  return (
    <>
      <div className="services" id="services">
        <div className="service-container container-md container-fluid d-flex justify-content-between flex-column align-items-center">
          <div className="services-header mb-3">
            <h1 className="display-4 text-center">What i can do for you?</h1>
          </div>
          <div className="services-detail row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 g-4">
            <div className="col services-col">
              <div className="services-icon text-center">
                <AiOutlineCode className="display-4 icon " />
              </div>
              <div className="services-detail-info">
                <div className="h2 text-center">Web Development</div>
                <div className="p  text-center">
                  I develop the look and feel of a website, ensuring that it is
                  both visually appealing and user-friendly. My services include
                  creating responsive layouts that adapt to different screen
                  sizes and devices integrating various design elements such as
                  typography, colors, and images.
                </div>
              </div>
            </div>
            <div className="col services-col">
              <div className="services-icon text-center">
                <SiWordpress className="display-4 icon " />
              </div>
              <div className="services-detail-info">
                <div className="h2  text-center">Wordpress</div>
                <div className="p  text-center">
                  I develop the look and feel of a website, ensuring that it is
                  both visually appealing and user-friendly. My services include
                  creating responsive layouts that adapt to different screen
                  sizes and devices, optimizing page speed and performance using
                  plugins, themes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
