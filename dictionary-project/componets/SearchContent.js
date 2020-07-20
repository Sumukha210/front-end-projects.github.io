import React, { Component, Fragment } from "react";

export default class SearchContent extends Component {
  render() {
    const { word, pronunciation, definitions } = this.props;

    //there may be more than definitions for one word
    const result = definitions.map((item, i) => (
      <div className="col-md-9" key={i}>
        <h4 className=" font-weight-normal">{item.type}</h4>
        <p>
          {item.definition} {item.emoji}
        </p>
        <p className="font-weight-light text-secondary font-italic">
          {item.example && `"${item.example}"`}
        </p>
        <hr />
      </div>
    ));
    return (
      <Fragment>
        <div className="border-bottom border-dark-50">
          <h2>{word}</h2>
          <span className="text-secondary font-weight-light">
            /ˈ{pronunciation}'/
          </span>
        </div>
        <div className="row mt-4">
          {result}
          <div className="col-md-3"></div>
        </div>
      </Fragment>
    );
  }
}
