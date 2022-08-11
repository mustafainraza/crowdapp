import { View, Text, ScrollView, Image, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { Bar } from "react-native-progress";

export default function Popular() {
  const [funded, setfunded] = useState(20);
  const [backers, setbackers] = useState(30);
  const [hours, sethours] = useState(18);

  return (
    <ScrollView>
      <View
        style={{
          marginTop: 25,
          marginLeft: 25,
          width: 310,
          height: 400,
          backgroundColor: "grey",
        }}
      >
        <View>
          <Image
            style={{ width: 310, height: 200 }}
            source={require("../images/helmet.png")}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: "700", fontSize: 18, color: "white" }}>
            Product Name: Cameron
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 18, color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing. Nunc c.{" "}
          </Text>
          <Bar
            borderColor="grey"
            style={{ margin: 20 }}
            color={"white"}
            unfilledColor={"black"}
            progress={funded * 0.01}
            width={250}
            height={2}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 18,
                color: "white",
              }}
            >
              {funded}%
            </Text>

            <Text
              style={{
                fontWeight: "400",
                fontSize: 18,
                color: "white",
              }}
            >
              {backers}
            </Text>

            <Text
              style={{
                fontWeight: "400",
                fontSize: 18,
                color: "white",
              }}
            >
              {hours}
            </Text>
          </View>

          <View
            style={{
              marginLeft: 20,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 7,
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
      </View>
      <View
        style={{
          marginTop: 25,
          marginLeft: 25,
          width: 310,
          height: 400,
          backgroundColor: "grey",
        }}
      >
        <View>
          <Image
            style={{ width: 310, height: 200 }}
            source={require("../images/helmet.png")}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontWeight: "700", fontSize: 18, color: "white" }}>
            Product Name: Cameron
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 18, color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing. Nunc c.{" "}
          </Text>
          <Bar
            borderColor="grey"
            style={{ margin: 20 }}
            color={"white"}
            unfilledColor={"black"}
            progress={funded * 0.01}
            width={250}
            height={2}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 18,
                color: "white",
              }}
            >
              {funded}%
            </Text>

            <Text
              style={{
                fontWeight: "400",
                fontSize: 18,
                color: "white",
              }}
            >
              {backers}
            </Text>

            <Text
              style={{
                fontWeight: "400",
                fontSize: 18,
                color: "white",
              }}
            >
              {hours}
            </Text>
          </View>

          <View
            style={{
              marginLeft: 20,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 7,
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
      </View>
    </ScrollView>
  );
}
