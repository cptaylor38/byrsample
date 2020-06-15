import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

const Layout = prop => {
  return (
    <div id="pageContainer">
      <Helmet>
        <meta
          name="description"
          content="Lexington's most unique garden, home and gift shop!"
        ></meta>
        <meta
          name="keywords"
          content="Home, Garden, Lexington, North Carolina, Backyard, Retreat"
        ></meta>
        <meta name="author" content="The Backyard Retreat"></meta>
        <meta name="robots" content="index, follow"></meta>
        <link rel="icon" href={require("../images/byrlogo.jpg")}></link>
      </Helmet>
      <Navbar />
      <div>{prop.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
