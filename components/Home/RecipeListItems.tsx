import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import RecipeSection from "./RecipeSection";

const ListItem = ({ item }: any) => {
  return (
    <View style={styles.item}>
      <View>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.playbutton}>
          <Ionicons
            name="play"
            size={25}
            color="white"
            style={{ opacity: 1 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginTop: -50 }}>
        <View>
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Feather name="more-horizontal" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const RecipeListItems = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <RecipeSection
                title={section.title}
                SubTXT={section.subTitle}
                iconName={section.iconName}
              />
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default RecipeListItems;

const SECTIONS = [
  {
    title: "En Tendencia 🔥",
    subTitle: "See All",
    iconName: "arrowright",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "How to make sushi at home",
        uri: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/10/15/5e9977d4903ac.jpeg",
      },
      {
        key: "2",
        text: "How to make hamburger at home",
        uri: "https://parade.com/.image/t_share/MTkwNTc4MzQwODAyNjAyMTA5/hamburger-with-fries-and-vegetables.jpg",
      },

      {
        key: "3",
        text: "How to make a salad in home",
        uri: "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_960_720.jpg",
      },
      {
        key: "4",
        text: "How to make a birthday cake",
        uri: "https://cdn.pixabay.com/photo/2015/08/31/23/42/cake-916253_960_720.jpg",
      },
      {
        key: "5",
        text: "How to cook a tasty chicken",
        uri: "https://cdn.pixabay.com/photo/2016/02/24/03/04/chicken-1218968_960_720.jpg",
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  itemText: {
    color: "black",
    fontFamily: "Poppins_600SemiBold",
  },
  playbutton: {
    zIndex: 1,
    backgroundColor: "gray",
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: "50%",
    left: "40%",
    opacity: 0.8,
  },
});
