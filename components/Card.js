import React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";

const { height, width } = Dimensions.get("window");

const Card = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.press ? () => props.press() : null}
    >
      <View
        style={{
          backgroundColor: "#ffe2e2",
          width: width / 1.08,
          height: height / 3.7,
          marginBottom: 15,
          marginTop: 6.5,
          elevation: 8,
          borderRadius: 10,
          shadowColor: "black",
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.26,
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <Image
          source={{
            uri: props.uri,
          }}
          style={{
            height: "100%",
            width: "66%",
          }}
        />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            padding: 5,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 17.5,
              fontWeight: "bold",
              marginTop: height / 55,
            }}
          >
            {props.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              marginTop: height / 55,
              color: "#00adb5",
              marginBottom: height / 200,
            }}
          >
            {props.date.split(":").shift().slice(0, 10)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
