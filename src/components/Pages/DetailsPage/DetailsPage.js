import React, { Component } from "react";
import { connect } from "react-redux";

import "./DetailsPage.css";

class DetailsPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
  }

  handleBackButton = () => {
    console.log("clicked back, happened");
    this.props.history.push("/");
  };

  handleEditButton = () => {
    console.log("edit happened");
    this.props.push(`/edit/${this.props.match.params.id}`);
  };

  render() {
    // GET ID
    const id = Number(this.props.match.params.id);
    // GET Movie Reducers

    const getMovieSelection = this.props.store.moviesReducer.filter(
      (moviesReducer) => {
        return moviesReducer.id === id;
      }
    );

    return (
      <div>
        <button onCLick={this.handleBackButton}>Back</button>
        <button onClick={this.handleEditButton}>Edit</button>
        <div>
          {getMovieSelection.map((movies) => {
            return (
              <div key={movies.id}>
                <h2>{movies.title} </h2>
                <h4> {movies.description}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(DetailsPage);
