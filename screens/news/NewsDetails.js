import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const NewsDetails = (props) => {
  return (
    <View style={{ flex: 1, width: width }}>
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
          resizeMode="contain"
          source={{
            uri: props.route.params.image,
          }}
        />
      </View>
      <View style={{ margin: 15, width: width }}>
        <Text
          style={{
            fontWeight: "bold",
            color: "#00adb5",
            fontSize: 25,
            fontStyle: "italic",
          }}
        >
          {props.route.params.title}
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 19,
            width: width / 1.3,
            marginLeft: width / 10.5,
          }}
        >
          {props.route.params.description}
        </Text>
      </View>
    </View>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({});
