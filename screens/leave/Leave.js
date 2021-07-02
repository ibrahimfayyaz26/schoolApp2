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
import { Picker, Form } from "native-base";
import classesData from "../../data/ClassesData.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { url } from "../../url";
import axios from "axios";
import mime from "mime";

const { height, width } = Dimensions.get("window");

const Leave = (props) => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [picked, setPicked] = useState("Class");
  const [isImage, setIsImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const remove = () => {
    setImage();
    setIsImage(false);
  };

  const upload = async () => {
    if (
      picked == "Class" ||
      name === "" ||
      fatherName === "" ||
      phone === "" ||
      description === "" ||
      !image ||
      !isImage
    ) {
      Toast.show({
        type: "error",
        text1: "Fill the form",
      });
      setIsLoading(false);
    } else {
      const form = new FormData();
      form.append("name", name);
      form.append("phone", phone);
      form.append("fatherName", fatherName);
      form.append("description", description);
      form.append("classes", picked);
      form.append("image", {
        name: image.split("/").pop(),
        uri: image,
        type: mime.getType(image),
      });
      send(form);
      setName("");
      setPhone("");
      setFatherName("");
      setDescription("");
      setPicked("Class");
      setImage();
      setIsImage(false);
      setIsLoading(false);
    }
  };

  const send = async (form) => {
    const token = await AsyncStorage.getItem("token");
    const data = await axios.post(`${url}/Leave`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data.data);
    Toast.show({
      type: "success",
      text1: "Leave send",
    });
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
          <Input placeholder="Name" value={name} onChange={(i) => setName(i)} />
          <Input
            placeholder="Father Name"
            value={fatherName}
            onChange={(i) => setFatherName(i)}
          />
          <Input
            placeholder="Phone no"
            value={phone}
            onChange={(i) => setPhone(i)}
          />
          <Input
            placeholder="Description"
            value={description}
            onChange={(i) => setDescription(i)}
          />
        </View>
        <View
          style={{
            borderWidth: 2,
            borderColor: "#393e46",
            borderRadius: 28,
            width: width / 1.8,
            height: height / 12,
            color: "#00adb5",
            textAlign: "center",
            marginTop: 15,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
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
              {classesData.map((i) => (
                <Picker.Item
                  key={i.id}
                  label={i.class + " - " + i.section}
                  value={i._id}
                />
              ))}
            </Picker>
          </Form>
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

export default Leave;

const styles = StyleSheet.create({});
