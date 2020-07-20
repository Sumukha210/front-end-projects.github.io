import React, { Component } from "react";
import { TimerFun } from "./UtilFuns";
import Input from "./Input";

export default class Layout extends Component {
  //constructor is optional in react 16 above
  state = {
    isLoading: false,
    onInput: false,
    content: "",
  };
  timeoutid;

  HandleInput = (e) => {
    let searchInputBoxValue = e.target.value;
    this.setState({ isLoading: true, onInput: true });
    if (this.timeoutid) {
      clearTimeout(this.timeoutid);
    }
    TimerFun(this, searchInputBoxValue);
  };

  render() {
    const { onInput, isLoading, content } = this.state;
    return (
      <div className="card">
        <div className="card-header display-5 py-3 text-center bg-info text-capitalize font-weight-normal text-light">
          Mini dictionary
        </div>
        <div className="card-body">
          <Input HandleInput={this.HandleInput} />
          <h4>{onInput === false && "nothing to show......"}</h4>

          {isLoading && content === "" ? (
            <div className="spinner mx-auto"></div>
          ) : (
            content
          )}
        </div>
      </div>
    );
  }
}
