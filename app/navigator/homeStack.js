import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SwitchScreen from "../screens/SwitchScreen";
import WeatherScreen from "../screens/WeatherScreen";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{
            title: "ESP Home App",
            headerTransparent: true,
            headerBlurEffect: "light",
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Switch"
          component={SwitchScreen}
          options={{
            title: "Bulb Switch",
            headerTransparent: true,
            headerBlurEffect: "light",
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Weather"
          component={WeatherScreen}
          options={{
            title: "Weather Station",
            headerTransparent: true,
            headerBlurEffect: "light",
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
