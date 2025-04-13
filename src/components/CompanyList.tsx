import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CompanyItem from "./CompanyItem";
import type { CompanyList as CompanyListType } from "../types";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "../navigation/stack/MainStackNavigator";
import { mainNavigations } from "../constants";

type AuthHomeScreenProps = StackScreenProps<
  MainStackParamList,
  typeof mainNavigations.COMPANY_LIST
>;

function CompanyList({ navigation }: AuthHomeScreenProps) {
  const data: CompanyListType = [
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

  const handlePressItem = () => {
    navigation.navigate(mainNavigations.EQUIPMENT_LIST);
  };

  return (
    <FlatList
      data={data}
      renderItem={(item) => (
        <CompanyItem item={item.item} onPress={handlePressItem} />
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

export default CompanyList;
