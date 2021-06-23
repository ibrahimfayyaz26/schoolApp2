import React, { useLayoutEffect, useCallback } from "react";
import HButton from "../../components/HederButton";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, View, Dimensions, Text, FlatList } from "react-native";
import Card from "../../components/Card";
import data from "../../data/newsData";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/newsAction";

const { height, width } = Dimensions.get("window");

const News = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions(
      HButton("plus", "News", () => props.navigation.navigate("Add"))
    );
  }, []);
  useFocusEffect(
    useCallback(() => {
      props.fetchData();
    }, [])
  );
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={props.newsData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            uri={item.image}
            date={item.date}
            press={() =>
              props.navigation.navigate("NewsDetails", {
                ...item,
              })
            }
          />
        )}
      />
    </View>
  );
};

const mapProps = (state) => {
  const { news } = state;
  return {
    newsData: news.news,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchData: () => dispatch(Actions.getNews()),
  };
};

export default connect(mapProps, mapDispatch)(News);

const styles = StyleSheet.create({});
