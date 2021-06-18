import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { useNavigation } from "@react-navigation/native";
import { Dimensions, Text, Button } from "react-native";

//Screens
import DairyStu from "../screens/dairy/Dairy";
import DairyCr from "../screens/dairy/DairyCr";

const stack = createStackNavigator();
const { height, width } = Dimensions.get("window");
const Dairy = () => {
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
      <stack.Screen name="Dairy" component={DairyStu} />
      <stack.Screen name="DairyCr" component={DairyCr} />
    </stack.Navigator>
  );
};

export default Dairy;
