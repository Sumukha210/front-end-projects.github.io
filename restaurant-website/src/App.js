import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./scss/style.scss";
import Entry from "../components/Entry";
import ReactDOM from "react-dom";
import React, { Component } from "react";

const RenderLocation = document.getElementById("root");

ReactDOM.render(<Entry />, RenderLocation);
