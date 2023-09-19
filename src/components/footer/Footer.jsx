import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsDribbble, BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <Link
        to="home"
        className="footer--logo"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
      >
        Omid Rashidifam
      </Link>
      <ul className="footer__links">
        <li>
          <Link to="home" spy={true} smooth={true} offset={-50} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/omidrashidifam"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.github.com/OmidRashidiFam"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/omid_rashidi_fam"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Omid Rashidifam! All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
