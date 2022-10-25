import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Card } from "react-bootstrap";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0n241qb",
        "template_xo5j6n1",
        form.current,
        "Rb2SDJmg3mZ3f_HgG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container d-flex  justify-content-center">
      <Card className="w-75 ">
        <div className="card-header"> Send me an email</div>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <div className="m-2">
            <label className="form-label"></label>
            <input
              type="text"
              name="from_name"
              className="form-control"
              id="from_name"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>
          <div className="m-2">
            <input
              type="email"
              name="user_email"
              className="form-control"
              id="user_email"
              aria-describedby="emailHelp"
              placeholder="Email address"
            />
          </div>
          <div className="m-2">
            <textarea
              name="message"
              type="text"
              className="form-control"
              id="messageArea"
              placeholder="Message text"
              row="3"
            />
          </div>
          <div className="m-2 form-check"></div>
          <button type="submit" value="Send" className="btn btn-primary m-2">
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
