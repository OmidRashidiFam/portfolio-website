import React from "react";

import "./portfolio.css";

import portfolio1 from "../../assets/images/portfolio-website.jpg";
import portfolio2 from "../../assets/images/portfolio2.jpg";
import portfolio3 from "../../assets/images/portfolio3.jpg";
import portfolio4 from "../../assets/images/portfolio4.jpg";
import portfolio5 from "../../assets/images/portfolio5.png";
import portfolio6 from "../../assets/images/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="text-light">My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item--img">
            <img src={portfolio1} alt="img" />
          </div>
          <h3>Portfolio WebSite</h3>
          <div className="portfolio__item--cta">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item--img">
            <img src={portfolio2} alt="img" />
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio__item--cta">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item--img">
            <img src={portfolio3} alt="img" />
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio__item--cta">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item--img">
            <img src={portfolio4} alt="img" />
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio__item--cta">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item--img">
            <img src={portfolio5} alt="img" />
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio__item--cta">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item--img">
            <img src={portfolio6} alt="img" />
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio__item--cta">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
