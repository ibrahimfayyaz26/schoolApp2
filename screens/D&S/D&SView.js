import React from "react";
import { View, Image } from "react-native";
import Swiper from "react-native-swiper";

const DSView = (props) => {
  const image = [
    "https://upload.wikimedia.org/wikipedia/en/8/80/DSS-Logo.jpeg",
    "https://images.unsplash.com/photo-1619701959178-8923198fa661?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ];
  return (
    <View style={{ flex: 1 }}>
      <Swiper showsButtons loop={false} style={{}}>
        {image.map((im) => {
          return (
            <Image
              key={Math.round() * Math.round()}
              style={{
                width: "100%",
                height: "100%",
              }}
              source={{
                uri: im,
              }}
            />
          );
        })}
      </Swiper>
    </View>
  );
};

export default DSView;
