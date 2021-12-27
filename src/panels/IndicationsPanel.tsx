import React, { useState } from "react";
import { FlatList } from "react-native";
import { CheckBox, Text } from "react-native-elements";

const IndicationsPanel = () => {
  const [selection, setSelection] = useState<string>("B-1");
  const options: Array<{ key: string; brief: string; detail: string }> = [
    {
      key: "A-1",
      brief: "急性尿液滯",
      detail:
        "無法使用其他方法(如：間歇性導尿)處理神經性膀胱和急性尿液滯留 (急性尿液滯留需使用膀胱超音波進行確認)。",
    },
    {
      key: "A-2",
      brief: "無法立即以手術使尿道暢通",
      detail:
        "在無法立即以手術使尿道暢通的狀況下，為使泌尿道保持暢通，需引流尿液以減輕腎臟損害。",
    },
    {
      key: "A-3",
      brief: "膀胱灌洗或輸注藥物至膀胱",
      detail: "需膀胱灌洗或輸注藥物至膀胱，以進行診斷或治療。",
    },
    {
      key: "A-4",
      brief: "密切監測尿量",
      detail:
        "需密切監測尿量之重症病人：低血氧、低血壓、肺水腫、鬱血性心衰竭、脫水、血液動力學不穩定、急性腎功能不全。",
    },
    {
      key: "A-5",
      brief: "手術需求",
      detail: "因手術需求放置導尿管：(如留置導管者，則盡快於24小內移除)。",
    },
    {
      key: "A-6",
      brief: "尾骶或會陰有3到4度壓傷傷口",
      detail: "尾骶或會陰有3到4度壓傷傷口之尿失禁病人。",
    },
    {
      key: "A-7",
      brief: "臨終病人",
      detail: "病人或家屬要求留置尿管以增加舒適的臨終病人。",
    },
    {
      key: "A-8",
      brief: "收集24小時尿液檢體",
      detail: "無法使用其他收集尿液方法，需收集24小時尿液檢體以提供診斷依據。",
    },
    {
      key: "A-9",
      brief: "無法處理之神經性膀胱及尿滯留",
      detail:
        "無法使用其他方法(如：間歇性導尿)處理之神經性膀胱及尿滯留 (急性尿液滯留需使用膀胱超音波進行確認)。",
    },
  ];

  return (
    <>
      <Text h2>放置尿管的適應症</Text>
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

export default IndicationsPanel;
