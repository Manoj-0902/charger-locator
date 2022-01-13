import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import { PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

export default function App() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} >
        <Marker
          coordinate={{
            latitude: 12.04,
            longitude: 77.09
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
        </MapView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });