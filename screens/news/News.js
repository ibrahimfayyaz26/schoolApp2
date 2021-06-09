import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Text,
  FlatList,
} from "react-native";
import data from "../../data/newsData";

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
