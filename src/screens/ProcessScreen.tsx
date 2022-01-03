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

type Props = NativeStackScreenProps<StackParams, "ProcessScreen">;

const ProcessScreen = ({ navigation }: Props) => {
  const [panel, setPanel] = useState(0);

  const setStatus = (status: string) => {
    if (status[0] === "A") {
      if (status === "A-9") {
        setPanel(1);
      } else {
        setPanel(2);
      }
    } else if (status[0] === "B") {
      navigation.navigate("HomeScreen");
    } else if (status[0] === "C") {
      navigation.navigate("HomeScreen");
    }
  };

  const panels = [
    <IndicationsPanel setStatus={setStatus} />,
    <AlternativePanel setStatus={setStatus} />,
    <TechniquePanel setStatus={setStatus} />,
    <EvaluatePanel setStatus={setStatus}  />,
    <CarePanel setStatus={setStatus}  />,
  ];

  return <View style={common.container}>{panels[panel]}</View>;
};

export default ProcessScreen;
