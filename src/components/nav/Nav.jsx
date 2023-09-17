import React from "react";

import "./nav.css";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiFolder } from "react-icons/bi";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <Link to="home" spy={true} smooth={true} offset={-50} duration={1000}>
        <AiOutlineHome />
      </Link>
      <Link to="about" spy={true} smooth={true} offset={-50} duration={1000}>
        <AiOutlineUser />
      </Link>
      <Link
        to="experience"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
      >
        <BiBook />
      </Link>
      <Link to="service" spy={true} smooth={true} offset={-50} duration={1000}>
        <RiServiceLine />
      </Link>
      <Link
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
      >
        <BiFolder />
      </Link>
      <Link to="contact" spy={true} smooth={true} offset={-50} duration={1000}>
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
