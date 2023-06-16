import { useState } from "react";
import { motion } from "framer-motion";

const Menu = () => {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg" id="home">
          <div className="container-md container-fluid px-0 col-11 col-md-12">
            <div className="navbar-brand-container ">
              <a className="navbar-brand" href="#home">
                <h3>MA</h3>
              </a>
            </div>

            <div
              className="navbar-desktop ms-md-auto mb-2 mb-lg-0 "
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav  ">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#education">
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#portfolio"
                    onClick={handleClick}
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
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
              className="navbar-mobile "
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
                className="navbar-nav "
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
                <li className="nav-item">
                  <motion.a
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    onClick={handleClick}
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </motion.a>
                </li>
                <li className="nav-item">
                  <motion.a
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    onClick={handleClick}
                    className="nav-link"
                    href="#about"
                  >
                    About
                  </motion.a>
                </li>
                <li className="nav-item">
                  <motion.a
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    onClick={handleClick}
                    className="nav-link"
                    href="#education"
                  >
                    Resume
                  </motion.a>
                </li>
                <li className="nav-item">
                  <motion.a
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    onClick={handleClick}
                    className="nav-link"
                    href="#services"
                  >
                    Services
                  </motion.a>
                </li>
                <li className="nav-item">
                  <motion.a
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    onClick={handleClick}
                    className="nav-link"
                    href="#portfolio"
                  >
                    Portfolio
                  </motion.a>
                </li>
                <li className="nav-item">
                  <motion.a
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    onClick={handleClick}
                    classNameNAme="nav-link"
                    href="#contact"
                  >
                    Contact
                  </motion.a>
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
