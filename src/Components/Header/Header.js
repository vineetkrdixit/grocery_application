import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

export default function Header() {
  return (
    <div>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <ul className="Header-LI d-flex">
            <Link to="/home" style={{ color: "none", textDecoration: "none" }}>
              <li>
                <p>Home</p>
              </li>
            </Link>
            <Link
              to="/aboutus"
              style={{ color: "none", textDecoration: "none" }}
            >
              <li>
                <p>About Us</p>
              </li>
            </Link>
            <Link
              to="contactus"
              style={{ color: "none", textDecoration: "none" }}
            >
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link to="/" class="navbar-brand">
            LOGO
          </Link>
        </div>
      </nav>
    </div>
  );
}
