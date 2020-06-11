import React from "react"
import Map from "../components/map"
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const Footer = () => {
  return (
    <footer>
      <div id="links">
        <div>link 1</div>
        <div>link 2</div>
        <div>link 3</div>
        <p> api key: {process.env.gmKey}</p>
      </div>
      <div id="mapContainer">
        <Map
          isMarkerShown
          googleMapURL={process.env.GATSBY_gmURL}
          loadingElement={
            <div
              style={{
                height: `100%`,
                padding: "1rem",
                marginRight: "1em",
              }}
            />
          }
          containerElement={
            <div
              style={{
                height: `200px`,
                padding: "1rem",
                marginRight: "1em",
              }}
            />
          }
          mapElement={
            <div
              style={{
                height: `80%`,
                padding: "1rem",
                marginRight: "1em",
              }}
            />
          }
          id="mapComponent"
        />
      </div>
    </footer>
  )
}

export default Footer
