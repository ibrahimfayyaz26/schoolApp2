import React from "react";
import { View, Text, Platform, Dimensions } from "react-native";
import { AdMobBanner } from "expo-ads-admob";
import Constants from "expo-constants";

const { height, width } = Dimensions.get("window");

const BannerAd = () => {
  let testID = "ca-app-pub-3940256099942544/6300978111";
  let productionID =
    Platform.OS === "android"
      ? "ca-app-pub-8195323223574992/8399406918"
      : "ca-app-pub-8195323223574992/3931153649";

  let unitId = Constants.isDevice && !__DEV__ ? productionID : testID;
  return (
    <AdMobBanner
      bannerSize="banner"
      adUnitID={unitId} // Test ID, Replace with your-admob-unit-id
      servePersonalizedAds={false} // true or false
      onDidFailToReceiveAdWithError={(e) => console.log(e)}
    />
  );
};

export default BannerAd;
