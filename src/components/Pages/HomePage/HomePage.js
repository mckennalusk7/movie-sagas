import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
    // use component did mount to dispatch an action to request the HomePage from the API
  }
  render() {
    {this.props.store.moviesReducer.map((item, index) => {
      return (key={index} item={movieList} )
    });

    return (
      <div>
        <header className="header">
          <h1 className="title"> THE GREATEST MOVIE LIST</h1>
        </header>
        <div className="body"></div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ store });
export default connect(mapStateToProps)(HomePage);
