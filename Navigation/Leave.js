import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";
import Leave from "../screens/leave/Leave";

const stack = createStackNavigator();

const { height, width } = Dimensions.get("window");

const LeaveStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#222831",
          height: height / 9,
        },
        headerTitleStyle: {
          color: "#00adb5",
          marginBottom: height / 16,
        },
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
      }}
    >
      <stack.Screen name="Leave" component={Leave} />
    </stack.Navigator>
  );
};

export default LeaveStack;
