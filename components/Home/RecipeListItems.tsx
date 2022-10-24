import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import RecipeSection from "./RecipeSection";
import { flingGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler";

const ListItem = ({ item }: any) => {
  return (
    <View style={styles.item}>
      <View>
        <ImageBackground
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          imageStyle={{ borderRadius: 10 }}
          resizeMode="cover"
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={styles.rating}>
              <AntDesign name="star" size={15} color="white" />
              <Text style={styles.rate_text}>{item.rating}</Text>
            </View>
            <View style={styles.bookmark}>
              <View style={styles.fav}>
                <Feather name="bookmark" size={25} color="black" />
              </View>
            </View>
          </View>
          <View style={styles.play_button}>
            <TouchableOpacity style={styles.play}>
              <Entypo name="controller-play" size={40} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", alignItems: "flex-end" }}>
            <View style={styles.time}>
              <Text style={styles.rate_text}>{item.time}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flexDirection: "row" }}>
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
        rating: "4,5",
        time: "17:24",
      },
      {
        key: "2",
        text: "How to make hamburger at home",
        uri: "https://parade.com/.image/t_share/MTkwNTc4MzQwODAyNjAyMTA5/hamburger-with-fries-and-vegetables.jpg",
        rating: "4,6",
        time: "15:04",
      },

      {
        key: "3",
        text: "How to make a salad in home",
        uri: "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_960_720.jpg",
        rating: "4,3",
        time: "13:00",
      },
      {
        key: "4",
        text: "How to make a birthday cake",
        uri: "https://cdn.pixabay.com/photo/2015/08/31/23/42/cake-916253_960_720.jpg",
        rating: "4,0",
        time: "12:34",
      },
      {
        key: "5",
        text: "How to cook a tasty chicken",
        uri: "https://cdn.pixabay.com/photo/2016/02/24/03/04/chicken-1218968_960_720.jpg",
        rating: "4,9",
        time: "11:30",
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
  play: {
    backgroundColor: "#B9B5B0",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 4,
    opacity: 0.8,
  },
  rating: {
    backgroundColor: "#B9B5B0",
    width: 60,
    borderRadius: 5,
    margin: 10,
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  rate_text: {
    color: "white",
    fontFamily: "Poppins_600SemiBold",
    paddingTop: 5,
    paddingHorizontal: 5,
  },
  time: {
    backgroundColor: "#B9B5B0",
    width: 60,
    borderRadius: 5,
    margin: 10,
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  play_button: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  bookmark: {
    alignItems: "flex-end",
    flex: 1,
  },
  fav: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
