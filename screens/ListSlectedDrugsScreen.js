import {StyleSheet, Text, View} from "react-native";
import React, {useContext} from "react";

import {DRUGS} from "../constants/data";
import DoseInMl from "../villkor/DoseInMl";
import QuantityToGive from "../villkor/QuantityToGive";
import {AppContext} from "../context/AppContext";
import NoMedicinesSelected from "../components/NoMedicinesSelected";

const ListSlectedDrugsScreen = ({route}) => {
  const drugId = route.params?.drugId;
  const {handlePress, selected} = useContext(AppContext);

  if (!drugId) {
    return <NoMedicinesSelected />;
  }

  const seledtedDrugs = DRUGS.find((lm) => lm.drugId === drugId);
  if (!seledtedDrugs) {
    return <NoMedicinesSelected />;
  }

  const strength = seledtedDrugs.styrka.charAt(seledtedDrugs.styrka.length - 5);
  const ml = DoseInMl(seledtedDrugs);
  const dos = QuantityToGive(seledtedDrugs);

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={{color: "white"}}>
            {seledtedDrugs.drugName} {seledtedDrugs.styrka}
          </Text>
        </View>
        <View>
          <Text style={{color: "white"}}>{dos}</Text>
        </View>
        <View>
          <Text style={{color: "white"}}> {ml}</Text>
        </View>
        <View>
          {seledtedDrugs.recept ? (
            <Text style={{color: "white"}}>
              Spädning: {seledtedDrugs.recept}
            </Text>
          ) : null}
        </View>
        <View>
          {seledtedDrugs.obs ? (
            <Text style={{color: "red", fontSize: 16, fontWeight: "bold"}}>
              OBS: {seledtedDrugs.obs}
            </Text>
          ) : null}
        </View>
      </View>
    </>
  );
};

export default ListSlectedDrugsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginVertical: 9,
    marginHorizontal: 22,
  },
});
