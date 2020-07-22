import React, { Component } from "react";

export default class Editor extends Component {
  state = {
    title: "",
    content: "",
    saved: false,
  };

  HandleSave = () => {
    console.log(this.state.title);
    this.setState({ saved: true, title: "", content: "" });
    this.props.titleArr(this.state.title);
  };

  HandleRemove = () => {
    console.log("remove button");
  };

  HandleBackToHome = () => {
    this.state.saved === false && this.props.titleArr(this.state.title);
    this.props.BackToHomeBtn();
  };

  HandleInputs = (e) => {
    if (e.target.name === "note_title") {
      let title = e.target.value;
      this.setState(() => {
        return {
          title,
        };
      });
    } else if (e.target.name === "note_text") {
      let content = e.target.value;
      this.setState(() => {
        return {
          content,
        };
      });
    }
  };

  render() {
    return (
      <div className="container mx-auto my-5 px-3">
        <a
          href="#"
          onClick={this.HandleBackToHome}
          className="btn btn-outline-primary"
        >
          Back to home
        </a>
        <h2 className="text-center display-6 font-italic">Editor</h2>
        <hr />
        <form>
          <input
            type="text"
            name="note_title"
            className="form-control"
            placeholder="Note title..."
            onChange={this.HandleInputs}
            value={this.state.title}
          />
          <textarea
            name="note_text"
            placeholder="enter Note content..."
            cols="30"
            rows="10"
            className="form-control my-3"
            aria-label="With textarea"
            onChange={this.HandleInputs}
            value={this.state.content}
          ></textarea>
        </form>
        <div className="d-flex align-items-center justify-content-around">
          <button className="btn btn-outline-info" onClick={this.HandleSave}>
            Save{" "}
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={this.HandleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}
