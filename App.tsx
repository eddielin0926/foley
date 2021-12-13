import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "~/screens/HomeScreen";
import ProcessScreen from "~/screens/ProcessScreen";

export type StackParams = {
  HomeScreen: undefined;
  ProcessScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "首頁" }}
          />
          <Stack.Screen
            name="ProcessScreen"
            component={ProcessScreen}
            options={{ title: "流程" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
