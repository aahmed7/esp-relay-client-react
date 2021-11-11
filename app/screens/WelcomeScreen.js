/* global require */
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <TouchableOpacity
        style={styles.switchButton}
        onPress={() => navigation.navigate("Switch")}
      >
        <Text style={styles.buttonText}>SWITCH</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.weatherButton}
        onPress={() => navigation.navigate("Weather")}
      >
        <Text style={styles.buttonText}>WEATHER</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  switchButton: {
    height: 70,
    backgroundColor: "red",
    alignItems: "center",
    padding: 25,
  },
  weatherButton: {
    height: 70,
    backgroundColor: "green",
    alignItems: "center",
    padding: 25,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});

export default WelcomeScreen;
