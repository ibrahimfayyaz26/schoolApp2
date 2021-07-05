import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../../components/Input";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";
import Toast from "react-native-toast-message";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/newsAction";
import mime from "mime";
import ImageTaker from "../../components/ImageTaker";

const { height, width } = Dimensions.get("window");

const UploadNewsPr = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const upload = async () => {
    if (title === "" || description === "" || image == "") {
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
      setImage("");
      // setIsImage(false);
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
        <ImageTaker
          setImage={setImage}
          image={image}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          upload={upload}
        />
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
