import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CompanyItem from "./CompanyItem";
import { CompanyList } from "../types";

function EquipmentList() {
  const data: CompanyList = [
    {
      id: "1",
      name: "제일지게차",
      phone: "042-000-0000",
      location: "대전광역시 대덕구",
    },
    {
      id: "2",
      name: "제일지게차",
      phone: "042-000-0000",
      location: "대전광역시 대덕구",
    },
  ];

  return (
    <FlatList
      data={data}
      renderItem={(item) => <CompanyItem item={item.item} />}
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
