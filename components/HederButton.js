import React from "react";
import { Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const HederButton = (name, title, navigation) => {
  return {
    headerTitle: title,
    headerRight: () => (
      <Button
        onPress={() => navigation()}
        style={{
          marginBottom: height / 20,
          marginEnd: height / 30,
        }}
        transparent
      >
        <Icon size={22} name={name} color="#00adb5" />
      </Button>
    ),
  };
};

export default HederButton;
