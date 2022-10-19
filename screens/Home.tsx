import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
