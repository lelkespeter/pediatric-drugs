import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useLayoutEffect} from "react";

import {DRUGS} from "../constants/data";
import DrugItem from "../components/DrugItem";
import {LMCategory} from "../constants/kategorier";

const MedicinesInCategoryScreen = ({route, navigation}) => {
  const categoryId = route.params.kategoriId;

  const displayedDrugs = DRUGS.filter((lmItem) => {
    return lmItem.catId.includes(categoryId);
  });

  useLayoutEffect(() => {
    const categoryName = LMCategory.find(
      (kategori) => kategori.catId === categoryId
    ).catName;

    navigation.setOptions({
      title: categoryName,
    });
  }, [navigation, categoryId]);

  function renderDrug(itemData) {
    const item = itemData.item;

    const drugItemProps = {
      id: item.drugId,
      drugName: item.drugName,
      styrka: item.styrka,
    };

    return <DrugItem {...drugItemProps} />;
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
