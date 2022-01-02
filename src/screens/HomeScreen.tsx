import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import DropDownPicker from "react-native-dropdown-picker";
import {
  SpeedDial,
  ThemeProvider,
  Text,
  ListItem,
  Avatar,
} from "react-native-elements";
import { StackParams } from "../../App";
import StatusBadge from "~/components/StatusBadge";
import common from "~/styles/common";
import theme from "~/styles/theme";
import { useSelector } from "react-redux";
import { RootState } from "~/redux/store";

type Props = NativeStackScreenProps<StackParams, "HomeScreen">;

const HomeScreen = ({ navigation }: Props) => {
  const patients = useSelector((state: RootState) => state.hospital.patients);

  const [open, setOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("all");
  const [filterItems, setFilterItems] = useState([
    { label: "無放置過尿管", value: "none" },
    { label: "尿管放置中", value: "inserted" },
    { label: "已移除尿管", value: "removed" },
    { label: "全部", value: "all" },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <View style={common.screen}>
        <View style={common.container}>
          <Text h2>病患</Text>
          <DropDownPicker
            modalTitle="Filter"
            open={filterOpen}
            value={filterValue}
            items={filterItems}
            setOpen={setFilterOpen}
            setValue={(callback) => setFilterValue(callback as any)}
            setItems={setFilterItems}
          />
          <View style={{ flex: 1 }}>
            <FlatList
              data={patients.filter((item) =>
                filterValue === "all" ? true : item.foleyStatus === filterValue
              )}
              renderItem={({ item }) => (
                <ListItem
                  bottomDivider
                  onPress={() => navigation.navigate("InfoScreen", {id: item.id})}
                  containerStyle={{ borderRadius: 15, overflow: "hidden" }}
                >
                  <Avatar
                    rounded
                    source={{
                      uri: `https://source.unsplash.com/600x600/?${item.gender}`,
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{`床號: ${item.bed}`}</ListItem.Subtitle>
                  </ListItem.Content>
                  <StatusBadge foley={item.foleyStatus} />
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
              onPress={() => {
                setOpen(!open);
                navigation.navigate("AddScreen");
              }}
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
