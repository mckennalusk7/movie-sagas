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
    this.props.dispatch({ type: "GET_LIST" });
  }

  //  User edits will be inputed on event handler to be stored
  handleEditEvent = (inputEdits) => (event) => {
    this.setState({
      movieSelection: {
        ...this.state.movieSelection,
        inputEdits: event.target.value,
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
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
