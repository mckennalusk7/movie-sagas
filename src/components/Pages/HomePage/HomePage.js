import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
    // use component did mount to dispatch an action to request the HomePage from the API
  }
  render() {
    return (
      <div>
        <h3>Movies Listed Here</h3>
        <div>{this.props.store.movieReducer.map}</div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ store });
export default connect(mapStateToProps)(HomePage);
