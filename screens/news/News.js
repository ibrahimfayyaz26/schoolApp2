import React, { useLayoutEffect, useCallback } from "react";
import HButton from "../../components/HederButton";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, View, Dimensions, Text, FlatList } from "react-native";
import Card from "../../components/Card";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/newsAction";
import * as Actions1 from "../../store/actions/UserAction";

const { height, width } = Dimensions.get("window");

const News = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions(
      HButton(
        "plus",
        "News",
        () => props.navigation.navigate("Add"),
        props.UserData[0].isAdmin
      )
    );
  }, [props.UserData]);
  useFocusEffect(
    useCallback(() => {
      props.fetchData();
    }, [])
  );
  // console.log(props.newsData.length);

  return (
    <View style={{ flex: 1 }}>
      {!props.newsData.length ? (
        <View>
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",
              marginTop: 50,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            No news found
          </Text>
        </View>
      ) : (
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
      )}
    </View>
  );
};

const mapProps = (state) => {
  const { news, User } = state;
  return {
    UserData: User.User,
    newsData: news.news,
  };
};

const mapDispatch = (dispatch) => {
  const fun = () => {
    dispatch(Actions1.getUser());
  };
  return {
    fetchData: () => dispatch(Actions.getNews(fun)),
  };
};

export default connect(mapProps, mapDispatch)(News);

const styles = StyleSheet.create({});
