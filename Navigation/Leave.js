import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";
import Leave from "../screens/leave/Leave";
import LeavePr from "../screens/leave/LeaveStudentPr";
import LeaveDetails from "../screens/leave/LeaveDetails";
import LeaveStaffDetails from "../screens/leave/LeaveStaffDetails";
import { main, title } from "../color";

import { connect } from "react-redux";

const stack = createStackNavigator();

const { height, width } = Dimensions.get("window");

const LeaveStack = (props) => {
  if (!props.UserData[0].isStaff && !props.UserData[0].isAdmin) {
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
        <stack.Screen name="Leave" component={Leave} />
      </stack.Navigator>
    );
  } else if (props.UserData[0].isStaff && !props.UserData[0].isAdmin) {
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
        <stack.Screen
          name="LeaveStaff"
          options={{
            headerTitle: "Leaves",
          }}
          component={LeavePr}
        />
        <stack.Screen
          name="LeaveStaffDetails"
          options={{
            headerTitle: "Leaves Details",
          }}
          component={LeaveStaffDetails}
        />
      </stack.Navigator>
    );
  } else if (props.UserData[0].isStaff && props.UserData[0].isAdmin) {
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
        <stack.Screen
          name="LeavePr"
          options={{
            headerTitle: "Leaves",
          }}
          component={LeavePr}
        />
        <stack.Screen
          name="LeaveDetails"
          options={{
            headerTitle: "Leave Details",
          }}
          component={LeaveDetails}
        />
      </stack.Navigator>
    );
  }
  return null;
};

const propsState = (state) => {
  const { User } = state;
  return {
    UserData: User.User,
  };
};

export default connect(propsState, null)(LeaveStack);
