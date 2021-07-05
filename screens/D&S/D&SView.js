import React from "react";
import { View, Image } from "react-native";
import Swiper from "react-native-swiper";

const DSView = (props) => {
  let image;
  if (props.route.params.item.length) {
    image = [...props.route.params.item[0].images];
  } else {
    image = [
      "https://st4.depositphotos.com/14953852/24787/v/1600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg",
    ];
  }
  // console.log(image);
  //https://st4.depositphotos.com/14953852/24787/v/1600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg

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
              resizeMode="contain"
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
