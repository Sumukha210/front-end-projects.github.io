import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    // <!-- SIMPLE NAVBAR -->
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          Notes app
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/editor">
              Editor
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
