import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import POPULAR from "./POPULAR";
import NEWEST from "./Newest";
import ENDING_SOON from "./Ending_soon";

export default function AllProjects() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "rgba(242, 59, 37, 0.75) ",
        tabBarInactiveTintColor: "white",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "rgba(242, 59, 37, 0.75) ",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "serif",
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen name="POPULAR" component={POPULAR} />
      <Tab.Screen name="NEWEST" component={NEWEST} />
      <Tab.Screen name="ENDING SOON" component={ENDING_SOON} />
    </Tab.Navigator>
  );
}
