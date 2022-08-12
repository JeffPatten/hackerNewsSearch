import React, { Component } from "react";
import { connect } from "react-redux";
import { addSearch } from "./dux/searchHistory";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      items: [],
    };
  }

  handleSearch = () => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ items: result.hits }, () => {
          this.props.addToSearchHistory(this.state);
        });
      })
  };

  render() {
    return (
      <div>
        <label htmlFor="hackersearch">Search:</label>
        <input
          type="text"
          id="hackersearch"
          name="hackersearch"
          onChange={(e) => this.setState({ searchTerm: e.target.value })}
        />
        <button onClick={this.handleSearch}>Search</button>

        {this.state.items.map((elem, i) => {
          return (
            <div key={ i }>
              <h3>{elem.title}</h3>
              <a href={elem.url}>{elem.url}</a>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sessionHistory: state.searchHistory
  }
}

const actionCreators = {
  addToSearchHistory: addSearch
}

export default connect(mapStateToProps, actionCreators)(Search);