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
import mime from "mime";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/D&SAction";

const { height, width } = Dimensions.get("window");

const DSStaff = (props) => {
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
    if (picked === "Class" || !image.length || !isImage || picked === "") {
      Toast.show({
        type: "error",
        text1: "Fill the form",
      });
      setIsLoading(false);
    } else {
      const form = new FormData();
      form.append("classes", picked);
      image.map((im) =>
        form.append("images", {
          name: im.split("/").pop(),
          uri: im,
          type: mime.getType(im),
        })
      );
      props.uploadDS(form);
      setPicked("");
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
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.cancelled) {
      setImage([...image, result.uri]);
      setIsImage(true);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
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
            selectedValue={picked}
            onValueChange={(i) => setPicked(i)}
          >
            <Picker.Item label="Class" value="Class" />
            <Picker.Item label="6Th" value="6Th" />
            <Picker.Item label="7Th" value="7Th" />
            <Picker.Item label="8Th" value="8Th" />
            <Picker.Item label="9Th" value="9Th" />
            <Picker.Item label="10Th" value="10Th" />
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
    </ScrollView>
  );
};

const mapDispatch = (dispatch) => {
  return {
    uploadDS: (form1) => dispatch(Actions.postDS(form1)),
  };
};

export default connect(null, mapDispatch)(DSStaff);

const styles = StyleSheet.create({});
