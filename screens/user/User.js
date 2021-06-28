import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/UserAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const User = (props) => {
  // console.log(props.UserData[0]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          borderWidth: 2,
          borderColor: "#393e46",
          borderRadius: 28,
          width: width / 1.15,
          height: height / 13,
          marginTop: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#00adb5",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {props.UserData[0].userName}
        </Text>
      </View>
      <View
        style={{
          borderWidth: 2,
          borderColor: "#393e46",
          borderRadius: 28,
          width: width / 1.15,
          height: height / 13,
          marginTop: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#00adb5",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {props.UserData[0].phone}
        </Text>
      </View>
      <View
        style={{
          borderWidth: 2,
          borderColor: "#393e46",
          borderRadius: 28,
          width: width / 1.15,
          height: height / 13,
          marginTop: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#00adb5",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {props.UserData[0].email}
        </Text>
      </View>
      {props.UserData[0].isAdmin ? (
        <View style={{ flexDirection: "row", marginTop: height / 15 }}>
          <Button
            mode="contained"
            onPress={() =>
              props.navigation.navigate("RegisterPr", { isCr: true })
            }
            style={{ margin: 20 }}
          >
            Register Cr
          </Button>
          <Button
            mode="contained"
            onPress={() =>
              props.navigation.navigate("RegisterPr", { isStaff: true })
            }
            style={{ margin: 20 }}
          >
            Register Staff
          </Button>
        </View>
      ) : (
        <View style={{ height: height / 50 }} />
      )}
      <Button
        mode="contained"
        onPress={() => [
          AsyncStorage.removeItem("token"),
          setTimeout(() => {
            props.uploadUser();
          }, 1500),
        ]}
        style={{ margin: 20 }}
      >
        Log Out
      </Button>
    </View>
  );
};

const propsState = (state) => {
  const { User } = state;
  return {
    UserData: User.User,
  };
};

const mapDispatch = (dispatch) => {
  return {
    uploadUser: () => dispatch(Actions.getUser()),
  };
};

export default connect(propsState, mapDispatch)(User);

const styles = StyleSheet.create({});
