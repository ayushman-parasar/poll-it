import React from "react";
import PropTypes from "prop-types";
import Error from "../shared/Error";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      session: {
        email: "",
        password: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state.session;
    const payload = {
      session: {
        email,
        password,
      },
    };
    fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (res.status == 200) {
        window.location.href = "/";
      } else {
        this.setState({ errors: ["Invalid email and password"] });
      }
    });
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      session: {
        ...this.state.session,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron mt-5">
          <h1 className="text-primary p-3">Login Form</h1>

          <form onSubmit={this.handleSubmit}>
            {this.state.errors ? <Error errors={this.state.errors} /> : null}
            <div className="form-group font-weight-bold">
              <label for="exampleInputEmail1">Email address</label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={this.handleChange}
                placeholder="Enter email"
                value={this.state.session.email}
              />
              {/* <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
            </div>
            <div className="form-group font-weight-bold">
              <label for="exampleInputPassword1">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={this.handleChange}
                placeholder="Password"
                value={this.state.session.password}
              />
            </div>
            <div className="d-flex">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <a className="btn btn-success ml-2" href="/signup">
                Signup
              </a>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
