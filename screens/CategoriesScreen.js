import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

import {LMCategory} from "../constants/kategorier";
import CategoryItem from "../components/CategoryItem";

const CategoriesScreen = ({navigation}) => {
  const renderCategoryItem = (itemData) => {
    function pressHandler() {
      navigation.navigate("List", {
        kategoriId: itemData.item.catId,
      });
    }

    return (
      <CategoryItem catName={itemData.item.catName} onPress={pressHandler} />
    );
  };
  return (
    <FlatList
      data={LMCategory}
      keyExtractor={(item) => item.catId}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
