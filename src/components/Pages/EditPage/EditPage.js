import React, { Component } from "react";
import { connect } from "react-redux";

import "./EditPage.css";

class EditPage extends Component {
  state = {
    movieSelection: {
      title: "",
      description: "",
    },
  };

  //   mount components
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
  }

  //  User edits will be inputed on event handler to be stored
  handleEditEvent = (inputEdits) => (event) => {
    this.setState({
      movieSelection: {
        ...this.state.movieSelection,
        [inputEdits]: event.target.value,
      },
    });
  };

  //   User edits made will now be updated
  handleClickSave = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "UPDATE_MOVIES",
      payload: this.state.movieSelection,
    });
    this.props.history.push(`/movies/${this.props.params.id}`);
  };

  handleClickCancel = (event) => {
    this.setState({
      movieSelection: {
        title: "",
        description: "",
      },
    });
    this.props.history.push(`/movies/${this.props.params.id}`);
  };

  render() {
    // Inputs for the user to make movie edits

    return (
      <div>
        <h1> Edit Movies Page</h1>
        <div>
          <button onClick={this.handleClickCancel}>Cancel Edit</button>
          <button onClick={this.handleClickSave}>Save Edit</button>
          <br />
          <input
            type="text"
            placeholder="Edit Title"
            onChange={(event) => this.handleEditEvent(event, "title")}
          ></input>
          <input
            type="text"
            placeholder="Edit Description"
            onChange={(event) => this.handleEditEvent(event, "description")}
          ></input>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
