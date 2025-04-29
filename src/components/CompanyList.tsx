import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CompanyItem from "./CompanyItem";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "../navigation/stack/MainStackNavigator";
import { mainNavigations } from "../constants";
import { useGetCompany } from "../hooks/queires/useGetCompany";

type CompanyListProps = StackScreenProps<
  MainStackParamList,
  typeof mainNavigations.COMPANY_LIST
>;

function CompanyList({ navigation }: CompanyListProps) {
  const { data } = useGetCompany();

  const handlePressItem = (id: string) => {
    navigation.navigate(mainNavigations.EQUIPMENT_LIST, { companyId: id });
  };

  return (
    <FlatList
      data={data}
      renderItem={(item) => (
        <CompanyItem
          item={item.item}
          onPress={() => handlePressItem(item.item.id)}
        />
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
