import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "../../MovieList/MovieList";
import Grid from "@material-ui/core/Grid";

import "./HomePage.css";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
    // use component did mount to dispatch an action to request the HomePage from the API
  }
  render() {
    //  I have changed this up 25 times, and I am still getting a 'not a function' error

    return (
      <div>
        {this.props.store.movieList.map((item, index) => {
          return <MovieList key={index} movies={item} />;
        })}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(HomePage);
