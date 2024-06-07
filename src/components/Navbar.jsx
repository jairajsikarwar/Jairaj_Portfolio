import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center size-10 mx-10">
        <img src={logo} alt="" />
      </div>
      <div className="m-9 flex items-center justify-center gap-8 text-2xl">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hover"
          href="https://www.linkedin.com/in/jairaj-sikarwar-cs-15428b220/"
        >
          {" "}
          <FaLinkedin />
        </motion.a>
        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {" "}
          <FaGithub />{" "}
        </motion.span>
        <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {" "}
          <FaInstagram />{" "}
        </motion.span>
      </div>
    </nav>
  );
};

export default Navbar;
