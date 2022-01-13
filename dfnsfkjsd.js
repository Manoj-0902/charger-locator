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
import GeoLoc from "./android/app/src/app/components/GeoLoc";
import EVCharger from "./android/app/src/evCharger.json";
// import * as RNFS from "react-native-fs";

export default function App() {
  console.log("run");
  console.log(EVCharger);
  return (
    <View style={styles.container}>
      <GeoLoc />
      <Text>ev charger</Text>
      <StatusBar style="auto" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 12.148561,
          longitude: 77.652778,
        }}
      >
        {/* {EVCharger.map((data) => (
          <Marker
            key={data.id}
            position={[data.coordinates.latitude, data.coordinates.longitude]}
          >
            <Image
              source={require("./android/app/src/img/placeholder.png")}
              style={{ width: 50, height: 50 }}
            />

            <Callout>
              <View>
                <View>
                  <Text>{data.name}</Text>
                  <Text>{data.address}</Text>
                </View>
              </View>
            </Callout>
          </Marker>
        ))} */}
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
