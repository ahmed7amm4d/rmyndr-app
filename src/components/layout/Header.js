import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import { HiMenuAlt2 } from "react-icons/hi";

const Header = () => {
  return (
    <header className="header">
      <span className="header-menu">
        <HiMenuAlt2 className="header-menu-btn" />
      </span>
      <h1 className="header-title">
        <Link to="/">RMYNDR</Link>
      </h1>
    </header>
  );
};

export default Header;
