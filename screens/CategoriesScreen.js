import {FlatList, StyleSheet, Text, View} from "react-native";
import {useLayoutEffect} from "react";

import {LMCategory} from "../constants/kategorier";
import CategoryItem from "../components/CategoryItem";
import WeightInput from "../components/WeightInput";
import IconButton from "../components/IconButton";

const CategoriesScreen = ({navigation}) => {
  const renderCategoryItem = (itemData) => {
    function pressHandler() {
      navigation.navigate("List", {
        kategoriId: itemData.item.catId,
      });
    }

    function iconPresssHandler() {
      console.log("pressed!!");
    }

    // useLayoutEffect(() => {
    //   navigation.setOptions({
    //     headerRight: () => {
    //       return <IconButton onPress={iconPresssHandler} />;
    //     },
    //   });
    // }, [navigation, iconPresssHandler]);

    return (
      <CategoryItem catName={itemData.item.catName} onPress={pressHandler} />
    );
  };
  return (
    <>
      <FlatList
        data={LMCategory}
        keyExtractor={(item) => item.catId}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
