import React, { useState } from "react";
import { FlatList } from "react-native";
import { CheckBox, Text } from "react-native-elements";

const CarePanel = () => {
  const [selection, setSelection] = useState<Array<boolean>>([false, false]);
  const options: Array<{ key: string; brief: string; detail: string }> = [
    {
      key: "E-1",
      brief: "膀胱誘尿方法",
      detail:
        "輕撫大腿內側、輕扯陰毛、輕敲鼠蹊韌帶上方的腹部、輕撫龜頭或陰唇各約2-3分鐘，每項間隔1分鐘。\n" +
        "輕敲恥骨上，每5秒約7-8次，約50次。\n" +
        "聽流水聲、冰敷腹部、手放水中、握冰塊或在其會陰處沖水。\n" +
        "配合Valsalva maneuner及Crede's method，運用腹肌憋氣用力。",
    },
    {
      key: "E-2",
      brief: "衛教病患評估拔除後情形",
      detail:
        "適當體液攝取。\n" +
        "如發生尿失禁時，可使用防漏尿墊。\n" +
        "如出現腹痛等症狀時如何處理。",
    },
    {
      key: "E-3",
      brief: "藥物輔助",
      detail:
        "Anticholinergic\n" +
        "Cholinergic Agent\n" +
        "α-blockers",
    },
    {
      key: "E-4",
      brief: "建立排尿時間表與排尿日誌",
      detail:
        "如有頻尿者，應漸進式將排尿時間拉長(如原每一小時需解尿一次，而下次解尿時間可拉長至1小時5分鐘)，最終目標為至少每3至4小時解尿。\n" +
        "高齡者應定時如廁，時間點包含：起床後、白天與傍晚每2小時、睡前及夜裡每4小時如廁一次。\n" +
        "無液體攝取限制時，一天飲水量最好達到2000c.c\n" +
        "規劃一天飲水量，如：每小時飲水100-150c.c，儘可能白天攝取，避免睡前3至4小時飲水以減少夜尿頻繁情形",
    },
  ];

  return (
    <>
      <Text h2>移除尿管後的照護</Text>
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

export default CarePanel;
