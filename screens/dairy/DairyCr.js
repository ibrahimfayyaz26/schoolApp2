import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import Toast from "react-native-toast-message";
import { Picker, Form } from "native-base";
import classesData from "../../data/ClassesData.json";
import { connect } from "react-redux";
import * as Actions from "../../store/actions/DairyAction";

const { height, width } = Dimensions.get("window");

const DairyCr = (props) => {
  const [dairy, setDairy] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [picked, setPicked] = useState("Class");

  const upload = async () => {
    if (picked === "Class" || dairy === "") {
      Toast.show({
        type: "error",
        text1: "Fill the form",
      });
      setIsLoading(false);
    } else {
      let body = {
        class: picked,
        dairy: dairy,
      };
      props.uploadDairy(body);
      setPicked("");
      setDairy("");
      setIsLoading(false);
      Toast.show({
        type: "success",
        text1: "Dairy added",
      });
      props.navigation.goBack();
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
            <Picker.Item label="Class" value="class" />
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
      <View style={{ alignItems: "center" }}>
        <TextInput
          placeholder="Diary"
          style={{
            borderWidth: 2,
            borderColor: "#393e46",
            borderRadius: 28,
            width: width / 1.05,
            height: height / 2.3,
            color: "#00adb5",
            textAlign: "center",
            marginTop: 15,
            padding: 5,
            fontSize: 18,
          }}
          value={dairy}
          multiline={true}
          onChangeText={(i) => setDairy(i)}
        />
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
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
    uploadDairy: (form1) => dispatch(Actions.postDairy(form1)),
  };
};

export default connect(null, mapDispatch)(DairyCr);

const styles = StyleSheet.create({});
