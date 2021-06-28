import React from "react";
import { View, Image } from "react-native";
import Swiper from "react-native-swiper";

const DSView = (props) => {
  const image = [...props.route.params.item[0].images];
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
                resizeMode: "contain",
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
