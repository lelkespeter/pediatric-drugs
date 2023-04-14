import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MedicinesInCategoryScreen from "./screens/MedicinesInCategoryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Kategorier" component={CategoriesScreen} />
          <Stack.Screen name="List" component={MedicinesInCategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
