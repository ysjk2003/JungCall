import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { mainNavigations } from "../../constants";
import CompanyList from "../../components/CompanyList";
import EquipmentList from "../../components/EquipmentList";

export type MainStackParamList = {
  [mainNavigations.COMPANY_LIST]: undefined;
  [mainNavigations.EQUIPMENT_LIST]: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={mainNavigations.COMPANY_LIST}
        component={CompanyList}
        options={() => ({
          headerTitle: "지게차 업체 목록",
        })}
      />
      <Stack.Screen
        name={mainNavigations.EQUIPMENT_LIST}
        component={EquipmentList}
        options={() => ({
          headerTitle: "지게차 목록",
        })}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
