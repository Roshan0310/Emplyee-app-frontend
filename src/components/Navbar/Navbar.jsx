import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="#">
            Employee
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
          <div class="collapse navbar-collapse  nav1" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <Link to="/">
                <li class="nav-item">
                  <a
                    class="nav-link active navbar-text1 text-light"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link to="./AddEmployee">
                <li class="nav-item">
                  <a class="nav-link active  navbar-text1 text-light" href="">
                    Add-Employee
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
