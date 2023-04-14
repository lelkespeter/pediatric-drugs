import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

import {DRUGS} from "../constants/data";
import DrugItem from "../components/DrugItem";

const MedicinesInCategoryScreen = ({route}) => {
  const categoryId = route.params.kategoriId;

  const displayedDrugs = DRUGS.filter((lmItem) => {
    return lmItem.catId.includes(categoryId);
  });

  console.log("displayedDrugs", displayedDrugs);

  function renderDrug(itemData) {
    return (
      <DrugItem
        drugName={itemData.item.drugName}
        styrka={itemData.item.styrka}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedDrugs}
        keyExtractor={(item) => item.drugId}
        renderItem={renderDrug}
      />
    </View>
  );
};

export default MedicinesInCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17,
  },
});
