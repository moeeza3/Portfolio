import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="btn btn-close"></button>
      <div className="navG">
        <div className="nav-link">home</div>
        <div className="nav-link">About</div>
        <div className="nav-link">service</div>
      </div>
    </>
  );
};
export default Menu;
