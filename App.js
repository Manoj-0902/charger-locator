import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import GeoLoc from "./components/GeoLoc";
import EVCharger from "./components/evCharger.json";
import MapMarker from "./components/MapMarker";
import pointer from "./assets/placeholder.png";
// import * as RNFS from "react-native-fs";

export default function App() {
  return (
    <View style={styles.container}>
      <GeoLoc />
      <Text>ev charger</Text>
      <StatusBar style="auto" />
      <MapView style={styles.map}>
        {EVCharger.chargers.map((charger) => {
          const { latitude, longitude } = charger.coordinates;
          console.log(charger.coordinates);
          return (
            <Marker
              coordinate={{
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
              }}
            >
              <Image source={pointer} style={{ width: 50, height: 50 }} />
            </Marker>
          );
        })}
        {/* <Marker
          coordinate={{
            latitude: 12.04,
            longitude: 77.08,
          }}
        >
          <Image
            source={require("./android/app/src/img/placeholder.png")}
            style={{ width: 50, height: 50 }}
          />

          <Callout>
            <View>
              <View>
                <Text>some station</Text>
                <Text>ev charging station</Text>
              </View>
            </View>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: 12.93728924092604,
            longitude: 77.61997330234742,
          }}
        >
          <Image
            source={require("./android/app/src/img/placeholder.png")}
            style={{ width: 50, height: 50 }}
          />
        </Marker> */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
