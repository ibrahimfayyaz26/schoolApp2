import React from "react";
import { View, Text, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const DairyDetails = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{ width: width, alignItems: "center", marginTop: height / 12 }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#00adb5",
            fontSize: 25,
            fontStyle: "italic",
          }}
        >
          {props.route.params.class.section}
        </Text>
        <Text
          style={{
            fontWeight: "900",
            color: "grey",
            fontSize: 20,
          }}
        >
          {props.route.params.class.class}
        </Text>
      </View>
      <View style={{ width: width, marginTop: height / 14 }}>
        <Text
          style={{
            fontWeight: "bold",
            color: "#00adb5",
            fontSize: 22,
            fontStyle: "italic",
            marginLeft: width / 13,
          }}
        >
          Dairy:
        </Text>
        <Text
          style={{
            marginLeft: width / 4.3,
            marginTop: 15,
            fontSize: 18,
            width: width / 1.3,
          }}
        >
          {props.route.params.dairy}
        </Text>
      </View>
    </View>
  );
};

export default DairyDetails;
