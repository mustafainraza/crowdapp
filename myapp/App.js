import { View, Text, Image } from "react-native";
import React from "react";
import Start from "./components/start";
import Drawer_Nav from "./components/Drawer_Nav";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./components/Details";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Drawer_Nav"
          component={Drawer_Nav}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Cameron",
            headerShown: true,
            headerStyle: {
              height: 80,
              backgroundColor: "#F23B25",
            },
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
