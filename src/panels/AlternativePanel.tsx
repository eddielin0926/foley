import React, { useState } from "react";
import { FlatList } from "react-native";
import { CheckBox, Text } from "react-native-elements";

const AlternativePanel = () => {
  const [selection, setSelection] = useState<string>("A-1");
  const options: Array<{ key: string; brief: string; detail: string }> = [
    {
      key: "B-1",
      brief: "膀胱超音波",
      detail: "使用膀胱超音波來避免不必要的導尿管置入",
    },
    {
      key: "B-2",
      brief: "外用尿液導管",
      detail:
        "陰莖套導管( condom catheters)：適用於清醒男性病患，排除尿滯留尿路阻塞的病患\n女性外部尿液收集裝置(female external urinary collection)：適用於尿失禁、手術後、非導尿管放置適應症患者，但如有尿滯留、月經期間、會陰部分泌物、及會陰部皮膚破損者禁止使用",
    },
    {
      key: "B-3",
      brief: "間歇性導尿照護方案",
      detail:
        "間歇性導尿照護方案：神經性膀胱的病患可以使用間歇性的導尿，以減少菌尿症或後續的感染",
    },
  ];

  return (
    <>
      <Text h2>尿管替代方案</Text>
      <FlatList
        data={options}
        renderItem={({ item }) => (
          <CheckBox
            title={selection === item.key ? item.detail : item.brief}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={selection === item.key}
            onPress={() => setSelection(item.key)}
          />
        )}
      />
    </>
  );
};

export default AlternativePanel;
