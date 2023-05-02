import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      {/* <footer className="bg-light pt-5">
        <Container>
          <Row className="justify-content-center justify-content-md-between">
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <h1>M</h1>

              <div className="contact">
                <div className="p">
                  Contact: <span>03181114727</span>
                </div>
                <div className="email">
                  Email: <span>moeeza3@gmail.com</span>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <h5>Column 2</h5>
              <ul className="list-unstyled">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <h5>Column 3</h5>
              <ul className="list-unstyled">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer> */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="row footer-details">
            <div className="col-12 col-md-4">
              <h3>M</h3>
              <p className="fs-6">Building the web, one pixel at a time.</p>
            </div>
            <div className="col-12 col-md-4">
              <h3>Menu</h3>
              <ul className="list-unstyled">
                <li className="nav-list my-1">
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-list my-1">
                  <a href="#" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-list my-1">
                  <a href="#" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-list my-1">
                  <a href="#" className="nav-link">
                    Portfolio
                  </a>
                </li>
                <li className="nav-list my-1">
                  <a href="#" className="nav-link">
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
