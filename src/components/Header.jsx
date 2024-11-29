<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
        <h1>TechStar.</h1>
        <main>
            <Link to={"/"}>Home</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/#about"}>About</Link>
            <Link to={"/#brands"}>Brands</Link>
            <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header
=======
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
>>>>>>> 1457b1129999546ad6fcbb0313136ec428bc85ce
