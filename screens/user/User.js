import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Button } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const User = (props) => {
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
          User Name
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
          03001799166
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
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          email@gmail.com
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: height / 15 }}>
        <Button
          mode="contained"
          onPress={() => props.navigation.navigate("RegisterPr")}
          style={{ margin: 20 }}
        >
          Register Cr
        </Button>
        <Button
          mode="contained"
          onPress={() => props.navigation.navigate("RegisterPr")}
          style={{ margin: 20 }}
        >
          Register Staff
        </Button>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
