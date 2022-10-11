import React from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  var templateParams = {
    name: "James",
    notes: "Check this out!",
  };

  emailjs.send("service_0n241qb", "service_0n241qb", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );

  return (
    <form class="container contactForm">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"></label>
        <input
          type="text"
          name="contact_number"
          class="form-control"
          id="userName"
          aria-describedby="emailHelp"
          placeholder="Name"
        />
      </div>
      <div class="mb-3">
        <input
          type="email"
          name="user_email"
          class="form-control"
          id="userEmail"
          aria-describedby="emailHelp"
          placeholder="Email address"
        />
      </div>
      <div class="mb-3">
        <textarea
          type="text"
          class="form-control"
          id="messageArea"
          placeholder="Message text"
          row="3"
        />
      </div>
      <div class="mb-3 form-check"></div>
      <button type="submit" value="send" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Contact;
