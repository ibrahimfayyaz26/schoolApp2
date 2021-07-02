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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../../components/Input";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";
import Swiper from "react-native-swiper";
import Toast from "react-native-toast-message";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/newsAction";
import mime from "mime";

const { height, width } = Dimensions.get("window");

const UploadNewsPr = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [isImage, setIsImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const remove = () => {
    setImage("");
    setIsImage(false);
  };

  const upload = async () => {
    if (title === "" || description === "" || !image || !isImage) {
      Toast.show({
        type: "error",
        text1: "Fill the form",
      });
      setIsLoading(false);
    } else {
      const form = new FormData();
      form.append("title", title);
      form.append("description", description);
      form.append("image", {
        name: image.split("/").pop(),
        uri: image,
        type: mime.getType(image),
      });
      props.uploadNews(form);
      setTitle("");
      setDescription("");
      setImage([]);
      setIsImage(false);
      setIsLoading(false);
      Toast.show({
        type: "success",
        text1: "News added",
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
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setIsImage(true);
    }
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      viewIsInsideTabBar={true}
      extraHeight={100}
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: "center", marginTop: 6 }}>
          <Input
            placeholder="Title"
            value={title}
            onChange={(i) => setTitle(i)}
          />
          <Input
            placeholder="Description"
            value={description}
            onChange={(i) => setDescription(i)}
          />
        </View>
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
          {isImage ? (
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
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const mapDispatch = (dispatch) => {
  return {
    uploadNews: (form1) => dispatch(Actions.postNews(form1)),
  };
};

export default connect(null, mapDispatch)(UploadNewsPr);

const styles = StyleSheet.create({});
