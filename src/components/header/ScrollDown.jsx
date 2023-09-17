import { Link } from "react-scroll";

function ScrollDown() {
  return (
    <Link
      to="about"
      spy={true}
      smooth={true}
      offset={-50}
      duration={1000}
      className="scroll__down"
    >
      Scroll Down
    </Link>
  );
}

export default ScrollDown;
