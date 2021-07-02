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

const LeaveStudentStaff = (props) => {
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
    const data = await axios.get(`${url}/Leave/approved`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data.data);
    if (data.data == "no data found") {
      setInitialState([]);
      setProductsCtg([]);
    } else {
      setInitialState(data.data);
      setProductsCtg(data.data);
    }
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
      {productsCtg.length ? (
        <FlatList
          data={productsCtg}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            // console.log(item);
            return (
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() =>
                  props.navigation.navigate("LeaveStaffDetails", {
                    item: item,
                  })
                }
                style={{ flex: 1 }}
              >
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
                    alignSelf: "center",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "65%",
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                    source={{ uri: item.image ? item.image : null }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: 5,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: "bold",
                        color: "#00adb5",
                      }}
                    >
                      {item.name
                        ? item.name + " " + item.fatherName
                        : "not found"}
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: "bold",
                        color: "#00adb5",
                      }}
                    >
                      {item.date
                        ? item.date.split(":").shift().slice(0, 10)
                        : "no date found"}
                    </Text>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text
                      style={{
                        fontSize: 19,
                        fontWeight: "bold",
                        color: "#00adb5",
                        textAlign: "center",
                      }}
                    >
                      {item.phone ? item.phone : "not found"}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: "bold",
                          color: "#00adb5",
                          textAlign: "center",
                        }}
                      >
                        {item.classes
                          ? item.classes.class + "-" + item.classes.section
                          : "not found"}
                      </Text>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: "bold",
                          color: "#00adb5",
                          textAlign: "center",
                        }}
                      >
                        {item.isApproved ? "Approved" : "Not approved"}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <Text
          style={{
            justifyContent: "center",
            alignSelf: "center",
            textAlign: "center",
            fontWeight: "bold",
            marginTop: height / 10,
          }}
        >
          No leave found
        </Text>
      )}
    </View>
  );
};

export default LeaveStudentStaff;

const styles = StyleSheet.create({});
