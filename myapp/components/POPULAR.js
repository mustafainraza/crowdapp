import { ScrollView, Pressable } from "react-native";
import React from "react";
import Project from "./project";
import Bamboo from "./A1";

export default function POPULAR({ navigation }) {
  return (
    <ScrollView>
      <Pressable
        style={{
          backgroundColor: "grey",
          marginTop: 25,
          marginLeft: 25,
          width: 310,
          height: 400,
        }}
        android_ripple={{ borderless: false, color: "lightgrey" }}
        onPress={() => {
          navigation.navigate("Details");
        }}
      >
        <Project />
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "grey",
          marginTop: 25,
          marginLeft: 25,
          width: 310,
          height: 400,
        }}
        android_ripple={{ borderless: false, color: "lightgrey" }}
        onPress={() => {
          navigation.navigate("Details");
        }}
      >
        <Bamboo />
      </Pressable>
    </ScrollView>
  );
}
