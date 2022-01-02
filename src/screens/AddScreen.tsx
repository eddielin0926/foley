import React from "react";
import { View } from "react-native";
import { ThemeProvider, Input, Button } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../../App";
import common from "~/styles/common";
import theme from "~/styles/theme";

type Props = NativeStackScreenProps<StackParams, "AddScreen">;

const AddScreen = ({ navigation }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <View style={common.screen}>
        <View style={common.container}>
          <Input
            label="姓名"
            placeholder="王大明"
            leftIcon={{ type: "font-awesome-5", name: "user-alt" }}
          />
          <Input
            label="床號"
            placeholder="123"
            leftIcon={{ type: "font-awesome", name: "bed" }}
          />
          <Input
            label="病歷號"
            placeholder="123-456-789"
            leftIcon={{ type: "ionicon", name: "document-attach-outline" }}
          />
          <Input
            label="年齡"
            placeholder="75"
            leftIcon={{ type: "material-community", name: "numeric" }}
          />
          <Input
            label="入院天數"
            placeholder="3"
            leftIcon={{ type: "ionicon", name: "today" }}
          />
        </View>
        <View style={{ padding: 40 }}>
          <Button title="尿管狀態" onPress={() => navigation.navigate("ProcessScreen")} />
        </View>
      </View>
    </ThemeProvider>
  );
};

export default AddScreen;
