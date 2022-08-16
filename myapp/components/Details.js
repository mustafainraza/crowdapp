import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Project from "./project";
import { MaterialIcons } from "@expo/vector-icons";

export default function Details() {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "grey",
          width: "100%",
          height: 485,
        }}
      >
        <Project />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <View style={{ flex: 1, marginTop: 15 }}>
            <MaterialIcons name="campaign" size={50} color="#F23B25" />
          </View>
          <View style={{ flex: 4, marginTop: 20 }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 12,
                color: "white",
                fontFamily: "normal",
              }}
            >
              Created by
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 18,
                color: "white",
              }}
            >
              Mustafain Raza
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{ backgroundColor: "black", width: "100%", height: 6 }}
      ></View>
      <View
        style={{
          backgroundColor: "grey",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: 120,
        }}
      >
        <Text style={{ justifyContent: "center", alignItems: "center" }}>
          Updates
        </Text>
      </View>
      <View
        style={{ backgroundColor: "black", width: "100%", height: 6 }}
      ></View>
      <View
        style={{
          backgroundColor: "grey",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: 120,
        }}
      >
        <Text>Comments</Text>
      </View>
      <View
        style={{ backgroundColor: "black", width: "100%", height: 6 }}
      ></View>
    </ScrollView>
  );
}
