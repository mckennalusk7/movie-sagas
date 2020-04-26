import React, { Component } from "react";
import { connect } from "react-redux";

import "./HomePage.css";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
    // use component did mount to dispatch an action to request the HomePage from the API
  }
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="title"> THE GREATEST MOVIE LIST</h1>
        </header>
        <div>
          {this.props.store.moviesReducer.map((movieList) => {
            <MovieList key={movieList.id} movieList={movieList} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ store });
export default connect(mapStateToProps)(HomePage);
