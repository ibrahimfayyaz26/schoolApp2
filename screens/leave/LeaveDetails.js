import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { url } from "../../url";
import axios from "axios";
import Toast from "react-native-toast-message";
import LeaveDe from "../../components/LeaveDetails";

const { width } = Dimensions.get("window");

const LeaveDetails = (props) => {
  const approve = async () => {
    const token = await AsyncStorage.getItem("token");
    const data = await axios.put(
      `${url}/Leave/${props.route.params.item._id}`,
      {
        isApproved: true,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(data.data);
    props.navigation.goBack();
    Toast.show({
      type: "success",
      text1: "Approved",
    });
  };

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
      type: "error",
      text1: "Declined",
    });
  };

  return (
    <View style={{ flex: 1, width: width }}>
      <LeaveDe item={props.route.params.item} />
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
        {!props.route.params.item.isApproved ? (
          <Button
            mode="contained"
            onPress={() => approve()}
            style={{ margin: 7 }}
          >
            Approve
          </Button>
        ) : null}
        <Button
          mode="contained"
          onPress={() => decline()}
          style={{ margin: 7 }}
        >
          Decline
        </Button>
      </View>
    </View>
  );
};

export default LeaveDetails;

const styles = StyleSheet.create({});
