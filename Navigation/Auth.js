import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import MainPage from "../screens/user/MainPage";
import Login from "../screens/user/Login";
import Register from "../screens/user/Register";
import RegisterStaff from "../screens/user/StaffRegisterPr";

const stack = createStackNavigator();

const User = () => {
  return (
    <stack.Navigator headerMode={false}>
      <stack.Screen name="Main" component={MainPage} />
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Register" component={Register} />
      <stack.Screen name="RegisterStaff" component={RegisterStaff} />
    </stack.Navigator>
  );
};

export default User;
