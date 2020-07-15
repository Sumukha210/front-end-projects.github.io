import React, { Component } from "react";
import "./Home.scss";
import images from "../img/*.jpg";

export default class Section extends Component {
  render() {
    return (
      <div className="container mt-5" id="section">
        <div className="container">
          <h2 className="text-left py-3 pl-3 text-secondary font-weight-normal mx-auto">
            book your table now
          </h2>
          <div className="row mx-auto">
            <div className="col-lg-6 col-md-6">
              <img src={images["book_left_image"]} alt="" />
            </div>
            <div className="col-lg-6 col-md-6 bg-light mx-auto form">
              <h2 className="text-center py-2 text-dark">reservation</h2>
              <div className="row mx-2">
                <select
                  className="col-md-5  mx-auto text-capitalize"
                  aria-label="Default select example"
                >
                  <option selected>select day</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select
                  className="col-md-5 mx-auto"
                  aria-label="Default select example"
                >
                  <option selected>select hour</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="row  mx-2">
                <input
                  type="text"
                  placeholder="full name"
                  className="col-md-5 mx-auto"
                />
                <input
                  type="text"
                  placeholder="phone number "
                  className="col-md-5 mx-auto"
                />
              </div>
              <div className="row">
                <select
                  className="col-md-5 mx-auto text-capitalize mx-2"
                  aria-label="Default select example"
                >
                  <option selected>number of persons</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <button className="btn btn-primary d-block text-light">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
