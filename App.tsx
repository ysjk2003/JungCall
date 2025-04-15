import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/root/RootNavigator";
import Toast from "react-native-toast-message";

function App() {
  return (
    <>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default App;
