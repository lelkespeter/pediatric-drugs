import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {DRUGS} from "../constants/data";

const ListSlectedDrugsScreen = ({route}) => {
  const drugId = route.params.drugId;

  const seledtedDrugs = DRUGS.find((lm) => lm.drugId === drugId);

  return (
    <>
      <View>
        <Text style={{color: "white"}}>
          {seledtedDrugs.drugName} {seledtedDrugs.styrka}
        </Text>
      </View>
      <View>
        <Text style={{color: "white"}}>Dos i mg</Text>
      </View>

      <View>
        <Text style={{color: "white"}}>blaandning</Text>
      </View>
      <View>
        <Text style={{color: "white"}}>OBS!!</Text>
      </View>
    </>
  );
};

export default ListSlectedDrugsScreen;

const styles = StyleSheet.create({});
