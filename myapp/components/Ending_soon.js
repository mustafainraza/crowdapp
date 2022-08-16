import { ScrollView, Pressable } from "react-native";
import React from "react";
import Project from "./project";

export default function ENDING_SOON({ navigation }) {
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
    </ScrollView>
  );
}
