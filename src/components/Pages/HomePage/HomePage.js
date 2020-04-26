import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
    // use component did mount to dispatch an action to request the HomePage from the API
  }
  render() {
    const movieList = this.props.store.movieList.map((item, index) => {
      return (key={index} item={movieList} )
    });

    return (
      <div className="App">
        <div className="App-header"></div>
        <div>
          <h3>Movie List:</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ store });
export default connect(mapStateToProps)(HomePage);
