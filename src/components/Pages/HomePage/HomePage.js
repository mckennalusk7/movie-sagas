import React, { Component } from "react";
import { connect } from "react-redux";

class ListPage extends Component {
    state = {
     
    };
  
    componentDidMount() {
      this.props.dispatch({ type: "GET_LIST" });
    }
render() {
    
}





const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ListPage);