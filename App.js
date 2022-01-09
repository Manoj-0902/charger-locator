import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import GeoLoc from "./android/app/src/app/components/GeoLoc";

export default function App() {
  console.log("run");
  return (
    <View style={styles.container}>
      <GeoLoc />
      <Text>ev charger</Text>
      <StatusBar style="auto" />
      {/* <MapView style={styles.map} /> */}
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
