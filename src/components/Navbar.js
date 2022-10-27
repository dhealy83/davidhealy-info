import React from "react";
import profilePhoto from "../assets/profile-image.jpg";
import phoneIcon from "../assets/phoneIcon.png";
import linkIcon from "../assets/linkIcon.png";
import emailIcon from "../assets/emailIcon.png";
import dh from "../assets/dh.png";

function Navbar({ setCurrentPage }) {
  return (
    <div className="sticky-top">
      <nav
        className="navbar navbar-expand-lg rounded-3 m-2 border border-3"
        id="navbar"
      >
        <div className="container-fluid">
          <a className="navbar-brand"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={dh} alt="David Healy, DH logo." width="30" height="30" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  onClick={() => {
                    setCurrentPage("HomePage");
                  }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => {
                    setCurrentPage("Bio");
                  }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Biography
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => {
                    setCurrentPage("MyWork");
                  }}
                  className="nav-link active"
                  href="#"
                >
                  My Work
                </a>
              </li>
              <li className="nav-item active">
                <a
                  onClick={() => {
                    setCurrentPage("Contact");
                  }}
                  className="nav-link active"
                  href="#"
                >
                  Contact Me
                </a>
              </li>
              <li className="nav-item active">
                <a
                  onClick={() => {
                    setCurrentPage("Resume");
                  }}
                  className="nav-link active"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-flex flex-end imageInfo m-2 border border-3 col-sm-2">
        <img
          src={profilePhoto}
          className="flex-shrink-0 me-3 proPhoto img-thumbnail rounded-circle flex-shrink-0 gx-2"
          alt="Black and white photo of David Healy."
        />
        <div className="infoBadge">
          <div className="mt-0">
            <p className="fs-2 name ">David Healy</p> <br></br> Current City:
            Denver, Co <br></br>
            Born: 05/02/1983 <br></br>
            Birthplace: Port of Spain,<br></br> Trinidad and Tobago <br></br>
            <img
              src={phoneIcon}
              className="infoBadgeIcons"
              alt="Phone number is 954-461-1684"
            ></img>
            <a href="tel:+19544611684" className="link-dark">
              {" 954-461-1684"}
            </a>
            <br></br>
            <a
              href="mailto:drtjprdave@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="link-dark"
            >
              <img
                src={emailIcon}
                alt="Email address is drtjprdave@gmail.com"
                className="infoBadgeIcons"
              />
              {"  Mr.Healy.1983@gmail.com "}
            </a>
            <br></br>
            <a
              href="https://www.linkedin.com/in/david-healy-931583130/"
              target="_blank"
              rel="noreferrer"
              className="link-dark"
            >
              <img
                src={linkIcon}
                alt="Chain link icon."
                className="infoBadgeIcons"
              />
              {" LinkedIn"}
            </a>
            <br></br>
            <a
              href="https://github.com/dhealy83"
              target="_blank"
              rel="noreferrer"
              className="link-dark"
            >
              <img
                src={linkIcon}
                alt="Chain link icon."
                className="infoBadgeIcons"
              />
              {" Github"}
            </a>
          </div>
          <img
            src="https://www.codewars.com/users/dhealy83/badges/micro"
            className="codeWarsBadge"
            alt="Code wars badge."
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
