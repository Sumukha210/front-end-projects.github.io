import React, { Component } from "react";

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  OnInc = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  OnDec = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  render() {
    return (
      <div className="card mt-5">
        <div className="card-body">
          <div className="card-text">
            <h1 className="text-center display-5 text-light">Counter</h1>
            <h3
              className="display-1 text-center mx-auto font-weight-normal"
              style={{ color: `${this.state.count < 0 ? "red" : "green"}` }}
            >
              {this.state.count}
            </h3>
            <div className="row mx-auto align-items-center justify-content-around">
              <button
                onClick={this.OnInc}
                className="btn col-sm-4 mx-auto btn-primary text-capitalize"
              >
                add count
              </button>
              <button
                onClick={this.OnDec}
                className="my-2 btn col-sm-4 mx-auto btn-info text-capitalize"
              >
                lower count
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
