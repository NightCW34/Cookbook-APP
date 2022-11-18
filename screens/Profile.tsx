import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DescriptionProfile from "../components/MyProfile/DescriptionProfile";

const Profile = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <DescriptionProfile />
    </SafeAreaView>
  );
};

export default Profile;
