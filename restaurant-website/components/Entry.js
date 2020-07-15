import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "../components/Home/Home";
export default class Entry extends Component {
  render() {
    return (
      <div id="Entry" className="container-fluid w-100">
        <Navbar />
        <Home />
      </div>
    );
  }
}
