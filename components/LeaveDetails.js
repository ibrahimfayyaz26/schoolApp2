import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const LeaveDetails = (props) => {
  const { item } = props;
  return (
    <>
      <View
        style={{
          width: width,
          height: height / 2.5,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
          }}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View
        style={{
          margin: 15,
          width: width,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#00adb5",
            fontSize: 25,
            fontStyle: "italic",
          }}
        >
          {item.name + " " + item.fatherName}
        </Text>

        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: "#00adb5",
            marginRight: width / 12,
          }}
        >
          {item.date.split(":").shift().slice(0, 10)}
        </Text>
      </View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          fontSize: 19,
          width: width / 1.3,
          marginLeft: width / 10.5,
        }}
      >
        {item.description}
      </Text>
      <View></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          padding: 5,
        }}
      >
        <Text
          style={{
            fontSize: 19,
            fontWeight: "bold",
            color: "#00adb5",
            textAlign: "center",
          }}
        >
          {item.classes.class + "-" + item.classes.section}
        </Text>
        <Text
          style={{
            fontSize: 19,
            fontWeight: "bold",
            color: "#00adb5",
            textAlign: "center",
          }}
        >
          {item.isApproved ? "Approved" : "Not approved"}
        </Text>
      </View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          fontSize: 19,
          width: width / 1.3,
          marginLeft: width / 10.5,
        }}
      >
        {item.phone}
      </Text>
    </>
  );
};

export default LeaveDetails;
