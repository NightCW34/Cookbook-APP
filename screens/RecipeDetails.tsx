import { Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const RecipeDetails = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Recipe Details</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RecipeDetails;