import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {DRUGS} from "../constants/data";

const ListSlectedDrugsScreen = ({route}) => {
  const drugId = route.params.drugId;

  const seledtedDrugs = DRUGS.find((lm) => lm.drugId === drugId);

  const w = 44;
  const strength = seledtedDrugs.styrka.charAt(seledtedDrugs.styrka.length - 5);
  const numStrength = parseFloat(seledtedDrugs.styrka);

  const c1 = strength === "m";
  const c2 = seledtedDrugs.dosiMg;
  const c3 = (c2 * w) / numStrength;
  const c4 = seledtedDrugs.drugName === "Betapred";
  const c5 = seledtedDrugs.drugName === "Ondansetron";
  const c6 = seledtedDrugs.drugName === "Phenergan";

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={{color: "white"}}>
            {seledtedDrugs.drugName} {seledtedDrugs.styrka}
          </Text>
        </View>
        <View>
          {c4 && c3 >= 1 ? (
            <Text style={{color: "white"}}>ge 1 ml</Text>
          ) : c5 && c3 >= 2 ? (
            <Text style={{color: "white"}}>ge 2 ml</Text>
          ) : c6 && c3 >= 0.5 ? (
            <Text style={{color: "white"}}>ge 0,5 ml</Text>
          ) : (
            <Text style={{color: "white"}}>ge {c3} ml</Text>
          )}
        </View>
        <View>
          <Text style={{color: "white"}}>verklig mängd: {c3} ml</Text>
        </View>

        <View>
          <Text style={{color: "white"}}>{c3} ml</Text>
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
    // alignItems: "center",
    marginVertical: 9,
    marginHorizontal: 22,
  },
});
