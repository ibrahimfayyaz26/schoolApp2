import React from "react";
import { StyleSheet, View, Dimensions, SafeAreaView, Text } from "react-native";

const { height, width } = Dimensions.get("window");

const News = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <View>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({});
