import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Leaf from "./leafIcon"

const Navbar = () => {
  const [isTop, setPosition] = useState(true)
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const top = window.scrollY < 100
      if (top !== isTop) setPosition(top)
    })
  }, [isTop])
  return (
    <header style={isTop ? { background: "none" } : { background: "beige" }}>
      <img
        src={require("../images/byrlogotoblack.svg")}
        id="logo"
        alt="The Backyard Retreat"
      ></img>
      <div id="navLinks">
        <Link to="/">Home</Link>
        <Leaf />
        <Link to="/about">About Us</Link>
        <Leaf />
        <Link to="/tips">News and Tips</Link>
        <Leaf />
        <Link to="/contact">Contact Us</Link>
      </div>
    </header>
  )
}

export default Navbar
