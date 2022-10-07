import React from "react";
import profileImage from "../assets/profile-image.jpg";

function Navbar({ setCurrentPage }) {
  return (
    <div class="sticky-top">
      <nav
        class="navbar navbar-expand-lg rounded-3 m-1 border border-3"
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
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="d-flex position-static flex-grow-0 imageInfo m-2">
        <img
          src={profileImage}
          class="flex-shrink-0 me-3 proPhoto img-thumbnail rounded-circle flex-shrink-0 gx-2"
          alt="..."
        />
        <h3 class="mt-0 flex-grow-1 justify-content-evenly">Skills</h3>
      </div>
    </div>
  );
}

export default Navbar;
