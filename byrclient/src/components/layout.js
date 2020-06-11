import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Layout = prop => {
  return (
    <div id="pageContainer">
      <Navbar />
      <div>{prop.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
