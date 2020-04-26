import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage/HomePage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import EditPage from "../Pages/EditPage/EditPage";

import "./App.css";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details:id" component={DetailsPage} />
          <Route exact path="/edit:id" component={EditPage} />
        </Router>
        <h1>Movie List</h1>
      </div>
    );
  }
}

export default App;
