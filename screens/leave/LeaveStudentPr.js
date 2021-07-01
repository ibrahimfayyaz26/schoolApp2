import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import classesData from "../../data/ClassesData.json";
import Filter from "../../components/Filter";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { url } from "../../url";
import axios from "axios";

const { height, width } = Dimensions.get("window");

const LeaveStudentPr = () => {
  const [active, setActive] = useState(-1);
  const [initialState, setInitialState] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [])
  );

  const fetch = async () => {
    const token = await AsyncStorage.getItem("token");
    const data = await axios.get(`${url}/Leave`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data.data);
    setInitialState(data.data);
    setProductsCtg(data.data);
  };

  const changeCtg = (ctg) => {
    {
      ctg === "all"
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              initialState.filter((i) => i.classes.id === ctg),
              setActive(true)
            ),
          ];
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Filter
          categories={classesData}
          categoryFilter={changeCtg}
          active={active}
          setActive={setActive}
        />
      </View>
      <FlatList
        data={productsCtg}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <TouchableOpacity activeOpacity={0.85} style={{ flex: 1 }}>
              <View
                style={{
                  backgroundColor: "#fa69b0",
                  width: width / 1.08,
                  height: height / 2,
                  marginBottom: 15,
                  marginTop: 6.5,
                  elevation: 8,
                  borderRadius: 10,
                  shadowColor: "black",
                  shadowRadius: 10,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.26,
                  flexDirection: "row",
                  alignSelf: "center",
                }}
              >
                <Image
                  style={{ width: "100%", height: "65%" }}
                  source={{ uri: item.image }}
                />
                <View></View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default LeaveStudentPr;

const styles = StyleSheet.create({});
