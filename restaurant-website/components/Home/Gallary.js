import "./Home.scss";
import images from "../img/*.jpg";
import React, { Component } from "react";

const GallaryImg = (props) => {
  return (
    <div className="card col-md-4">
      <figure>
        <img src={images[props.name]} className="card-img-top" />
      </figure>
    </div>
  );
};

export default class Gallary extends Component {
  render() {
    return (
      <div className="container mt-5 " id="gallary">
        <h1 className="text-center mb-4" id="gallary-name">
          Gallary
        </h1>
        <div className="row">
          <GallaryImg name="gallery-img-01" />
          <GallaryImg name="gallery-img-02" />
          <GallaryImg name="gallery-img-03" />
          <GallaryImg name="gallery-img-04" />
          <GallaryImg name="gallery-img-05" />
          <GallaryImg name="gallery-img-06" />
        </div>
      </div>
    );
  }
}
