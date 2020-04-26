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
    return (
      <div>
        <h2> Details Page!</h2>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(DetailsPage);
