import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { ListItem, Text, Badge } from "native-base";
import { main, title } from "../color";

const CategoryFilter = (props) => {
  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <ListItem style={{ margin: 0, padding: 0, borderRadius: 0 }}>
        <TouchableOpacity
          key={1}
          onPress={() => {
            props.categoryFilter("all"), props.setActive(-1);
          }}
        >
          <Badge
            style={[
              styles.center,
              { margin: 5 },
              props.active == -1 ? styles.active : styles.inactive,
            ]}
          >
            <Text style={{ color: "white" }}>All</Text>
          </Badge>
        </TouchableOpacity>
        {props.categories.map((item) => (
          <TouchableOpacity
            key={Math.random() * Math.random()}
            onPress={() => {
              props.categoryFilter(item.id),
                props.setActive(props.categories.indexOf(item));
            }}
          >
            <Badge
              style={[
                styles.center,
                { margin: 5 },
                props.active == props.categories.indexOf(item)
                  ? styles.active
                  : styles.inactive,
              ]}
            >
              <Text style={{ color: "white" }}>
                {item.class + "-" + item.section}
              </Text>
            </Badge>
          </TouchableOpacity>
        ))}
      </ListItem>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: main,
  },
  inactive: {
    backgroundColor: title,
  },
});

export default CategoryFilter;
