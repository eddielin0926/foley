import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ThemeProvider, Text, Image } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../../App";
import common from "~/styles/common";
import theme from "~/styles/theme";
import { useSelector } from "react-redux";
import { RootState } from "~/redux/store";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { StyleSheet } from "react-native";
import * as Speech from "expo-speech";

type Props = NativeStackScreenProps<StackParams, "InfoScreen">;

const InfoScreen = ({ route, navigation }: Props) => {
  console.log(route.params);
  const patients = useSelector((state: RootState) => state.hospital.patients);
  const patient = patients.length === 0 ? null : patients[route.params.id];
  const speak = () => {
    const textToSay = `尿管已放置${insertedDuration()}天`;
    const options = {
      language: "zh-TW",
      pitch: 1,
      rate: 1,
    };
    Speech.speak(textToSay, options);
  };
  const insertedDuration = () => {
    const today = new Date();
    if (patient?.insertedDate)
      return Math.floor(
        (today.getTime() - patient?.insertedDate.getTime()) /
          (1000 * 3600 * 24) +
          1
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <View style={common.screen}>
        <View style={common.container}>
          {patient && (
            <>
              <View style={styles.profileimg}>
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 50,
                  }}
                  source={{
                    uri: `https://source.unsplash.com/600x600/?${patient.gender}`,
                  }}
                />
                <Text h2 style={styles.profilename}>
                  {patient.name}
                </Text>
              </View>
              <View style={common.line} />
              <View style={common.row}>
                <Icon
                  type="font-awesome"
                  color="#517fa4"
                  name="bed"
                  size={30}
                />
                <Text h3 style={styles.profileText}>
                  床號: {patient.bed}
                </Text>
              </View>
              <View style={common.row}>
                <Icon
                  type="ionicon"
                  name="document-attach-outline"
                  color="#517fa4"
                  size={30}
                />
                <Text h3 style={styles.profileText}>
                  病歷號: {patient.case}
                </Text>
              </View>
              <View style={common.row}>
                <Icon
                  type="material-community"
                  color="#517fa4"
                  name="numeric"
                  size={30}
                />
                <Text h3 style={styles.profileText}>
                  年齡: {patient.age}
                </Text>
              </View>
              <View style={common.row}>
                <Icon type="ionicon" color="#517fa4" name="today" size={30} />
                <Text h3 style={styles.profileText}>
                  入院天數: {patient.day}
                </Text>
              </View>
              <View style={common.row}>
                <Icon type="entypo" color="#517fa4" name="eye" size={30} />
                <Text h3 style={styles.profileText}>
                  尿管狀態: {patient.foleyStatus}
                </Text>
              </View>
              {patient.foleyStatus === "inserted" && (
                <>
                <View style={common.row}>
                  <Icon type="entypo" color="#517fa4" name="eye" size={30} />
                  <Text h3 style={styles.profileText}>
                    尿管放置天數: {insertedDuration()}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity onPress={speak} style={styles.button}>
                    <Text style={styles.appButtonText}>Press Me</Text>
                  </TouchableOpacity>
                </View></>
              )}
            </>
          )}
        </View>
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  profileimg: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 10,
  },
  profilename: {
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginLeft: 30,
  },
  profileText: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },
  button: {
    elevation: 8,
    alignItems: "center",
    backgroundColor: "#1e90ff",
    borderRadius: 50,
    padding: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default InfoScreen;
