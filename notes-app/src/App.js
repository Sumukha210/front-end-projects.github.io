import ReactDOM from "react-dom";
import React, { Component } from "react";
import Entry from "./components/Entry";
import "./style.css";

class App extends Component {
  render() {
    return <Entry />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
