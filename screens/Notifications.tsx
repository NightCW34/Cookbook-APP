import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Notifications = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Notifications</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Notifications;
