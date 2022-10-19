import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const MiddleIcon = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>MiddleIcon</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MiddleIcon;
