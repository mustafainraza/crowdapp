import { View, Text, Image } from "react-native";
import React from "react";
import Start from "./components/start";
import Drawer_Nav from "./components/Drawer_Nav";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Start"
      >
        <Stack.Screen name="Drawer_Nav" component={Drawer_Nav}></Stack.Screen>
        <Stack.Screen name="Start" component={Start}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
