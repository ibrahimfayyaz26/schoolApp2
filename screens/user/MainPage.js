import React from "react";
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

const { width, height } = Dimensions.get("window");

const MainPage = (props) => {
  return (
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
  );
};

export default MainPage;

const styles = StyleSheet.create({
  buttonContainer: {
    width: width / 1.6,
    height: height / 5,
    justifyContent: "center",
    padding: 12,
  },
});
