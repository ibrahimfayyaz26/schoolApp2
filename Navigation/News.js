import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";
import { main, title } from "../color";

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
        name="News"
        options={{
          headerBackTitleVisible: false,
        }}
        component={NewsStu}
      />
      <stack.Screen
        name="NewsDetails"
        options={({ route }) => ({
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
