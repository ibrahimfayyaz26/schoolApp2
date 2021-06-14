import React, { useLayoutEffect } from "react";
import HButton from "../../components/HederButton";
import { StyleSheet, Text, View } from "react-native";

const Dairy = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions(HButton("plus", "Dairy"));
  }, []);
  return (
    <View>
      <Text>Dairy</Text>
    </View>
  );
};

export default Dairy;

const styles = StyleSheet.create({});
