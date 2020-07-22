import React, { Component } from "react";

export default class Notes extends Component {
  state = {
    contentEditable: false,
    title: this.props.title,
    content: this.props.content,
    saveVisibile: false,
  };

  HandleInputs = () => {
    this.setState({ saveVisibile: true });
  };

  HandleEdit = () => {
    this.setState({ contentEditable: true, saveVisibile: true });
  };

  HandleSave = () => {
    this.setState({ contentEditable: false });
    this.props.titleArr({
      title: this.state.title,
      content: this.state.content,
    });
  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h2
                data-toggle="collapse"
                href={`#${this.props.id}`}
                aria-expanded="false"
                aria-controls={this.props.id}
                contentEditable={this.state.contentEditable}
                style={{ border: "none" }}
                onChange={this.HandleInputs}
              >
                {this.state.title}
              </h2>
            </div>
            <div className="card-text">
              <p
                id={this.props.id}
                className="collapse"
                contentEditable={this.state.contentEditable}
                style={{ border: "none" }}
                onChange={this.HandleInputs}
              >
                {this.state.content}
              </p>
              <div className="d-flex align-items-center justity-content-around">
                {" "}
                <button
                  className="btn btn-outline-info mr-3"
                  onClick={this.HandleEdit}
                >
                  Edit
                </button>
                {this.state.saveVisibile && (
                  <button
                    className="btn btn-outline-primary"
                    onClick={this.HandleSave}
                  >
                    save
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
