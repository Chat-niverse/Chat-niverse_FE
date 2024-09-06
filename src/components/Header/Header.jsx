import React from "react";
import Logo from "../../assets/Images/chatniverselogo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} className="header_logo" />
      <div className="header_project_name">Chat-Niverse</div>
    </header>
  );
};

export default Header;
