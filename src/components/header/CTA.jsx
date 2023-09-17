import CV from "../../assets/documents/Omid's Resume.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets Talk
      </a>
    </div>
  );
}

export default CTA;
