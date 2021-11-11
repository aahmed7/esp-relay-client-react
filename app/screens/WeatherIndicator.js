// /* global require */
import React from "react";
import { StyleSheet, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const MAX_POINTS = 500;

const WeatherIndicator = ({ progress }) => (
  <AnimatedCircularProgress
    fill={progress} // Current progress / fill
    size={200} //Width and height of circle
    arcSweepAngle={300} // If you don't want a full circle, specify the arc angle
    rotation={210} // Angle from which the progress starts from
    lineCap="round" // Shape used at ends of progress line.
    width={28} // Thickness of the progress line
    backgroundWidth={14} // Thickness of background circle
    backgroundColor="#CCCCCC"
    tintColor="#5d9cec" // Color of the progress line
    padding={10}
  >
    {(fill) => (
      <Text style={styles.points}>{Math.round((MAX_POINTS * fill) / 100)}</Text>
      // <div
      //   style={{
      //     alignItems: "center",
      //   }}
      // >
      //   <img
      //     style={{ width: 90, marginTop: -85, marginLeft: 80 }}
      //     src={require("../assets/temperature.png")}
      //   />
      // </div>
    )}
  </AnimatedCircularProgress>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  points: {
    textAlign: "center",
    color: "#7591af",
    fontSize: 50,
    fontWeight: "100",
  },
});

export default WeatherIndicator;
