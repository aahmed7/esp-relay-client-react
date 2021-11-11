/* global require */

import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Switch } from "react-native";

const SwitchScreen = () => {
  const bulbOnImg = require("../assets/bulb-on.png");
  const bulbOffImg = require("../assets/bulb-off.png");
  const bulbImages = { bulbOffImg, bulbOnImg };

  const [selected, setSelected] = useState(bulbImages.bulbOffImg);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    isEnabled
      ? setSelected(bulbImages.bulbOffImg)
      : setSelected(bulbImages.bulbOnImg);
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image style={styles.icon} source={selected} />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  switch: {
    width: 150,
    height: 150,
  },
});

export default SwitchScreen;
