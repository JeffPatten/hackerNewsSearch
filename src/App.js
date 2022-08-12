import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Search";
import History from "./History";
import Navbar from "./Navbar";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
