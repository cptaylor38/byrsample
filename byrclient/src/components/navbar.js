import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <header>
      <img
        src={require("../images/byrlogotoblack.svg")}
        id="logo"
        alt="The Backyard Retreat"
      ></img>
      <div id="navLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/tips">News and Tips</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </header>
  )
}

export default Navbar
