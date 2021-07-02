import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { url } from "../../url";
import axios from "axios";
import Toast from "react-native-toast-message";

const { height, width } = Dimensions.get("window");

const LeaveDetails = (props) => {
  const decline = async () => {
    const token = await AsyncStorage.getItem("token");
    const data = await axios.delete(
      `${url}/Leave/${props.route.params.item._id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    props.navigation.goBack();
    Toast.show({
      type: "success",
      text1: "Leave done",
    });
  };

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
          source={{
            uri: props.route.params.item.image,
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
          {props.route.params.item.name +
            " " +
            props.route.params.item.fatherName}
        </Text>

        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: "#00adb5",
            marginRight: width / 12,
          }}
        >
          {props.route.params.item.date.split(":").shift().slice(0, 10)}
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
        {props.route.params.item.description}
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
          {props.route.params.item.classes.class +
            "-" +
            props.route.params.item.classes.section}
        </Text>
        <Text
          style={{
            fontSize: 19,
            fontWeight: "bold",
            color: "#00adb5",
            textAlign: "center",
          }}
        >
          {props.route.params.item.isApproved ? "Approved" : "Not approved"}
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
        {props.route.params.item.phone}
      </Text>
      <View
        style={{
          width: width,
          height: 75,
          justifyContent: "space-around",
          padding: 12,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Button
          mode="contained"
          onPress={() => decline()}
          style={{ margin: 7 }}
        >
          Leave checked
        </Button>
      </View>
    </View>
  );
};

export default LeaveDetails;

const styles = StyleSheet.create({});
