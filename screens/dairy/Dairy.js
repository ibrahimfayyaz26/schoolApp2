import React, { useLayoutEffect, useCallback } from "react";
import HButton from "../../components/HederButton";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Class from "../../components/Class";
import classesData from "../../data/ClassesData.json";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/DairyAction";
import { useFocusEffect } from "@react-navigation/native";

const Dairy = (props) => {
  useFocusEffect(
    useCallback(() => {
      props.fetchData();
    }, [])
  );
  useLayoutEffect(() => {
    props.navigation.setOptions(
      HButton("plus", "Dairy", () => props.navigation.navigate("DairyCr"))
    );
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
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
  );
};

const mapDispatch = (dispatch) => {
  return {
    fetchData: () => dispatch(Actions.getDairy()),
  };
};

const mapProps = (state) => {
  const { Dairy } = state;
  return {
    Data: Dairy,
  };
};

export default connect(mapProps, mapDispatch)(Dairy);

const styles = StyleSheet.create({});
