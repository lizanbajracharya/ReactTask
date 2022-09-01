import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react-17";

const mapStyles = {
  width: "10%",
  height: "10%",
};

const MapContainer = ({ google, lat, lng }) => {
  console.log(lat, lng);
  return (
    <div>
      <Map
        google={google}
        centerAroundCurrentLocation={true}
        zoom={9}
        style={mapStyles}
        initialCenter={{
          lat: lat,
          lng: lng,
        }}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "Map Api",
})(MapContainer);
