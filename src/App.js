import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./Search";
import History from "./History";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/history">
              <History />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
