import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { main, title } from "../color";

const { height, width } = Dimensions.get("window");

const Class = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => props.fun()}
      style={{
        marginTop: 25,
        borderRadius: 30,
        width: width / 1.05,
        height: height / 7,
        borderWidth: 1,
        borderColor: "brown",
        justifyContent: "center",
        backgroundColor: title,
        alignSelf: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Class;
