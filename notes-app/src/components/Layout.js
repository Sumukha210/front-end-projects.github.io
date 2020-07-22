import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Header } from "./Header";
import { InputGroup } from "./InputGroup";
import Editor from "./Editor";
import { AddNotesBtnVisibility, default_msg, MapNotes } from "./UtilFun";

export default class Layout extends Component {
  state = {
    Notes: [],
    editor: false,
    addNoteBtn: true,
  };

  HandleTitleArr = (val) => {
    let Notes = this.state.Notes;
    Notes.push(val);
    this.setState(() => {
      return {
        Notes,
      };
    });
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
          {default_msg(this)}
          {AddNotesBtnVisibility(this)}
          {MapNotes(this)}
        </div>
        {this.state.editor && (
          <Editor
            BackToHomeBtn={this.HandleBackToHome}
            titleArr={this.HandleTitleArr}
          />
        )}
        {console.log(this.state.Notes)}
      </div>
    );
  }
}
