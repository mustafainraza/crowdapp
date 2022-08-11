import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import POPULAR from "./POPULAR";

export default function AllProjects() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "white",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "serif",
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "rgba(242, 59, 37, 0.75) ",
        },
      }}
    >
      <Tab.Screen name="POPULAR" component={POPULAR} />
      <Tab.Screen name="NEWEST" component={NEWEST} />
      <Tab.Screen name="ENDING SOON" component={ENDING_SOON} />
    </Tab.Navigator>
  );
}

function NEWEST() {
  return (
    <View>
      <Text>these are popular projects</Text>
    </View>
  );
}
function ENDING_SOON() {
  return (
    <View>
      <Text>These Projects are ending soon</Text>
    </View>
  );
}
