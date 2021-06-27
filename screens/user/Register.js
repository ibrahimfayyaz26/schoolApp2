import React, { useState } from "react";
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

const { width, height } = Dimensions.get("window");

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  const upload = async () => {
    if (email === "" || password === "" || phone === "" || userName === "") {
      Toast.show({
        type: "error",
        text1: "Fill the form",
      });
    } else {
      let body = {
        email,
        phone,
        password,
        userName,
      };
      axios
        .post("http://192.168.10.7:3000/User/register", body)
        .then((data1) => console.log(data1));
      setEmail("");
      setPhone("");
      setPassword("");
      setUserName("");
      Toast.show({
        type: "success",
        text1: "Registerd",
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
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
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
              height: height / 3.3,
              marginBottom: height / 4,
            }}
            source={require("../../assets/register.json")}
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
              label="Name"
              value={userName}
              onChangeText={(text) => setUserName(text)}
              mode="outlined"
              style={{ marginBottom: 20, backgroundColor: "transparent" }}
            />
            <TextInput
              label="Phone no"
              value={phone}
              onChangeText={(text) => setPhone(text)}
              mode="outlined"
              style={{ marginBottom: 20, backgroundColor: "transparent" }}
              keyboardType="number-pad"
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
          <View style={{ flexDirection: "row", marginTop: height / 5 }}>
            <Button
              mode="contained"
              onPress={() => props.navigation.goBack()}
              style={{ margin: 25 }}
            >
              Go Back
            </Button>
            <Button
              icon="mail"
              mode="contained"
              onPress={() => upload()}
              style={{ margin: 25 }}
            >
              Register
            </Button>
          </View>
        </ScrollView>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Register;

const styles = StyleSheet.create({});
