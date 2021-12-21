import React from "react";
import { View } from "react-native";
import { ThemeProvider, Text } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../../App";
import common from "~/styles/common";
import theme from "~/styles/theme";

type Props = NativeStackScreenProps<StackParams, "HomeScreen">;

const InfoScreen = ({ navigation }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <View style={common.screen}>
        <View style={common.container}>
          <Text h2>王大明</Text>
        </View>
      </View>
    </ThemeProvider>
  );
};

export default InfoScreen;
