import {StyleSheet, Text, TextInput, View} from "react-native";
import React, {useContext} from "react";

import {AppContext} from "../context/AppContext";

const WeightInput = () => {
  const {weight, weightInputHandler} = useContext(AppContext);
  return (
    <>
      <View style={{marginTop: 7}}>
        <View style={{marginBottom: 5}}>
          <Text style={{color: "white"}}>Vikt:</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={weightInputHandler}
          value={weight}
          placeholder="vikt i Kg"
          keyboardType="decimal-pad"
        />
      </View>
    </>
  );
};

export default WeightInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 3,
    marginBottom: 11,
    marginHorizontal: 33,
    borderWidth: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
