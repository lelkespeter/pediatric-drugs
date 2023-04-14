import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MedicinesInCategoryScreen from "./screens/MedicinesInCategoryScreen";
import {GlobalStyles} from "./constants/appColors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.darkgreen},
            headerTintColor: "white",
            contentStyle: {backgroundColor: "#094609"},
          }}
        >
          <Stack.Screen
            name="Kategorier"
            component={CategoriesScreen}
            options={{
              title: "Kategorier av läkemedel",
            }}
          />
          <Stack.Screen name="List" component={MedicinesInCategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
