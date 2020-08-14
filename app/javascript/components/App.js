import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePoll from "./polls/CreatePoll";
import Home from "./polls/Home";
import Poll from "./polls/Poll";
import NavbarLogin from "./navigation/NavbarLogin";
import Signup from "./user/Signup";
import Login from "./user/Login";

class App extends React.Component {
  componentDidMount() {
    // fetch("/sessions", {
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res, "cdm App"));
  }
  render() {
    return (
      <Router>
        <NavbarLogin />
        <Switch>
          <Route exact path="/polls/new">
            <CreatePoll />
          </Route>
          <Route exact path="/polls/:id">
            <Poll />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
