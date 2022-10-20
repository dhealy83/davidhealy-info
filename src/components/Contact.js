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
        "K6Do4-G7AjdaiLgmd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="container d-flex  justify-content-center">
      <Card className="w-75 ">
        <div class="card-header"> Send me an email</div>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <div className="m-2">
            <label for="exampleInputEmail1" className="form-label"></label>
            <input
              type="text"
              name="contact_number"
              className="form-control"
              id="userName"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>
          <div className="m-2">
            <input
              type="email"
              name="user_email"
              className="form-control"
              id="userEmail"
              aria-describedby="emailHelp"
              placeholder="Email address"
            />
          </div>
          <div className="m-2">
            <textarea
              type="text"
              className="form-control"
              id="messageArea"
              placeholder="Message text"
              row="3"
            />
          </div>
          <div className="m-2 form-check"></div>
          <button type="submit" value="send" className="btn btn-primary m-2">
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
