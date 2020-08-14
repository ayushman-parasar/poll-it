import React from "react";
import PropTypes from "prop-types";
import Error from "../shared/Error";
class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        remember_me: 0,
      },
    };
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let {
      name,
      email,
      password,
      password_confirmation,
      remember_me,
    } = this.state.user;
    const payload = {
      user: {
        name,
        email,
        password,
        password_confirmation,
        // remember_me,
      },
    };
    fetch("/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res, "err");
        if (res.notice) {
          window.location.href = "/login";
        } else {
          this.setState({
            errors: res.errors,
          });
        }
      });
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="jumbotron mt-5"
          style={{ background: "transparent !important" }}
        >
          <h1 className="text-primary">Signup Form</h1>
          <form onSubmit={this.handleSubmit}>
            {this.state.errors && this.state.errors.length > 0 ? (
              <Error errors={this.state.errors} />
            ) : null}

            <div className="form-group font-weight-bold">
              <label for="name">Name</label>
              <input
                name="name"
                onChange={this.handleChange}
                type="test"
                value={this.state.user.name}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group font-weight-bold">
              <label for="Email1">Email address</label>
              <input
                onChange={this.handleChange}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.user.email}
              />
            </div>
            <div className="form-group font-weight-bold">
              <label for="Password1">Password</label>
              <input
                onChange={this.handleChange}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={this.state.user.password}
              />
            </div>
            <div className="form-group font-weight-bold">
              <label for="Password1">Password Confirmation</label>
              <input
                onChange={this.handleChange}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password_confirmation"
                value={this.state.user.password_confirmation}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
