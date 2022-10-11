import React from "react";
import profileImage from "../assets/profile-image.jpg";
import phoneIcon from "../assets/phoneIcon.png";
import linkIcon from "../assets/linkIcon.png";
import emailIcon from "../assets/emailIcon.png";

function Navbar({ setCurrentPage }) {
  return (
    <div class="sticky-top">
      <nav
        class="navbar navbar-expand-lg rounded-3 m-2 border border-3"
        id="navbar"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            David Healy
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  onClick={() => {
                    setCurrentPage("HomePage");
                  }}
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  onClick={() => {
                    setCurrentPage("Bio");
                  }}
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Biography
                </a>
              </li>
              <li class="nav-item">
                <a
                  onClick={() => {
                    setCurrentPage("MyWork");
                  }}
                  class="nav-link active"
                  href="#"
                >
                  My Work
                </a>
              </li>
              <li class="nav-item active">
                <a
                  onClick={() => {
                    setCurrentPage("Contact");
                  }}
                  class="nav-link active"
                  href="#"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="d-flex position-static flex-grow-0 imageInfo m-2 border border-3">
        <img
          src={profileImage}
          class="flex-shrink-0 me-3 proPhoto img-thumbnail rounded-circle flex-shrink-0 gx-2"
          alt="Black and white photo of David Healy."
        />
        <div class="infoBadge">
          <p class="mt-0">
            David Healy <br></br> Current City: Denver, Co <br></br>
            Born: 05/02/1983 <br></br>
            Birthplace: Port of Spain,<br></br> Trinidad and Tobago <br></br>
            <img src={phoneIcon} class="infoBadgeIcons"></img>
            <a href="tel:+19544611684">{" 954-461-1684"}</a>
            <br></br>
            <a href="mailto:drtjprdave@gmail.com" target="_blank">
              <img
                src={emailIcon}
                alt="Email adress is drtjprdave@gmail.com"
                class="infoBadgeIcons"
              />
              {"  Mr.Healy.1983@gmail.com "}
            </a>
            <br></br>
            <a
              href="https://www.linkedin.com/in/david-healy-931583130/"
              target="_blank"
            >
              <img
                src={linkIcon}
                alt="Chain link icon."
                class="infoBadgeIcons"
              />
              {" LinkedIn"}
            </a>
            <br></br>
            <a href="https://github.com/dhealy83" target="_blank">
              <img
                src={linkIcon}
                alt="Chain link icon."
                class="infoBadgeIcons"
              />
              {" Github"}
            </a>
          </p>
          <img
            src="https://www.codewars.com/users/dhealy83/badges/micro"
            class="codeWarsBadge"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
