import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Header } from "./Header";
import { InputGroup } from "./InputGroup";
import Editor from "./Editor";

export default class Layout extends Component {
  state = {
    note_title: [],
    editor: false,
    addNoteBtn: true,
  };

  HandleTitleArr = (val) => {
    this.setState(
      () => {
        return {
          note_title: note_title.push(val),
        };
      },
      () => console.log(this.state.note_title)
    );
  };

  HandleBackToHome = () => {
    this.setState({ editor: false, addNoteBtn: true });
  };

  HandleSelect = (e) => {
    switch (e.target.value) {
      case "edited":
        console.log("edited");
        break;
      case "created":
        console.log("created");
        break;
      case "alphabetic":
        console.log("alphabetic");
        break;
    }
  };

  HandleAddNote = () => {
    this.setState({ editor: true, addNoteBtn: false });
  };

  render() {
    return (
      <div className="container-fluid" id="container">
        <Header />
        <InputGroup HandleSelect={this.HandleSelect} />
        <div id="addNoteBtnContainer">
          {!this.state.note_title.length && (
            <h5>
              {this.state.note_title.length > 0
                ? `There is ${this.state.note_title.length} notes`
                : "there is no notes to show..."}
            </h5>
          )}
          {this.state.addNoteBtn && (
            <button
              onClick={this.HandleAddNote}
              className="btn-info text-capitalize mt-2 p-2 font-weight-normal"
            >
              add note
            </button>
          )}
          <ul>
            {this.state.note_title.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        {this.state.editor && (
          <Editor
            BackToHomeBtn={this.HandleBackToHome}
            titleArr={this.HandleTitleArr}
          />
        )}
      </div>
    );
  }
}
