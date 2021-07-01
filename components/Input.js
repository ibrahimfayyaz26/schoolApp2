import React from "react";
import { View, Text, TextInput, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const Input = (props) => {
  const { placeholder, value, onChange } = props;
  return (
    <TextInput
      placeholder={placeholder}
      style={{
        borderWidth: 2,
        borderColor: "#393e46",
        borderRadius: 28,
        width: width / 1.05,
        height: height / 12,
        color: "#00adb5",
        textAlign: "center",
        marginTop: 15,
        padding: 15,
      }}
      value={value}
      onChangeText={onChange}
    />
  );
};

export default Input;
