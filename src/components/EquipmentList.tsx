import React from "react";
import { FlatList, StyleSheet } from "react-native";
import EquipmentItem from "./EquipmentItem";
import type { EquipmentList as EquipmentListType } from "../types";

function EquipmentList() {
  const data: EquipmentListType = [
    { id: "1", name: "5톤", pricePerHour: "5만원" },
  ];

  const handlePressEquipment = () => {};

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
