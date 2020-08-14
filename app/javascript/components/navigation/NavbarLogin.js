import React from "react";

class NavbarLogin extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary justify-content-between ">
          <a className="navbar-brand text-white font-weight-bold" href="/">
            Poll-it
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link text-white" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/signup">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/login">
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default NavbarLogin;
