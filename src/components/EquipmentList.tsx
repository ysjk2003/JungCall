import React from "react";
import { FlatList, StyleSheet } from "react-native";
import EquipmentItem from "./EquipmentItem";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "../navigation/stack/MainStackNavigator";
import { mainNavigations } from "../constants";
import { useGetEquipment } from "../hooks/queires/useGetCompany";

type EquipmentListProps = StackScreenProps<
  MainStackParamList,
  typeof mainNavigations.COMPANY_LIST
>;

function EquipmentList({ navigation, route }: EquipmentListProps) {
  const { data } = useGetEquipment(route.params?.companyId || "");

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
