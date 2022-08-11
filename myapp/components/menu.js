import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
const Drawer = createDrawerNavigator();
export default function Menu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  return (
    <View style={{ flex: 1, fontSize: 30 }}>
      <Text style={{ color: "red" }}>Welcome to the Home!</Text>
    </View>
  );
}
function Login() {
  return (
    <View style={{ flex: 1, fontSize: 30 }}>
      <Text style={{ color: "red" }}>Welcome to the Login!</Text>
    </View>
  );
}
function Signup() {
  return (
    <View style={{ flex: 1, fontSize: 30 }}>
      <Text style={{ color: "red" }}>Welcome to the Signup!</Text>
    </View>
  );
}
function Settings() {
  return (
    <View style={{ flex: 1, fontSize: 30 }}>
      <Text style={{ color: "red" }}>Welcome to the Settings!</Text>
    </View>
  );
}
