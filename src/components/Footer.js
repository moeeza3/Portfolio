import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="container-md container-fluid px-0 col-11 col-md-12">
          <div className="d-flex flex-md-row justify-content-md-between align-items-md-center flex-column  justify-content-between align-items-center footer-details px-0">
            <div className="col-12 col-md-4">
              <a href="#home" className="nav-link nav-brand">
                <h3>MA</h3>
              </a>

              <p className="fs-6">Building the web, one pixel at a time.</p>
            </div>
            <div className="col-12 col-md-4">
              <h3>Menu</h3>
              <ul className="list-unstyled">
                <li className="nav-list my-1">
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-list my-1">
                  <a href="#about" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-list my-1">
                  <a href="#services" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-list my-1">
                  <a href="#portfolio" className="nav-link">
                    Portfolio
                  </a>
                </li>
                <li className="nav-list my-1">
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 py-0">
              <h3>Contact Us</h3>
              <div className="p my-1">
                Phone: <span>+923181114727</span>
              </div>
              <div className="p my-1">
                Email: <span>moeeza3@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
