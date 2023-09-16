import { FiInstagram } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://instagram.com" rel="noreferrer">
        <FiInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BiLogoLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
