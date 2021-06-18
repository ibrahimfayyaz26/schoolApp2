import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

//Screens
import MainPage from "../screens/user/MainPage";
import Login from "../screens/user/Login";
import Register from "../screens/user/Register";
import RegisterStaff from "../screens/user/StaffRegisterPr";

const stack = createStackNavigator();
const { height, width } = Dimensions.get("window");
const User = () => {
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
      <stack.Screen name="Main" component={MainPage} />
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Register" component={Register} />
      <stack.Screen name="RegisterStaff" component={RegisterStaff} />
    </stack.Navigator>
  );
};

export default User;
