import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Button, CheckBox, Text } from "react-native-elements";

interface Props {
  setStatus: (status: string) => void;
}

const TechniquePanel = ({ setStatus }: Props) => {
  const [selection, setSelection] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const options: Array<{ key: string; brief: string; detail: string }> = [
    {
      key: "C-1",
      brief: "導尿管類型",
      detail: "導尿管類型：雙腔-球囊膨脹腔和引流腔、用於連續留置尿管。",
    },
    {
      key: "C-2",
      brief: "導尿管尺寸選擇",
      detail: "導尿管尺寸選擇",
    },
    {
      key: "C-3",
      brief: "放置前手部衛生",
      detail: "放置前手部衛生",
    },
    {
      key: "C-4",
      brief: "插入導管時使用無菌技術和無菌設備",
      detail:
        "插入導管時使用無菌技術和無菌設備(無菌手套，布單，紗布，適當的消毒劑或無菌溶液進行尿道周圍清潔，並使用一次性使用的潤滑劑進行插入)。",
    },
    {
      key: "C-5",
      brief: "確定導管固定在患者身上",
      detail:
        "插入後，確定導管固定在患者身上，以降低導管相關並發症的風險，例如移位、插入部位壓力性損傷和尿路感染。選擇合適導尿管固定位置(女性：大腿內側、男性、下腹部或大腿內側)。",
    },
    {
      key: "C-6",
      brief: "保持無菌，連續關閉的引流系統",
      detail:
        "保持無菌，連續關閉的引流系統，如果發生斷開或洩漏，請使用無菌技術更換導管和引留袋。",
    },
    {
      key: "C-7",
      brief: "保持尿液暢通",
      detail:
        "保持尿液暢通，始終將尿袋置於膀胱以下，但勿放在地板上，定期排空尿袋，若出現感染、阻塞或封閉系統受損，建議更換導管和尿袋。",
    },
    {
      key: "C-8",
      brief: "收集24小時尿液檢體",
      detail: "無法使用其他收集尿液方法，需收集24小時尿液檢體以提供診斷依據。",
    },
    {
      key: "C-9",
      brief: "除非有阻塞，否則不建議進行膀胱沖洗。",
      detail: "除非有阻塞，否則不建議進行膀胱沖洗。",
    },
    {
      key: "C-10",
      brief: "尿管清潔護理。",
      detail: "尿管清潔護理。",
    },
  ];

  return (
    <>
      <Text h2>放置尿管的無菌技術</Text>
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
      <View style={{ padding: 20, marginBottom: 20 }}>
        <Button
          title="確認"
          disabled={selection.includes(false)}
          onPress={() => setStatus("C")}
        />
      </View>
    </>
  );
};

export default TechniquePanel;
