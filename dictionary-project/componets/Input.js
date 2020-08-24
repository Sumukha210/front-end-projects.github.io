<<<<<<< HEAD
import React, { Component } from "react";
import Svg from "./Svg";

export default class Input extends Component {
  render() {
    return (
      <div className="input-group mb-3 ">
        <input
          type="text"
          className="form-control border border-info"
          placeholder="Enter the word...."
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="searchInputBox"
          onInput={this.props.HandleInput}
          autoComplete="off"
        />
        <span className="input-group-text text-light bg-info" id="basic-addon1">
          <Svg />
        </span>
      </div>
    );
  }
}
=======
import React, { Component } from "react";
import Svg from "./Svg";

export default class Input extends Component {
  render() {
    return (
      <div className="input-group mb-3 ">
        <input
          type="text"
          className="form-control border border-info"
          placeholder="Enter the word...."
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="searchInputBox"
          onInput={this.props.HandleInput}
          autoComplete="off"
        />
        <span className="input-group-text text-light bg-info" id="basic-addon1">
          <Svg />
        </span>
      </div>
    );
  }
}
>>>>>>> c74eb05692d2255ff8abe737d2fce3d1bf8e2f5b
