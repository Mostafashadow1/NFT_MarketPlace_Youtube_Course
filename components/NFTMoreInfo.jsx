import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";

const NFTMoreInfo = ({ address, tokenId, tokenSt, blockchain }) => {
  return (
    <View>
      <View style={styles.details}>
        <Text style={styles.title}>Contract Address</Text>
        <Text style={styles.value}>{address}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Token ID</Text>
        <Text style={styles.value}>{tokenId}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Token Standerd</Text>
        <Text style={styles.value}>{tokenSt}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Blockchain</Text>
        <Text style={styles.value}>{blockchain}</Text>
      </View>
    </View>
  );
};

export default NFTMoreInfo;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBg,
    marginVertical: SIZES.small - 4,
  },
  title: {
    color: COLORS.white,
  },
  value: {
    color: COLORS.gray,
    marginBottom: SIZES.small - 2,
  },
});
