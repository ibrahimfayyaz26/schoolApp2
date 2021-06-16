import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";
import Swiper from "react-native-swiper";
import Toast from "react-native-toast-message";
import { Picker, Form } from "native-base";

const { height, width } = Dimensions.get("window");

const DSStaff = (props) => {
  const [Iclass, setClass] = useState("");
  const [image, setImage] = useState([]);
  const [isImage, setIsImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [picked, setPicked] = useState("Class");

  const remove = (im) => {
    const newImage = image.filter((img) => img != im);
    setImage(newImage);
    if (!newImage.length) setIsImage(false);
  };

  const upload = async () => {
    if (Iclass === "Class" || !image.length || !isImage) {
      Toast.show({
        type: "error",
        text1: "Fill the form",
      });
      setIsLoading(false);
    } else {
      setClass("");
      setImage([]);
      setIsImage(false);
      setIsLoading(false);
      Toast.show({
        type: "success",
        text1: "DateSheet & Syllabus added",
      });
      props.navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Toast.show({
          type: "error",
          text1: "Permission",
          text2: "Sorry, we need camera roll permissions to make this work!",
        });
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.cancelled) {
      setImage([...image, result.uri]);
      setIsImage(true);
    }
  };

  return (
    <>
      <View>
        <Form>
          <Picker
            note
            mode="dropdown"
            style={{
              width: width / 2,
              height: height / 10,
              alignSelf: "center",
            }}
            selectedValue={Iclass}
            onValueChange={(i) => setClass(i)}
          >
            <Picker.Item label="Class" value="key0" />
            <Picker.Item label="6Th" value="key1" />
            <Picker.Item label="7Th" value="key2" />
            <Picker.Item label="8Th" value="key3" />
            <Picker.Item label="9Th" value="key4" />
            <Picker.Item label="10Th" value="key5" />
          </Picker>
        </Form>
      </View>
      <View
        style={{
          marginTop: 30,
          borderRadius: 25,
          width: width / 1.03,
          height: height / 2,
          borderWidth: 1,
          borderColor: "brown",
          justifyContent: "center",
          backgroundColor: "#242f3e",
          alignSelf: "center",
        }}
      >
        {isImage ? (
          <Swiper showsButtons loop={false} style={{ height: "100%" }}>
            {image.map((im) => {
              return (
                <TouchableOpacity
                  key={Math.random() * Math.random()}
                  activeOpacity={0.9}
                  onLongPress={() => remove(im)}
                >
                  <Image
                    key={im.uri}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 25,
                    }}
                    source={{ uri: im }}
                  />
                </TouchableOpacity>
              );
            })}
          </Swiper>
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

export default DSStaff;

const styles = StyleSheet.create({});
