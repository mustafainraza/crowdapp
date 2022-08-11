import { View, Text, Button } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AllProjects from "./AllProjects";
import { StatusBar } from "expo-status-bar";
import {
  Entypo,
  FontAwesome,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
export default function Drawer_Nav() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#f5f5f5" />

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
        <Drawer.Screen
          options={{
            drawerIcon: () => <Entypo name="home" size={24} color="#F23B25" />,
          }}
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons name="login" size={26} color="#F23B25" />
            ),
          }}
          name="Login"
          component={Login}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <Octicons name="project" size={24} color="#F23B25" />
            ),
            headerRight: () => (
              <FontAwesome
                style={{ paddingRight: 20 }}
                name="search"
                size={20}
                color="black"
              />
            ),
          }}
          name="AllProjects"
          component={AllProjects}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <FontAwesome name="book" size={24} color="#F23B25" />
            ),
          }}
          name="Guide"
          component={Guide}
        />
      </Drawer.Navigator>
    </>
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

function Guide() {
  return (
    <View style={{ flex: 1, fontSize: 30 }}>
      <Text style={{ color: "red" }}>Welcome to the Guide!</Text>
    </View>
  );
}
