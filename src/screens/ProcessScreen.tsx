import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../../App";
import { View } from "react-native";
import common from "~/styles/common";
import IndicationsPanel from "~/panels/IndicationsPanel";
import AlternativePanel from "~/panels/AlternativePanel";
import TechniquePanel from "~/panels/TechniquePanel";
import EvaluatePanel from "~/panels/EvaluatePanel";
import CarePanel from "~/panels/CarePanel";
import { Button } from "react-native-elements";

type Props = NativeStackScreenProps<StackParams, "ProcessScreen">;

const ProcessScreen = ({ navigation }: Props) => {
  const [state, setState] = useState(1);
  const panels = [
    <EvaluatePanel />,
    <IndicationsPanel />,
    <AlternativePanel />,
    <TechniquePanel />,
    <CarePanel />,
  ];
  return (
    <View style={common.container}>
      {panels[state]}
      <View style={{padding: 20, marginBottom: 20}}>
        <Button
          title="確認"
          // disabled={true}
          onPress={() => {
            if (state !== panels.length - 1) setState(state + 1);
            else navigation.navigate("HomeScreen");
          }}
        />
      </View>
    </View>
  );
};

export default ProcessScreen;
