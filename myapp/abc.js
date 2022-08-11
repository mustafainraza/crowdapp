import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
export default function He2() {
  return (
    <NavigationContainer>
      <View style={{ height: 40, backgroundColor: "#f5f5f5" }} />
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: "front",
          headerTintColor: { color: "white" },
          headerStyle: {
            height: 80,
            backgroundColor: "#F23B25",
          },

          headerTitleStyle: {
            color: "black",
          },
          drawerActiveBackgroundColor: "pink",
          drawerActiveTintColor: "red",
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="All_Project" component={All_Project} />
        <Drawer.Screen name="Guide" component={Guide} />
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
function All_Project() {
  return (
    <View style={{ flex: 1, fontSize: 30 }}>
      <Text style={{ color: "red" }}>Welcome to the All_Project!</Text>
    </View>
  );
}
function Guide() {
  return (
    <View style={{ flex: 1, fontSize: 30 }}>
      <Text style={{ color: "red" }}>Welcome to the Guide!</Text>
    </View>
  );
}
