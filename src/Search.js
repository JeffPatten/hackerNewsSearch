import React, { Component } from "react";

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
      items: [],
    };
  }

  handleSearch = () => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.search}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ items: result.hits });
      });
  };

  render() {
    return (
      <div>
        <label for="hackersearch">Search:</label>
        <input
          type="text"
          id="hackersearch"
          name="hackersearch"
          onChange={(e) => this.setState(e.target.value)}
        />
        <button onClick={this.handleSearch}>Search</button>

        {this.state.items.map((hit) => {
          <div>
            <h3>{hit.title}</h3>
            <a src={hit.url}>{hit.url}</a>
          </div>;
        })}
      </div>
    );
  }
}
