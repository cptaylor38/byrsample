import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [isTop, setPosition] = useState(true)
  useEffect(() => {
    let mounted = true
    if (mounted) {
      document.addEventListener("scroll", () => {
        const top = window.scrollY < 10
        if (top !== isTop) setPosition(top)
      })
    }

    return () => (mounted = false)
  }, [isTop])

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
        <Link to="/tips">Gardening Tips</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </header>
  )
}

export default Navbar
