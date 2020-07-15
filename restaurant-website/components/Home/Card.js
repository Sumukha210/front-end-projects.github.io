import React, { Component } from "react";
import images from "../img/*.jpg";

export default class Card extends Component {
  render() {
    return (
      <div id="card" className="container mt-5 pt-4">
        <div className="row align-items-center mx-auto">
          <div className="col-md-6 ">
            <img src={images["about-img"]} className="img-fluid" />
          </div>
          <div className="col-md-6  mt-2 text-center">
            <h1>
              welcome to{" "}
              <span className="text-primary">victory restaurant</span>
            </h1>
            <p>little story</p>
            <div id="para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque auctor suscipit feugiat. Ut at pellentesque ante,
                sed convallis arcu. Nullam facilisis, eros in eleifend luctus,
                odio ante sodales augue, eget lacinia lectus erat et sem.
              </p>
              <p>
                Sed semper orci sit amet porta placerat. Etiam quis finibus
                eros. Sed aliquam metus lorem, a pellentesque tellus pretium a.
                Nulla placerat elit in justo vestibulum, et maximus sem pulvinar
              </p>
            </div>
            <button className="btn btn-primary text-light text-capitalize">
              reservation
            </button>
          </div>
        </div>
      </div>
    );
  }
}
