import {FlatList, StyleSheet, Text, View} from "react-native";

import {LMCategory} from "../constants/kategorier";
import CategoryItem from "../components/CategoryItem";
import WeightInput from "../components/WeightInput";

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
    <>
      <View style={styles.container}>
        <FlatList
          data={LMCategory}
          keyExtractor={(item) => item.catId}
          renderItem={renderCategoryItem}
          numColumns={2}
        />
        <WeightInput />
      </View>
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
  },
});
