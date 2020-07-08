import React, { Component } from "react";

import "./landing.css";

// import landing components
import NavBar from "./navBar/navBar";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="landing">
        <NavBar></NavBar>
      </div>
    );
  }
}

export default Landing;
