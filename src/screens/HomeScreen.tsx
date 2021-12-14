import React from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Icon, ThemeProvider } from "react-native-elements";
import { StackParams } from "../../App";
import common from "~/styles/common";
import theme from "~/styles/theme";

type Props = NativeStackScreenProps<StackParams, "HomeScreen">;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <View style={common.container}>
        <Text>Home Screen</Text>
        <Button
          title="Process"
          onPress={() => navigation.navigate("ProcessScreen")}
        />
        <Icon
          raised
          name="plus"
          type="entypo"
          color="#f50"
          onPress={() => console.log("Add patient")}
          containerStyle={{
            position: "absolute",
            bottom: 15,
            right: 20,
          }}
        />
      </View>
    </ThemeProvider>
  );
};

export default HomeScreen;
