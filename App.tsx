import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/root/RootNavigator";
import Toast from "react-native-toast-message";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./src/api/queryClient";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>
      <Toast />
    </>
  );
}

export default App;
