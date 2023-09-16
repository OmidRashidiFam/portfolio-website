import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/images/me.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5 className="text-light">Hello I'm</h5>
        <h1>Omid Rashidifam</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="ME" />
        </div>
        <ScrollDown />
      </div>
    </header>
  );
};

export default Header;
