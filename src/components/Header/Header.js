import React from "react";
import "./Header.css";
import header from "../../assets/images/Header.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <header className="header">
        <img className="header-img" src={header} alt="RainAid" />
        </header>
    </Link>
  );
};

export default Header;
