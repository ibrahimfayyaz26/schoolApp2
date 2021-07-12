import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import LottieView from "lottie-react-native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { url } from "../../url";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/UserAction";

const { width, height } = Dimensions.get("window");

const MainPage = (props) => {
  const [is, setIs] = useState(false);
  // useEffect(() => {
  //   again();
  // });

  const authCheck = async () => {
    let token = await AsyncStorage.getItem("token");
    // console.log(token);
    if (token != null) {
      var decoded = jwt_decode(token);
      setIs(true);
      // console.log(decoded);
      axios
        .get(`${url}/User/${decoded.userId}`)
        .then((data2) => [props.uploadUser(data2.data), setIs(false)])
        .catch(() => AsyncStorage.clear());
    }
  };

  authCheck();

  return (
    <>
      {!is ? (
        <ImageBackground
          style={{ flex: 1, alignItems: "center" }}
          source={require("../../assets/background.png")}
        >
          <LottieView
            autoPlay
            loop
            key="animation"
            resizeMode="cover"
            style={{
              width: width / 2,
              height: height / 1.8,
            }}
            source={require("../../assets/waiting.json")}
          />
          <View style={styles.buttonContainer}>
            <Button
              icon="lock-open-outline"
              mode="contained"
              onPress={() => props.navigation.navigate("Login")}
              style={{ margin: 7 }}
            >
              Login
            </Button>
            <Button
              icon="mail"
              mode="contained"
              onPress={() => props.navigation.navigate("Register")}
              style={{ margin: 7 }}
            >
              Register
            </Button>
          </View>
        </ImageBackground>
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <LottieView
            autoPlay
            loop
            key="animation"
            speed={0.5}
            resizeMode="cover"
            style={{
              width: width / 2,
              height: height / 2,
            }}
            source={require("../../assets/loading1.json")}
          />
        </View>
      )}
    </>
  );
};

const mapDispatch = (dispatch) => {
  return {
    uploadUser: (form1) => dispatch(Actions.getUser(form1)),
  };
};

export default connect(null, mapDispatch)(MainPage);

const styles = StyleSheet.create({
  buttonContainer: {
    width: width / 1.6,
    height: height / 5,
    justifyContent: "center",
    padding: 12,
  },
});
