import React, { useState } from "react";
import { View } from "react-native";
import { ThemeProvider, Input, Button } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../../App";
import common from "~/styles/common";
import theme from "~/styles/theme";
import PatientModel from "~/type/PatientModel";

type Props = NativeStackScreenProps<StackParams, "AddScreen">;

const AddScreen = ({ navigation }: Props) => {
  const [patient, setPatient] = useState<PatientModel>({
    id: 0,
    name: "",
    gender: "male",
    bed: "",
    case: "",
    age: 0,
    day: 0,
    foleyStatus: "none",
    state: "",
    insertedDate: new Date(),
    updatedDate: new Date("2022-01-16").toISOString().split('T')[0]
  });

  return (
    <ThemeProvider theme={theme}>
      <View style={common.screen}>
        <View style={common.container}>
          <Input
            label="姓名"
            placeholder="王大明"
            leftIcon={{ type: "font-awesome-5", name: "user-alt" }}
            onChangeText={(text: string) =>
              setPatient({ ...patient, name: text })
            }
          />
          <Input
            label="床號"
            placeholder="123"
            leftIcon={{ type: "font-awesome", name: "bed" }}
            onChangeText={(text: string) =>
              setPatient({ ...patient, bed: text })
            }
          />
          <Input
            label="病歷號"
            placeholder="123-456-789"
            leftIcon={{ type: "ionicon", name: "document-attach-outline" }}
            onChangeText={(text: string) =>
              setPatient({ ...patient, case: text })
            }
          />
          <Input
            label="年齡"
            placeholder="75"
            leftIcon={{ type: "material-community", name: "numeric" }}
            onChangeText={(text: string) =>
              setPatient({ ...patient, age: Number(text) })
            }
          />
          <Input
            label="入院天數"
            placeholder="3"
            leftIcon={{ type: "ionicon", name: "today" }}
            onChangeText={(text: string) =>
              setPatient({ ...patient, day: Number(text) })
            }
          />
        </View>
        <View style={{ padding: 40 }}>
          <Button
            disabled={
              patient.name === "" ||
              patient.bed === "" ||
              patient.case === "" ||
              patient.age === 0 ||
              patient.day === 0
            }
            title="尿管狀態"
            onPress={() => navigation.navigate("ProcessScreen", { patient })}
          />
        </View>
      </View>
    </ThemeProvider>
  );
};

export default AddScreen;
