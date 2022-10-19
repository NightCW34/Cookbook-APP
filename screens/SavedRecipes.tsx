import { Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SavedRecipes = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Saved Recipes</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SavedRecipes;
