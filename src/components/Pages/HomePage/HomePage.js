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
    const movies = this.props.store.movies.map((item, index) => {
      return <MovieList key={index} movies={item} />;
    });

    return { movies };
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(HomePage);
