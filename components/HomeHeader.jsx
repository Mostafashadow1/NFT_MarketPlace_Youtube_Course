import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import avatar from "../assets/images/avatars/avatar03.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const HomeHeader = ({searchHandler}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            source={avatar}
            resizeMode="contain"
            style={{ width: 44, height: 44, borderRadius: 30 }}
          />
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <Text style={styles.userText}>MostafaMohamed</Text>
            <MaterialCommunityIcons
              name="check-decagram"
              size={24}
              color="white"
            />
          </View>
          <View>
            <Text style={{ color: COLORS.white }}>Creator</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: SIZES.small, paddingHorizontal: 10 }}>
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={24} color={COLORS.white} />
          <TextInput
            placeholder="Search by NFT name"
            placeholderTextColor={COLORS.white}
            style={{ flex: 1, color: COLORS.white }}
            onChangeText={searchHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 10,
  },
  userText: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.xLarge,
  },
  searchContainer: {
    width: "100%",
    borderRadius: SIZES.small,
    backgroundColor: COLORS.cardBg,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 30,
  },
});
