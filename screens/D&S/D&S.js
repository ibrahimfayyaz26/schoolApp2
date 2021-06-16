import React, { useLayoutEffect } from "react";
import HButton from "../../components/HederButton";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Class from "../../components/Class";

const { height, width } = Dimensions.get("window");

const DS = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions(
      HButton("plus", "DateSheet & Syllabus", () =>
        props.navigation.navigate("DSStaff")
      )
    );
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
      <Class name="6th Class" fun={() => console.log("pressed")} />
      <Class name="7th Class" fun={() => console.log("pressed")} />
      <Class name="8th Class" fun={() => console.log("pressed")} />
      <Class name="9th Class" fun={() => console.log("pressed")} />
      <Class name="10th Class" fun={() => console.log("pressed")} />
    </ScrollView>
  );
};

export default DS;

const styles = StyleSheet.create({});
