import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authAction";

// import styling sheet
import "./App.css";

// import redux store
import store from "./store";

// import components
import Landing from "./components/landingLayout/landing";
import Login from "./components/auth/login";
import Dashboard from "./components/dashboard/dashboard";
import PrivateRoute from "./utils/privateRoute.js";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds

  // if (true) store.dispatch(logoutUser());

  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute path="/admin" component={Dashboard} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}
export default App;
