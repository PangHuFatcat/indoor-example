import { Image, StyleSheet, Platform, SafeAreaView } from "react-native"

import { HelloWave } from "@/components/HelloWave"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import MapView from "react-native-maps"

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
      ></MapView>
      {/* <ThemedView style={{ flex: 1 }}></ThemedView> */}
    </ThemedView>
  )
}
