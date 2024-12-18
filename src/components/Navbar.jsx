import React from "react";
import logo from "../assets/sl1.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex item-center justify-between py-9">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2 " width={150} height={33} />
        </a>
      </div>
      <div className="m-8  flex item-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/shreyasling-s-5447ab25b/"
          target="blank"
          rel="noopener noreferrer"
          aria-label="LinkdedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shreyasling"
          target="blank"
          rel="noopener noreferrer"
          aria-label="LinkdedIn"
        >
          <FaGithub />
        </a>
        <a
          href="linkdin.com"
          target="blank"
          rel="noopener noreferrer"
          aria-label="LinkdedIn"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/ShreyaslingS"
          target="blank"
          rel="noopener noreferrer"
          aria-label="LinkdedIn"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
