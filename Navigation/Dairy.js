import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { useNavigation } from "@react-navigation/native";
import { Dimensions, Text, Button } from "react-native";

//Screens
import DairyStu from "../screens/dairy/Dairy";
import DairyCr from "../screens/dairy/DairyCr";
import DairyDetails from "../screens/dairy/DairyDetails";

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
      <stack.Screen
        name="Dairy"
        options={{
          headerBackTitleVisible: false,
        }}
        component={DairyStu}
      />
      <stack.Screen
        name="DairyCr"
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Upload Dairy",
        }}
        component={DairyCr}
      />
      <stack.Screen
        name="DetailsDairy"
        options={{
          headerBackTitleVisible: false,
        }}
        component={DairyDetails}
      />
    </stack.Navigator>
  );
};

export default Dairy;
