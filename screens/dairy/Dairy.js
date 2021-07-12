import React, { useLayoutEffect, useCallback } from "react";
import HButton from "../../components/HederButton";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import Class from "../../components/Class";
import classesData from "../../data/ClassesData.json";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/DairyAction";
import { useFocusEffect } from "@react-navigation/native";
import BannerAd from "../../components/BannerAd";

const { height, width } = Dimensions.get("window");

const Dairy = (props) => {
  useFocusEffect(
    useCallback(() => {
      props.fetchData();
    }, [])
  );
  useLayoutEffect(() => {
    props.navigation.setOptions(
      HButton(
        "plus",
        "Diary",
        () => props.navigation.navigate("DairyCr"),
        props.UserData[0].isCr
      )
    );
  }, [props.UserData]);
  // console.log(props.Data.Dairy);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: width, alignItems: "center", margin: 5 }}>
        <BannerAd />
      </View>
      <ScrollView style={{ flex: 1, marginBottom: 5 }}>
        {classesData.map((i) => (
          <Class
            key={i._id}
            name={i.class + " " + i.section}
            fun={() =>
              props.navigation.navigate("DetailsDairy", {
                data: props.Data.Dairy.filter((f) => f.class.id == i.id),
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

const mapDispatch = (dispatch) => {
  return {
    fetchData: () => dispatch(Actions.getDairy()),
  };
};

const mapProps = (state) => {
  const { Dairy, User } = state;
  return {
    UserData: User.User,
    Data: Dairy,
  };
};

export default connect(mapProps, mapDispatch)(Dairy);

const styles = StyleSheet.create({});
