import React from "react";
import { View, Text, SafeAreaView, Button, Image } from "react-native";
import Geolocation from "react-native-geolocation-service";
import { PermissionsAndroid } from "react-native";

class GeoLoc extends React.Component {
  state = { currentLoc: {} };

  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "EV charger App",
          message: "EV charger App access to your location ",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
        alert("You can use the location");
      } else {
        console.log("location permission denied");
        alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  getPermision = (callback) => {
    this.requestLocationPermission()
      .then(() => callback(null))
      .catch((err) => callback(err));
  };

  componentDidMount() {
    this.getPermision((err) => {
      if (err) {
        console.log(err);
      } else {
        Geolocation.getCurrentPosition(
          (position) => {
            //   console.log(position);
            const { latitude = 0, longitude = 0 } = position.coords;
            console.log(latitude, longitude);
            this.setState({ currentLoc: { latitude, longitude } });
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    });
  }

  render() {
    const { currentLoc } = this.state;
    const { latitude, longitude } = currentLoc;
    return (
      <View>
        <Text>{latitude}</Text>
        <Text>{longitude}</Text>
      </View>
    );
  }
}

export default GeoLoc;
