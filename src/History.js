import React, { Component } from "react";
import { connect } from 'react-redux';

class History extends Component {
  constructor() {
    super();

    this.state = {
      searchTerms: []
    };
  }

  render() {


    let displayedHistory = this.props.sessionHistory.map( (searchCompleted, index) => {
      let {searchTerm, items } = searchCompleted;
      return (
        <div key={ index }>
          <h1> { searchTerm } </h1>
          {items.map((elem, i ) => {
          return (
            <div key={i}>
              <h4>{elem.title}</h4>
              <a href={elem.url}>{elem.url}</a>
            </div>
          );
        })}

        </div>
      )
    })

    return (
      <div>
        {/* {this.props.sessionHistory.map(query => (
            <h4 key={query}>{query}</h4>
          )
        )} */}
        {displayedHistory}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sessionHistory: state.searchHistory
  }
}

export default connect(mapStateToProps)(History);