import React from "react";
import "./nav.css"

export default function Navb() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          News
        </a>
        <button
          className="position-absolute top-o end-0 navbar-toggler bg-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation text-bg-dark"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <br/>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-sm">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Science
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
