import React from "react"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"

const MapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 35.8233, lng: -80.2542 }}
      id="gmWidget"
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 35.8233, lng: -80.2542 }} />
      )}
    </GoogleMap>
  ))
)

export default MapComponent
