import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "~/screens/HomeScreen";
import ProcessScreen from "~/screens/ProcessScreen";
import AddScreen from "~/screens/AddScreen";
import InfoScreen from "~/screens/InfoScreen";

export type StackParams = {
  HomeScreen: undefined;
  ProcessScreen: undefined;
  AddScreen: undefined;
  InfoScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#6F6DE5",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: '首頁' }}/>
          <Stack.Screen name="ProcessScreen" component={ProcessScreen} options={{ title: '檢查' }}/>
          <Stack.Screen name="AddScreen" component={AddScreen} options={{ title: '新增' }} />
          <Stack.Screen name="InfoScreen" component={InfoScreen} options={{ title: '資訊' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
