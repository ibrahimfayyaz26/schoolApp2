import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";

//Screens
import NewsStu from "../screens/news/News";
import NewsDetails from "../screens/news/NewsDetails";
import NewsPr from "../screens/news/UploadNewsPr";

const stack = createStackNavigator();
const { height, width } = Dimensions.get("window");
const News = () => {
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
        name="News"
        options={{
          headerBackTitleVisible: false,
        }}
        component={NewsStu}
      />
      <stack.Screen
        name="NewsDetails"
        options={({ route }) => ({
          headerBackTitleVisible: false,
          headerTitle: route.params.title,
        })}
        component={NewsDetails}
      />
      <stack.Screen
        name="Add"
        options={{
          headerBackTitleVisible: false,
        }}
        component={NewsPr}
      />
    </stack.Navigator>
  );
};

export default News;
