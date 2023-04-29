import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Menu = () => {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <div className="navbar-brand-container">
              <a class="navbar-brand" href="#">
                M,
              </a>
            </div>

            <div
              class="navbar-desktop ms-auto mb-2 mb-lg-0 "
              id="navbarTogglerDemo02"
            >
              <ul class="navbar-nav  ">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#education">
                    Resume
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Contact</a>
                </li>
              </ul>
            </div>
            <motion.button
              initial={false}
              animate={isOpen ? "open" : "closed"}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={handleClick}
              className="menu-btn nav-toggler"
              variants={{
                open: { position: "fixed", right: "14px" },
                closed: { position: "relative", right: "0px" },
              }}
              transition={{ type: "spring", duration: 1 }}
            >
              <motion.div
                variants={{
                  open: {
                    rotate: [0, -45],
                    y: 13,
                    zIndex: 1,
                    width: "100%",
                  },
                  closed: { rotate: [-45, 0], y: 0 },
                  hover: { width: "100%" },
                  unHover: { width: "60%" },
                }}
                initial={false}
                animate={
                  isOpen
                    ? "open"
                    : isHover
                    ? "hover"
                    : !isHover
                    ? "unHover"
                    : "closed"
                }
                transition={{ duration: 0.8 }}
                className="line1 lines"
              ></motion.div>
              <motion.div
                className="line2 lines"
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                  hover: { width: "80%" },
                  unHover: { width: "80%" },
                }}
                initial={false}
                animate={
                  isOpen
                    ? "open"
                    : isHover
                    ? "hover"
                    : !isHover
                    ? "unHover"
                    : "closed"
                }
                transition={{ duration: 0.8 }}
              ></motion.div>
              <motion.div
                className="line3 lines"
                variants={{
                  open: { rotate: [0, 45], y: -13, width: "100%" },
                  closed: { rotate: [45, 0], y: 0 },
                  hover: { width: "60%" },
                  unHover: { width: "100%" },
                }}
                initial={false}
                animate={
                  isOpen
                    ? "open"
                    : isHover
                    ? "hover"
                    : !isHover
                    ? "unHover"
                    : "closed"
                }
                transition={{ duration: 0.8 }}
              ></motion.div>
            </motion.button>
            <motion.div
              class="navbar-mobile "
              id="navbarTogglerDemo02"
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: {
                  width: "100%",
                  height: "100vh",
                  x: 0,
                  transition: { duration: 0.8, delay: 1 },
                },
                closed: {
                  width: "0",
                  height: "100vh",
                  x: "-100",
                  transition: { duration: 1, delay: 1 },
                },
              }}
            >
              <motion.ul
                class="navbar-nav "
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: {
                    visibility: "visible",
                    transition: { duration: 1, delay: 1.3 },
                  },
                  closed: {
                    visibility: "hidden",

                    transition: { duration: 1, delay: 1.2 },
                  },
                }}
              >
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#education">
                    Resume
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li class="nav-item" href="#footer">
                  <a class="nav-link">Contact</a>
                </li>
              </motion.ul>
            </motion.div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Menu;
