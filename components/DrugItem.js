import {StyleSheet, Text, View} from "react-native";
import React from "react";

const DrugItem = ({drugName}) => {
  return (
    <View>
      <Text>{drugName}</Text>
    </View>
  );
};

export default DrugItem;

const styles = StyleSheet.create({});
