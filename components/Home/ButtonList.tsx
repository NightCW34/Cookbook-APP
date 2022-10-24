import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const COLORS = {
  primary: "#E13E3E",
  secondary: "#FFFFFF",
  tertiary: "#D5AAB3",
  bg: "transparent",
};

const categories = [
  {
    id: "1",
    name: "Salad",
  },
  {
    id: "2",
    name: "Breakfast",
  },
  {
    id: "3",
    name: "Appetizer",
  },
  {
    id: "4",
    name: "Noodle",
  },
  {
    id: "5",
    name: "Fastfood",
  },
];

const ButtonList = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(1);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedCategoryIndex(index)}
        >
          <View
            style={{
              backgroundColor:
                selectedCategoryIndex == index ? COLORS.primary : COLORS.bg,
              ...styles.categoryBtn,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins_600SemiBold",
                color:
                  selectedCategoryIndex == index
                    ? COLORS.secondary
                    : COLORS.tertiary,
              }}
            >
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ButtonList;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginLeft: 9,
    marginVertical: 15,
  },
  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 100,
    marginRight: 10,
    borderRadius: 10,
    paddingTop: 3,
  },
});
