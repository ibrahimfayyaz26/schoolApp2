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
        },
        headerTitleStyle: {
          color: "#00adb5",
        },
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
      }}
    >
      <stack.Screen
        name="Dairy"
        options={{
          headerTitle: "Diary",
        }}
        component={DairyStu}
      />
      <stack.Screen
        name="DairyCr"
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Upload Diary",
        }}
        component={DairyCr}
      />
      <stack.Screen
        name="DetailsDairy"
        options={{
          headerTitle: "Diaries",
        }}
        component={DairyDetails}
      />
    </stack.Navigator>
  );
};

export default Dairy;
