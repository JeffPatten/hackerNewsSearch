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
      .then((res) =>  {
      if (res.ok) {
        return res.json();
      } else {
        // There was an error
        return Promise.reject(res);
      }})
      .then((result) => {
        this.setState({ items: result.hits }, () => {
          this.props.addToSearchHistory(this.state);
        });
      })
      .catch((err) => console.warn('Request Failed', err))
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
          value={this.state.searchTerm}
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