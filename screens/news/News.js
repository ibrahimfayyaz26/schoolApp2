import React, { useLayoutEffect, useCallback } from "react";
import HButton from "../../components/HederButton";
import { useFocusEffect } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  FlatList,
  Platform,
} from "react-native";
import Card from "../../components/Card";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/newsAction";
import * as Actions1 from "../../store/actions/UserAction";
import { AdMobInterstitial } from "expo-ads-admob";
import BannerAd from "../../components/BannerAd";

const { height, width } = Dimensions.get("window");

const News = (props) => {
  const ad = async () => {
    let testID = "ca-app-pub-3940256099942544/1033173712";
    let productionID =
      Platform.OS === "android"
        ? "ca-app-pub-8195323223574992/1389175814"
        : "ca-app-pub-8195323223574992/5769713458";

    let unitId = Constants.isDevice && !__DEV__ ? productionID : testID;
    // console.log(unitId);
    await AdMobInterstitial.setAdUnitID(unitId); // Test ID, Replace with your-admob-unit-id
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
    await AdMobInterstitial.showAdAsync();
  };

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
      ad();
    }, [])
  );
  // console.log(props.newsData.length);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: width, alignItems: "center", margin: 5 }}>
        <BannerAd />
      </View>
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
