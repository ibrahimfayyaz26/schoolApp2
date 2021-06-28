import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";

//Screens
import DS from "./D&S";
import Dairy from "./Dairy";
import Leave from "./Leave";
import User from "../screens/user/User";
import News from "./News";
import Auth from "./Auth";
import RegisterPr from "../screens/user/StaffRegisterPr";

const Tab = createMaterialBottomTabNavigator();
const stack = createStackNavigator();

const { height, width } = Dimensions.get("window");

const UserStack = () => {
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
      <stack.Screen name="User" component={User} />
      <stack.Screen
        name="RegisterPr"
        component={RegisterPr}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};

const Main = (props) => {
  return (
    <NavigationContainer>
      {props.UserData.length ? (
        <Tab.Navigator
          barStyle={{
            backgroundColor: "#222831",
          }}
          labeled={false}
          keyboardHidesNavigationBar={true}
          activeColor="#00adb5"
          inactiveColor="#393e46"
        >
          <Tab.Screen
            name="News"
            component={News}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="newspaper" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Dairy"
            component={Dairy}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="book" color={color} size={25} />
              ),
            }}
          />

          <Tab.Screen
            name="DS"
            component={DS}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="calendar-week" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Leave"
            component={Leave}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="scroll" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="User"
            component={UserStack}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="user" color={color} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Auth />
      )}
    </NavigationContainer>
  );
};

const propsState = (state) => {
  const { User } = state;
  return {
    UserData: User.User,
  };
};

export default connect(propsState, null)(Main);
