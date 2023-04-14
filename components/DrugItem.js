import {Alert, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

const DrugItem = ({drugName, styrka, catId}) => {
  return (
    <>
      <View style={styles.outerContainer}>
        <Text>{catId}</Text>
        <Pressable onPress={() => console.log("Pressed")}>
          <View style={styles.itemContainer}>
            <Text>{drugName}</Text>
            <Text> {styrka}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default DrugItem;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#00ffff",
  },
  itemContainer: {
    flexDirection: "row",
    marginRight: 11,
  },
});
