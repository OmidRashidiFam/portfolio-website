import React from "react";

import "./About.css";

import ME from "../../assets/images/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <h5 className="text-light">Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me--img">
            <img src={ME} alt="Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__card--icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__card--icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__card--icon" />
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            corrupti fugit ullam ratione totam odio nulla quidem, tenetur
            molestiae accusantium illo voluptates quibusdam officiis, porro
            ipsum delectus eos error. Autem eligendi accusantium temporibus,
            obcaecati dolore sequi numquam placeat adipisci. Animi quibusdam
            commodi reprehenderit ad cupiditate nam a soluta esse voluptate.
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            className="btn btn-primary"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
