import React, { useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import DropDownPicker from "react-native-dropdown-picker";
import {
  SpeedDial,
  ThemeProvider,
  Text,
  ListItem,
  Avatar,
  Button,
  Icon,
} from "react-native-elements";
import { StackParams } from "../../App";
import StatusBadge from "~/components/StatusBadge";
import common from "~/styles/common";
import theme from "~/styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/redux/store";
import { deletePatient, getPatients } from "~/redux/actions/action";
import { init } from "~/redux/hospitalSlice";

type Props = NativeStackScreenProps<StackParams, "HomeScreen">;

const HomeScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
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
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPatients();
      console.log(data);
    };
    fetchData();
  }, []);

  const deleteButton = (id: number) => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this Patient?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            deletePatient(id);
          },
        },
        { text: "No" },
      ]
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <View style={common.screen}>
        <View style={common.container}>
          <Text h2>住院病人</Text>
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
                  onPress={() =>
                    navigation.navigate("InfoScreen", { id: item.id })
                  }
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

                  {showDelete ? (
                    <Button
                      icon={
                        <Icon
                          name="clear"
                          tvParallaxProperties={undefined}
                          size={20}
                        />
                      }
                      onPress={() => deleteButton(item.id)}
                    ></Button>
                  ) : null}
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
              onPress={() => {
                setShowDelete(!showDelete);
              }}
            />
          </SpeedDial>
        </View>
      </View>
    </ThemeProvider>
  );
};

export default HomeScreen;
