/* global require */

import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import ImgButton from "./ImgButton";

const SwitchScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.items}>
        <ImgButton />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  items: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  icon: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    margin: 60,
  },
  switch: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
  },
});

export default SwitchScreen;
