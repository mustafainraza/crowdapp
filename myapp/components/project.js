import { View, Text, Image, Platform } from "react-native";
import React, { useState, useEffect } from "react";

import { Bar } from "react-native-progress";
import { useRoute } from "@react-navigation/native";

export default function Project(props) {
  // const [funded, setfunded] = useState(0);
  // const [backers, setbackers] = useState(0);
  // const [hours, sethours] = useState(0);

  const route = useRoute();
  // useEffect(() => {
  //   setfunded(props.funded);
  //   setbackers(props.backed);
  //   sethours(props.hours);
  // }, [props.funded, props.backed, props.hours]);

  return (
    <>
      <View
        style={{
          height: "50%",
          width: "100%",
        }}
      >
        <Image
          style={{
            resizeMode: "stretch",
            height: "100%",
            width: "100%",
            borderTopLeftRadius: route.name == "Details" ? 0 : 30,
            borderTopRightRadius: route.name == "Details" ? 0 : 30,
          }}
          source={{ uri: props.data }}
        />
      </View>
      <View style={{ margin: 10, height: "50%" }}>
        <View style={{ height: "25%" }}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
              color: "white",
              fontFamily: Platform.OS === "ios" ? "Arial" : "serif",
            }}
          >
            Product Name: {props.title}
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 18,
              color: "white",
              fontFamily: Platform.OS === "ios" ? "Arial" : "serif",
            }}
          >
            {props.disc}
          </Text>
        </View>
        <View
          style={{
            marginTop: "12%",
            justifyContent: "center",
            alignItems: "center",
            height: "20%",
          }}
        >
          <Bar
            borderColor="grey"
            style={{ margin: 10 }}
            color={"white"}
            unfilledColor={"black"}
            progress={props.funded * 0.01}
            width={250}
            height={4}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            height: "13%",
            paddingRight: "7%",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 18,
              color: "white",
            }}
          >
            {props.funded}%
          </Text>

          <Text
            style={{
              fontWeight: "400",
              fontSize: 18,
              color: "white",
            }}
          >
            {props.backed}
          </Text>

          <Text
            style={{
              fontWeight: "400",
              fontSize: 18,
              color: "white",
            }}
          >
            {props.hours}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            height: "15%",
            paddingLeft: "4%",
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 13,
              color: "white",
            }}
          >
            Funded
          </Text>

          <Text
            style={{
              paddingLeft: 13,
              fontWeight: "500",
              fontSize: 13,
              color: "white",
            }}
          >
            Backers
          </Text>

          <Text
            style={{
              fontWeight: "500",
              fontSize: 13,
              color: "white",
            }}
          >
            Hours To Go
          </Text>
        </View>
      </View>
    </>
  );
}
