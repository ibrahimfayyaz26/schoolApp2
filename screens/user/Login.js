import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import { Button, TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { url } from "../../url";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/UserAction";

const { width, height } = Dimensions.get("window");

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState();

  const upload = async () => {
    if (email === "" || password === "") {
      Toast.show({
        type: "error",
        text1: "Fill the form",
      });
    } else {
      let body = {
        email,
        password,
      };
      axios
        .post(`${url}/User/login`, body)
        .then((data1) => nav(data1.data))
        .catch(() => {
          Toast.show({
            type: "error",
          });
        });
      setEmail("");
      setPassword("");
    }
  };

  const nav = (data) => {
    // console.log(data);
    if (data.failed) {
      Toast.show({
        type: "error",
      });
    } else if (!data.failed) {
      AsyncStorage.setItem("token", data.token);
      axios
        .get(`${url}/User/${data.user._id}`)
        .then((data2) => props.uploadUser(data2.data));
      Toast.show({
        type: "success",
        text1: `You are logined ${data.user.userName} `,
      });
    }
  };

  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      activeOpacity={10}
      onPress={() => Keyboard.dismiss()}
    >
      <ImageBackground
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        source={require("../../assets/background.png")}
      >
        <ScrollView style={{ flex: 1, height: height, width: width }}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: height / 12,
            }}
          >
            <LottieView
              speed={0.35}
              autoPlay
              loop
              key="animation"
              resizeMode="cover"
              style={{
                width: width,
                height: height / 4,
                marginBottom: height / 7,
              }}
              source={require("../../assets/login.json")}
            />
            <View
              style={{
                width: width / 1.15,
                height: height / 14,
                justifyContent: "center",
                padding: 15,
              }}
            >
              <TextInput
                label="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                mode="outlined"
                style={{ marginBottom: 20, backgroundColor: "transparent" }}
                keyboardType="email-address"
              />
              <TextInput
                label="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                mode="outlined"
                secureTextEntry
                style={{ marginTop: 5, backgroundColor: "transparent" }}
              />
            </View>
            <View style={{ flexDirection: "row", marginTop: height / 10 }}>
              <Button
                mode="contained"
                onPress={() => props.navigation.goBack()}
                style={{ margin: 25 }}
              >
                Go Back
              </Button>
              <Button
                icon="lock-open-outline"
                mode="contained"
                onPress={() => upload()}
                style={{ margin: 25 }}
              >
                Login
              </Button>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const mapDispatch = (dispatch) => {
  return {
    uploadUser: (form1) => dispatch(Actions.getUser(form1)),
  };
};

export default connect(null, mapDispatch)(Login);

const styles = StyleSheet.create({});
