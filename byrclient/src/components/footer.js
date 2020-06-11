import React from "react"
import Map from "../components/map"

const Footer = () => {
  const url = `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_gmKey}&v=3.exp&libraries=geometry,drawing,places`
  return (
    <footer>
      <div id="links">
        <div>link 1</div>
        <div>link 2</div>
        <div>link 3</div>
      </div>
      <div id="mapContainer">
        <Map
          isMarkerShown
          googleMapURL={url}
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
