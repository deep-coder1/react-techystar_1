import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        {/* <a href="/">home</a> */}
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </nav>
    </>
  );
}

export default Header;
