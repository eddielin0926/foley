import React from "react";
import { Badge } from "react-native-elements";

type Props = {
  foley?: "none" | "inserted" | "removed" | undefined;
};

const StatusBadge = ({ foley }: Props) => {
  const label = {
    none: "無",
    inserted: "放置中",
    removed: "已移除",
  };
  const status = {
    none: "success" as const,
    inserted: "error" as const,
    removed: "primary" as const,
  };

  return (
    <>
      {foley && (
        <Badge
          value={label[foley]}
          status={status[foley]}
          containerStyle={{ alignSelf: "stretch", justifyContent: "center" }}
          badgeStyle={{
            height: "auto",
            borderRadius: 20,
            padding: 3,
          }}
          textStyle={{ fontSize: 16 }}
        />
      )}
    </>
  );
};

export default StatusBadge;
