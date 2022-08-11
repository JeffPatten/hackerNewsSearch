import React, { Component } from "react";

export default class History extends Component {
  constructor() {
    super();

    this.state = {
      searchTerms: []
    };
  }

  render() {
    return (
      <div>
        {this.state.searchTerms.map(query => {
          (
            <h4>{query}</h4>
          )
        })}
      </div>
    );
  }
}
