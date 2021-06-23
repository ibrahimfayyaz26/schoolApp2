import React, { useLayoutEffect } from "react";
import HButton from "../../components/HederButton";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Class from "../../components/Class";
import classesData from "../../data/ClassesData.json";


const Dairy = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions(
      HButton("plus", "Dairy", () => props.navigation.navigate("DairyCr"))
    );
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
      {classesData.map(i => (
        <Class
          key={i._id}
        name={i.class+" "+i.section}
        fun={() =>
          props.navigation.navigate("DetailsDairy", {
            dairy: "Eng:homeWork",
            class: {
              class: i.class,
              section: i.section,
            },
          })
        }
      />
      ))}
      
    </ScrollView>
  );
};

export default Dairy;

const styles = StyleSheet.create({});
