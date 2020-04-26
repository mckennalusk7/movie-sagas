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
      <div>
        <div>
          <header className="header">
            <h1 className="title"> THE GREATEST MOVIE LIST</h1>
          </header>
        </div>
        <div>
          <Router>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/details:id" component={DetailsPage} />
            <Route exact path="/edit:id" component={EditPage} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
