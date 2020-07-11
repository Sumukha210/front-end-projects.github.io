import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "./component/Card";
import "../counter/style.css";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row mx-auto mt-5">
          <div className="col-md-5 col-sm-8 mx-auto">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
