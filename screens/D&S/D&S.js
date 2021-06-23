import React, { useLayoutEffect, useCallback } from "react";
import HButton from "../../components/HederButton";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Class from "../../components/Class";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/D&SAction";
import { useFocusEffect } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const DS = (props) => {
  useFocusEffect(
    useCallback(() => {
      props.fetchData();
      // console.log(props.DSData);
    }, [])
  );
  useLayoutEffect(() => {
    props.navigation.setOptions(
      HButton("plus", "DateSheet & Syllabus", () =>
        props.navigation.navigate("DSStaff")
      )
    );
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
      <Class
        name="6Th"
        fun={() =>
          props.navigation.navigate("DSView", {
            item: props.DSData.filter((i) => i.classes == "6Th"),
          })
        }
      />
      <Class
        name="7Th"
        fun={() =>
          props.navigation.navigate("DSView", {
            item: props.DSData.filter((i) => i.classes == "7Th"),
          })
        }
      />
      <Class
        name="8Th"
        fun={() =>
          props.navigation.navigate("DSView", {
            item: props.DSData.filter((i) => i.classes == "8Th"),
          })
        }
      />
      <Class
        name="9Th"
        fun={() =>
          props.navigation.navigate("DSView", {
            item: props.DSData.filter((i) => i.classes == "9Th"),
          })
        }
      />
      <Class
        name="10Th"
        fun={() =>
          props.navigation.navigate("DSView", {
            item: props.DSData.filter((i) => i.classes == "10Th"),
          })
        }
      />
    </ScrollView>
  );
};

const mapProps = (state) => {
  const { DS } = state;
  return {
    DSData: DS.DS,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchData: () => dispatch(Actions.getDS()),
  };
};

export default connect(mapProps, mapDispatch)(DS);

const styles = StyleSheet.create({});
