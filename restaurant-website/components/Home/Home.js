import React, { Component, Fragment } from "react";
import "./Home.scss";
import Hero from "../Home/Hero";
import Card from "./Card";
import Section from "./Section";
import Gallary from "./Gallary";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Card />
        <Section />
        <Gallary />
      </Fragment>
    );
  }
}
