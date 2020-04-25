import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import HomePage from "../HomePage/HomePage";
import DetailsPage from "../DetailsPage/DetailsPage";
import EditPage from "../EditPage/EditPage";

import "./App.css";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
        <h1>Movie List</h1>
      </div>
    );
  }
}

export default App;
