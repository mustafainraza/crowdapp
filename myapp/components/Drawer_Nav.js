import { View, Text, Button } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import { StatusBar } from "expo-status-bar";
import {
  Octicons,
  Entypo,
  FontAwesome,
  FontAwesome5,
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
            drawerIcon: () => (
              <FontAwesome5 name="user" size={24} color="#F23B25" />
            ),
          }}
          name="Profile"
          component={Profile}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => <Entypo name="home" size={24} color="#F23B25" />,
            headerRight: () => (
              <FontAwesome
                style={{ paddingRight: 20 }}
                name="search"
                size={20}
                color="black"
              />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <Octicons name="project" size={26} color="#F23B25" />
            ),
          }}
          name="Funded Projects"
          component={Pledge_project}
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

function Profile() {
  return (
    <View style={{ flex: 1, fontSize: 30 }}>
      <Text style={{ color: "red" }}>Welcome to the Profile!</Text>
    </View>
  );
}
function Pledge_project() {
  return (
    <View style={{ flex: 1, fontSize: 30 }}>
      <Text style={{ color: "red" }}>Welcome to the Pledge_project!</Text>
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
