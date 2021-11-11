/* global require */
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import WeatherIndicator from "./WeatherIndicator";

const WeatherScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.progress}>
        <WeatherIndicator progress={12} />
        <WeatherIndicator progress={18} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  progress: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  bar: {
    width: 200,
    height: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});

export default WeatherScreen;
