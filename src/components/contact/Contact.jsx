import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xcjwbha",
        "template_s76yjdc",
        form.current,
        "8zP2ong5y_oF0-9i1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5 className="text-light">Get In Tach</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option--icon" />
            <h4>Email</h4>
            <h5 className="text-light">omidrashidifam@gmail.com</h5>
            <a
              href="mailto:omidrashidifam@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send an Email
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option--icon" />
            <h4>Whatsapp</h4>
            <h5 className="text-light">+98 920 4335 928</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+989204335928"
              target="_blank"
              rel="noreferrer"
            >
              Send an Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Email Addres"
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
