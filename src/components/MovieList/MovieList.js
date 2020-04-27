import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import Grid from "@material-ui/core/Grid";

import "./MovieList.css";

class MovieList extends Component {
  handleClickMovie = (id) => (event) => {
    this.props.history.push(`/details/${id}`);
  };

  render() {
    return (
      <div>
        <div> </div>
        <div className="container">
          <div className="movie_posterTitle">
            <h2> {this.props.movies.title} </h2>
          </div>

          <div className="movie_posterImage">
            <img
              className="movie_posterClick"
              onClick={this.handleClickMovie(this.props.movies.id)}
              src={this.props.movies.poster}
            />
          </div>

          <div className="movie_posterDescription">
            <h4> {this.props.movies.description}</h4>
          </div>
        </div>
      </div>
    );
  }
}
// {/* <Grid
//   container
//   direction="row"
//   justify="center"
//   alignItems="center"
// ></Grid> */}

export default withRouter(MovieList);
