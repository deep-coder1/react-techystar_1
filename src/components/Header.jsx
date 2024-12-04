import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link"

function Header() {
  return (
    <nav>
        <h1>TechStar.</h1>
        <main>
            <Link to={"/#home"}>Home</Link>
            <Link to={"/contact"}>Contact</Link>
            {/* <Link to={"/#about"}>About</Link> */}
            {/* <a href={"/#about"}>About</a> */}
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header