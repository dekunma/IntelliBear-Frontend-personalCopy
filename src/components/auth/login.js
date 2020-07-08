import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";

// Logo
import logo from "../assets//logo/intellibear_logo_512.png";

// import css
import "./login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  // click funtion for login button
  onSubmit = (e) => {
    // prevent page from refreshing
    e.preventDefault();

    // store login input data
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userData);
    this.props.loginUser(userData);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      console.log("successfully logged in");
      this.props.history.push("/admin");
    }
  }

  // if user is logged in, push it back to the landing page
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/admin");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="loginPage">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="IntelliBear Logo"></img>
          </Link>
          <h1>
            <Link to="/">
              <span>Intellibear</span>
            </Link>
          </h1>
        </div>
        <div className="login">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
                autoComplete="on"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <br />
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                autoComplete="on"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
