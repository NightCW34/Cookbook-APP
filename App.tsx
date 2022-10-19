import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./navigations/BottomTabs";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <BottomTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
