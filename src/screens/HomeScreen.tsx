import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  SpeedDial,
  ThemeProvider,
  Text,
  ListItem,
  Avatar,
} from "react-native-elements";
import { StackParams } from "../../App";
import StatusBadge from '~/components/StatusBadge'
import common from "~/styles/common";
import theme from "~/styles/theme";

type Props = NativeStackScreenProps<StackParams, "HomeScreen">;

const HomeScreen = ({ navigation }: Props) => {
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [patients, setPatients] = useState([
    {
      id: 0,
      name: "Amy Farha",
      avatar_url: "https://source.unsplash.com/600x600/?female",
      subtitle: "Vice President",
      status: "inserted" as const,
    },
    {
      id: 1,
      name: "Chris Jackson",
      avatar_url: "https://source.unsplash.com/600x600/?male",
      subtitle: "Vice Chairman",
      status: "none" as const,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <View style={common.screen}>
        <View style={common.container}>
          <Text h2>病患</Text>
          <View style={{ flex: 1 }}>
            <FlatList
              data={patients}
              renderItem={({ item }) => (
                <ListItem
                  bottomDivider
                  onPress={() => navigation.navigate("InfoScreen")}
                  containerStyle={{ borderRadius: 15, overflow: "hidden" }}
                >
                  <Avatar rounded source={{ uri: item.avatar_url }} />
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                  <StatusBadge foley={item.status} />
                </ListItem>
              )}
            />
          </View>
          <SpeedDial
            isOpen={open}
            icon={{ name: "edit", color: "#fff" }}
            openIcon={{ name: "close", color: "#fff" }}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}
          >
            <SpeedDial.Action
              icon={{ name: "add", color: "#fff" }}
              title="Add"
              onPress={() => navigation.navigate("AddScreen")}
            />
            <SpeedDial.Action
              icon={{ name: "delete", color: "#fff" }}
              title="Delete"
              onPress={() => console.log("Delete Something")}
            />
          </SpeedDial>
        </View>
      </View>
    </ThemeProvider>
  );
};

export default HomeScreen;
