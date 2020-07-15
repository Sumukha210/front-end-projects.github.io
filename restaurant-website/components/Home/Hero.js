import React, { Component, Fragment } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div className="mt-5" id="Hero">
        <div className="container mx-auto">
          <div className="row pt-5">
            <div className="col-md-8 text-center pt-5 mx-auto">
              <h6 className="text-secondary">
                here you can find delecious foods
              </h6>
              <h1 className="display-2 text-light font-weight-bolder">
                Asian Restaurant
              </h1>
              <p className="text-secondary pt-1">
                Quisque nec nibh id lacus fringilla eleifend sed sit amet sem.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, odit.
              </p>
              <button className="btn btn-primary text-light text-capitalize mt-2">
                order right now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
