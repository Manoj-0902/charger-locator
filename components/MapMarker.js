import React from "react";
import { Image } from "react-native";
import { Marker } from "react-native-maps";
import pointer from "../assets/placeholder.png";

class MapMarker extends React.Component {
  render() {
    const { coordinate } = this.props;
    const { latitude, longitude } = coordinate;
    console.log("lat", latitude, longitude);
    return (
      <Marker
        coordinate={{
          latitude: 12.93728924092604,
          longitude: 77.61997330234742,
        }}
      >
        <Image
          source={require("../assets/placeholder.png")}
          style={{ width: 50, height: 50 }}
        />
      </Marker>
    );
  }
}

export default MapMarker;
