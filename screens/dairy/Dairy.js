import React, { useLayoutEffect } from "react";
import HButton from "../../components/HederButton";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Class from "../../components/Class";

const Dairy = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions(
      HButton("plus", "Dairy", () => props.navigation.navigate("DairyCr"))
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

export default Dairy;

const styles = StyleSheet.create({});
