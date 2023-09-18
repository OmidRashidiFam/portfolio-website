import React from "react";

import "./experience.css";

import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="text-light">What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container container__experience">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>Html</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>Css</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>Bootstrap 5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>Tailwind Css</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>Sass</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Junior</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>MUI</h4>
                <small className="text-light">Bacic</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__others">
          <h3>Other Skills</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>OOP</h4>
                <small className="text-light">Junior</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>Agile Methodology</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>Responsive Design</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>English</h4>
                <small className="text-light">
                  Professional Working Proficiency
                </small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>Turkish</h4>
                <small className="text-light">
                  Limited Working Proficiency
                </small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail--icon" />
              <div>
                <h4>Persian</h4>
                <small className="text-light">Native Language</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
