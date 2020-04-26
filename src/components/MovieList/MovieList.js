import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import "./MovieList.css";

class MovieList extends Component {
  handleClickMovie = (id) => (event) => {
    this.props.history.push(`/details/${id}`);
  };

  render() {
    return (
      <div>
        <div className="images">
          <img
            className="movie_posterItem"
            onClick={this.handleClickMovie(this.props.movie.id)}
            src={this.props.movie.poster}
          />
        </div>

        {/* <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        ></Grid> */}
      </div>
    );
  }
}

export default withRouter(MovieList);
