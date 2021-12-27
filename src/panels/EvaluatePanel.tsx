import React, { useState } from "react";
import { FlatList } from "react-native";
import { CheckBox, Text } from "react-native-elements";

const EvaluatePanel = () => {
  const [selection, setSelection] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
  ]);
  const options: Array<{ key: string; brief: string; detail: string }> = [
    {
      key: "D-1",
      brief: "膀胱出口阻塞",
      detail: "膀胱出口阻塞",
    },
    {
      key: "D-2",
      brief: "膀胱出口阻塞",
      detail: "膀胱出口阻塞",
    },
    {
      key: "D-3",
      brief: "藥物引起",
      detail: "藥物引起",
    },
    {
      key: "D-4",
      brief: "神經病變",
      detail: "神經病變",
    },
  ];

  return (
    <>
      <Text h2>放置尿管後的評估</Text>
      <FlatList
        data={options}
        renderItem={({ item, index }) => (
          <CheckBox
            title={selection[index] ? item.brief : item.detail}
            checked={selection[index]}
            onPress={() => {
              let tmp = selection;
              tmp[index] = !tmp[index];
              setSelection([...tmp]);
            }}
          />
        )}
      />
    </>
  );
};

export default EvaluatePanel;
