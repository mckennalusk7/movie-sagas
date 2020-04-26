import React from "react";
import { connect } from "react-redux";

const DetailsPage = (props) => {
  return (
    <div>
      <h2> Details Page!</h2>
    </div>
  );
};

export default connect(mapStateToProps)(DetailsPage);
