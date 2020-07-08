import React, { Component } from "react";
import { connect } from "react-redux";

class Forecast extends Component {
  render() {
    return (
      <div>
        <p>This is forecast page</p>
      </div>
    );
  }
}

const mapPropsToState = state => ({
  auth: state.auth
});

export default connect(mapPropsToState)(Forecast);
