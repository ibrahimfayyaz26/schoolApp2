import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

//Screens
import DS from "../screens/D&S/D&S";
import Dairy from "../screens/dairy/Dairy";
// import News from "../screens/news/News";
import Leave from "../screens/leave/Leave";
import User from "../screens/user/MainPage";
import News from "./News";

const Tab = createMaterialBottomTabNavigator();

const Main = () => {
  return (
    <NavigationContainer>
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
          name="Leave"
          component={Leave}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="scroll" color={color} size={25} />
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
          name="User"
          component={User}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="user" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;
