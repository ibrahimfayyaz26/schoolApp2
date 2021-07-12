import React from "react";
import { Text, View, Dimensions, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";

const { height, width } = Dimensions.get("window");

const ImageTaker = (props) => {
  const { setImage, image, setIsLoading, isLoading, upload } = props;

  const remove = () => {
    setImage("");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      // console.log(result.uri);
    }
  };

  return (
    <>
      <View
        style={{
          marginTop: 30,
          borderRadius: 25,
          width: width / 1.05,
          height: height / 3,
          borderWidth: 1,
          borderColor: "brown",
          justifyContent: "center",
          backgroundColor: "#242f3e",
          alignSelf: "center",
        }}
      >
        {!image == "" ? (
          <TouchableOpacity
            key={Math.random() * Math.random()}
            activeOpacity={0.9}
            onLongPress={() => remove()}
          >
            <Image
              key={image}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 25,
              }}
              source={{ uri: image }}
            />
          </TouchableOpacity>
        ) : (
          <Text style={{ textAlign: "center", color: "white" }}>
            Take picture
          </Text>
        )}
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Button icon="camera" mode="text" onPress={() => pickImage()}>
          Photo
        </Button>
        <Button
          icon="upload"
          mode="text"
          loading={isLoading}
          onPress={() => [setIsLoading(true), upload()]}
        >
          Upload
        </Button>
      </View>
    </>
  );
};

export default ImageTaker;
