import React from "react";
import { View, Text, Dimensions, FlatList } from "react-native";

const { height, width } = Dimensions.get("window");

const DairyDetails = (props) => {
  return (
    <FlatList
      style={{ flex: 1 }}
      data={props.route.params.data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: "#fee2f9",
            width: width / 1.08,
            height: height / 3,
            marginBottom: 15,
            marginTop: 6.5,
            elevation: 10,
            borderRadius: 10,
            shadowColor: "black",
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.26,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "grey",
              fontSize: 20,
              margin: 15,
            }}
          >
            Dairy:
          </Text>
          <Text
            style={{
              marginLeft: width / 15,
              marginTop: 3,
              fontSize: 18,
              width: width / 1.4,
              alignSelf: "center",
            }}
          >
            {item.dairy}
          </Text>
          <View
            style={{
              alignItems: "flex-end",
              margin: 5,
              top: height / 8,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                marginTop: height / 55,
                color: "#00adb5",
                marginBottom: height / 200,
              }}
            >
              {item.date.split(":").shift().slice(0, 10)}
            </Text>
          </View>
        </View>
      )}
    />
  );
};

export default DairyDetails;
