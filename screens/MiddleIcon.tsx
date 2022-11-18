import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Tostada from '../components/HowToMake/Tostada';

const MiddleIcon = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Tostada />
    </SafeAreaView>
  );
};

export default MiddleIcon;
