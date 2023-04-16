import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AppContextProvider from "./context/AppContext";

import CategoriesScreen from "./screens/CategoriesScreen";
import MedicinesInCategoryScreen from "./screens/MedicinesInCategoryScreen";
import {GlobalStyles} from "./constants/appColors";
import ListSlectedDrugsScreen from "./screens/ListSlectedDrugsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AppContextProvider>
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
            <Stack.Screen
              name="Valda"
              component={ListSlectedDrugsScreen}
              options={{
                title: "Valda läkemedel",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
