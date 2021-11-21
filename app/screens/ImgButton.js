import bulbOn from "../assets/bulb-on.png";
import bulbOff from "../assets/bulb-off.png";
import bulbClient from "../api/bulb";

import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default class ImgButton extends Component {
  constructor() {
    super();
    this.state = { showBulbOn: bulbClient.loadBulbState() };
  }
  static navigationOptions = {
    header: null,
  };

  renderImage = () => {
    var imgSource = this.state.showBulbOn ? bulbOff : bulbOn;
    return <Image style={styles.icon} source={imgSource} />;
  };

  onPress = () => {
    this.setState({ showBulbOn: !this.state.showBulbOn });
    bulbClient.setBulbStateOnServer(this.state.showBulbOn);
  };

  render() {
    return (
      <View style={styles.items}>
        <TouchableOpacity onPress={this.onPress}>
          {this.renderImage()}
        </TouchableOpacity>
      </View>
    );
  }
}

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
