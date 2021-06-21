import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

//Screens
import DSStu from "../screens/D&S/D&S";
import DSView from "../screens/D&S/D&SView";
import DSStaff from "../screens/D&S/D&SStaff";

const stack = createStackNavigator();
const { height, width } = Dimensions.get("window");
const DS = () => {
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
      <stack.Screen name="DS" component={DSStu} />
      <stack.Screen
        name="DSView"
        options={{
          headerBackTitleVisible: false,
        }}
        component={DSView}
      />
      <stack.Screen
        name="DSStaff"
        options={{
          headerBackTitleVisible: false,
        }}
        component={DSStaff}
      />
    </stack.Navigator>
  );
};

export default DS;
