import React, { Component } from "react";
import "../src/scss/_navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top  navbar-expand-sm navbar-light bg-secondary mb-5">
        <div className="container">
          <a className="navbar-brand" href="#">
            victory
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  our menus
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  blog entries
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
