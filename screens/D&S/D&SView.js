import React from "react";
import { View, Image } from "react-native";
import Swiper from "react-native-swiper";

const DSView = (props) => {
  let image = [...props.route.params.item[0].images];
  // console.log(image);

  return (
    <View style={{ flex: 1 }}>
      <Swiper showsButtons loop={false} style={{}}>
        {image.map((im) => {
          // console.log(im);
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
