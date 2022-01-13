import React from "react";
import { View } from "react-native-web";
import MapView from "react-native-maps";

class MapMarker extends React.Component {
  render() {
    const { coordinate } = this.props;
    return;
    <Marker coordinate={coordinate}>
      <Image
        source={require("./android/app/src/img/placeholder.png")}
        style={{ width: 50, height: 50 }}
      />
    </Marker>;
  }
}

export default MapMarker;
