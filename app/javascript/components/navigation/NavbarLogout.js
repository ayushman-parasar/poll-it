import React from "react";

class NavbarLogout extends React.Component {
  handleClick = () => {
    fetch("/logout", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
    }).then((res) => {
      if (res.status == 200) {
        window.location.href = "/";
      }
    });
  };
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
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
                <a className="nav-link text-white" href="/polls/new">
                  Create Poll
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  My Polls
                </a>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Account
                </a>
                <div
                  className="dropdown-menu text-primary"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <button
                    className="dropdown-item text-primary"
                    onClick={this.handleClick}
                  >
                    Logout
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default NavbarLogout;
