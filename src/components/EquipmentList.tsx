import React from "react";
import { FlatList, StyleSheet } from "react-native";
import EquipmentItem from "./EquipmentItem";
import type { EquipmentList as EquipmentListType } from "../types";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "../navigation/stack/MainStackNavigator";
import { mainNavigations } from "../constants";

type EquipmentListProps = StackScreenProps<
  MainStackParamList,
  typeof mainNavigations.COMPANY_LIST
>;

function EquipmentList({ navigation }: EquipmentListProps) {
  const data: EquipmentListType = [
    { id: "1", name: "5톤", pricePerHour: "5만원" },
  ];

  const handlePressEquipment = () => {
    navigation.navigate(mainNavigations.RESERVATION);
  };

  return (
    <FlatList
      data={data}
      renderItem={(item) => (
        <EquipmentItem item={item.item} onPress={handlePressEquipment} />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 15,
  },
});

export default EquipmentList;
