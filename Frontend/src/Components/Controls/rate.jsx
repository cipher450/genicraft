import React from "react";
import {Progress} from "rsuite";
export default function Rate({ value, width }) {
  let color = " #ffc107";

  switch (true) {
    case value <= 35:
      color = "red";
      break;
    case value >= 35 && value <= 59:
      color = "#ffc107";
      break;
    case value >= 60:
      color = "#52C41A";
      break;
  }

  // orange :   ; green : green
  return (
    <Progress.Circle
      percent={value}
      strokeColor={color}
      style={{ width: width }}
    />
  );
}
