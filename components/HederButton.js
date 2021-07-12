import React from "react";
import { Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Dimensions } from "react-native";
import { main, title } from "../color";

const { height, width } = Dimensions.get("window");

const HederButton = (name, titleq, navigation, is) => {
  // console.log(is);
  if (is) {
    return {
      headerTitle: titleq,
      headerRight: () => (
        <Button
          onPress={() => navigation()}
          style={{
            alignSelf: "center",
            marginRight: 10,
          }}
          transparent
        >
          <Icon size={22} name={name} color={title} />
        </Button>
      ),
    };
  } else {
    return { headerTitle: titleq };
  }
};

export default HederButton;
