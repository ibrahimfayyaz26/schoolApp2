import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Screens
import NewsStu from "../screens/news/News";
import NewsPr from "../screens/news/UploadNewsPr";

const Tab = createMaterialTopTabNavigator();

const News = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={NewsStu} />
      <Tab.Screen name="NewsPr" component={NewsPr} />
    </Tab.Navigator>
  );
};

export default News;
