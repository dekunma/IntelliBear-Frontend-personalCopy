import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./navBar.css";

// Logo
import logo from "../../assets/logo/intellibear_logo_512.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="header" id="header">
        <div className="header-container flex">
          <div className="header-logo">
            <Link to="/">
              <img src={logo} alt="IntelliBear Logo"></img>
            </Link>
            <h1>
              <a href="#header">
                <span>Intellibear</span>
              </a>
            </h1>
          </div>
          <nav className="nav-menu">
            <ul>
              <li>
                <a href="#product">Product</a>
              </li>
              <li>
                <a href="#solutions">Solutions</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#demos">Demos</a>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
