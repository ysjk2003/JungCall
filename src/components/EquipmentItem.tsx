import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Pressable } from "react-native-gesture-handler";
import { Equipment } from "../types";
import { colors } from "../constants";

type Props = {
  item: Equipment;
  onPress: () => void;
};

function EquipmentItem(props: Props) {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <View style={styles.innerContainer}>
        {props.item.image !== undefined && (
          <View key={props.item.id} style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: `${
                  Platform.OS === "ios"
                    ? "http://localhost:3030/"
                    : "http://10.0.2.2:3030/"
                }${props.item.image}`,
              }}
              resizeMode="cover"
            />
          </View>
        )}
        {props.item.image === undefined && (
          <View style={[styles.imageContainer, styles.emptyImageContainer]}>
            <Text style={styles.text}>No Image</Text>
          </View>
        )}

        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{props.item.name}</Text>
          <Text style={styles.priceText}>
            시간당 단가: {props.item.pricePerHour}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginVertical: 12,
    borderColor: colors.ORANGE_500,
    borderRadius: 5,
    borderWidth: 1,
    padding: 20,
  },
  innerContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    width: Dimensions.get("screen").width / 2 - 45,
    height: Dimensions.get("screen").width / 2 - 45,
    marginRight: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  emptyImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.GRAY_200,
    borderRadius: 5,
    borderWidth: 1,
  },
  textContainer: {
    marginTop: 7,
    gap: 8,
  },
  nameText: {
    fontWeight: "600",
    fontSize: 14,
  },
  priceText: {
    fontWeight: "500",
    fontSize: 12,
  },
  text: {
    fontSize: 13,
  },
});

export default EquipmentItem;
