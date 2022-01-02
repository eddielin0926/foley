import React from "react";
import { View } from "react-native";
import { ThemeProvider, Text } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../../App";
import common from "~/styles/common";
import theme from "~/styles/theme";
import { useSelector } from "react-redux";
import { RootState } from "~/redux/store";

type Props = NativeStackScreenProps<StackParams, "InfoScreen">;

const InfoScreen = ({ route, navigation }: Props) => {
  console.log(route.params);
  const patients = useSelector((state: RootState) => state.hospital.patients);
  const patient = patients.length === 0 ? null : patients[route.params.id];
  return (
    <ThemeProvider theme={theme}>
      <View style={common.screen}>
        <View style={common.container}>
          {patient && (
            <>
              <Text h2>{patient.name}</Text>
              <Text h3>床號: {patient.bed}</Text>
              <Text h3>病歷號: {patient.case}</Text>
              <Text h3>年齡: {patient.age}</Text>
              <Text h3>入院天數: {patient.day}</Text>
              <Text h3>尿管狀態: {patient.foleyStatus}</Text>
            </>
          )}
        </View>
      </View>
    </ThemeProvider>
  );
};

export default InfoScreen;
