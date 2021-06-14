import React, { useLayoutEffect } from "react";
import HButton from "../../components/HederButton";
import { StyleSheet, Text, View } from "react-native";

const DS = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions(HButton("plus", "DateSheet & Syllabus"));
  }, []);
  return (
    <View>
      <Text>DS</Text>
    </View>
  );
};

export default DS;

const styles = StyleSheet.create({});
