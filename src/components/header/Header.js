import React from "react";
import "./header.css";
class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Instagram-logo">
          <img src="./img/instagram.png" alt="Logo" />
        </div>
        <div className="search-logo">
          <button>
            {" "}
            <i class="fas fa-search"></i>search
          </button>
        </div>
        <ul className="header-icons">
          <div>
            <i class="fas fa-home"></i>
            <i class="far fa-paper-plane"></i>
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
          </div>
        </ul>
      </div>
    );
  }
}
export default Header;
