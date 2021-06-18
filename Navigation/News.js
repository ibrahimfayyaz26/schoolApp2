import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";

//Screens
import NewsStu from "../screens/news/News";
import NewsPr from "../screens/news/UploadNewsPr";

const stack = createStackNavigator();
const { height, width } = Dimensions.get("window");
const News = () => {
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
      <stack.Screen name="News" component={NewsStu} />
      <stack.Screen name="Add" component={NewsPr} />
    </stack.Navigator>
  );
};

export default News;
