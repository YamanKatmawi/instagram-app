import React from "react";
import "./header.css";
class Header extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <a className="Nav-logo" href="/">
          Instagram
        </a>
      </nav>
    );
  }
}
export default Header;
