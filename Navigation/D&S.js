import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { main, title } from "../color";
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
          backgroundColor: main,
        },
        headerTitleStyle: {
          color: title,
        },
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
      }}
    >
      <stack.Screen name="DS" component={DSStu} />
      <stack.Screen
        name="DSView"
        options={{
          headerTitle: "",
        }}
        component={DSView}
      />
      <stack.Screen
        name="DSStaff"
        options={{
          headerTitle: "Upload D&S",
        }}
        component={DSStaff}
      />
    </stack.Navigator>
  );
};

export default DS;
