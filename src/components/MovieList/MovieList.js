import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import "./MovieList.css";

class MovieList extends Component {
  handleClickMovie = (event) => {
    this.props.dispatch({
      type: "GET_DETAILS",
      payload: `/movies/${this.props.movieList.id}`,
    });
  };

  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        ></Grid>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({ reduxState });

export default withRouter(connect(mapReduxStateToProps)(MovieList));
