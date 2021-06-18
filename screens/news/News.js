import React, { useLayoutEffect } from "react";
import HButton from "../../components/HederButton";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Dimensions, Text, FlatList } from "react-native";
import Card from "../../components/Card";
import data from "../../data/newsData";

const { height, width } = Dimensions.get("window");

const News = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions(
      HButton("plus", "News", () => props.navigation.navigate("Add"))
    );
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card title={item.title} uri={item.imgUri} />}
      />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({});
