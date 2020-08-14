import React from "react";
import NavbarLogin from "./navigation/NavbarLogin";
import NavbarLogout from "./navigation/NavbarLogout";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser == null) {
      return (
        <>
          <NavbarLogin />
        </>
      );
    } else {
      return (
        <>
          <NavbarLogout />
        </>
      );
    }
  }
}

export default Header;
