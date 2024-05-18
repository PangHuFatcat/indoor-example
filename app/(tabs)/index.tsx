import { Image, StyleSheet, Platform, SafeAreaView } from "react-native"

import { HelloWave } from "@/components/HelloWave"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import MapView from "react-native-maps"

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }}></MapView>
      {/* <ThemedView style={{ flex: 1 }}></ThemedView> */}
    </ThemedView>
  )
}
