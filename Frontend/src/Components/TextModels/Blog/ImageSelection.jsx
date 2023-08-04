import React, { useState } from "react";
import { copyToClipboard } from "../../../Helpers";
import { Panel, Notification, useToaster, Button } from "rsuite";
import { Radio, RadioGroup } from "rsuite";

export default function ImageSelection({ image }) {
  const [size, SetSize] = useState("small");
  const toaster = useToaster();
  const [placement, setPlacement] = React.useState("topStart");

  const message = (
    <Notification type={"success"} header={"success"} closable>
      <small>url copied to clipboard</small>
      <small>
        image provided by <a href="www.pexems"></a>
      </small>
    </Notification>
  ); 

  return (
    <Panel shaded style={{ color: "white", backgroundColor: "#1A1D24" }}>
      <div className="flex gap-5 items-center">
        <RadioGroup value={size} onChange={SetSize}>
          <Radio value="original">Original</Radio>
          <Radio value="large2x">large2x</Radio>
          <Radio value="large">large</Radio>
          <Radio value="medium">medium</Radio>
          <Radio value="small">small</Radio>
          <Radio value="portrait">portrait</Radio>
          <Radio value="landscape">landscape</Radio>
          <Radio value="tiny">tiny</Radio>
        </RadioGroup>
        <Button
            color="green"
          style={{ maxHeight: "35px", width: "100%" }}
          onClick={() => {
            copyToClipboard(image.src[size]);
            toaster.push(message, { placement });
          }}
        >
          Copy
        </Button>
      </div>
    </Panel>
  );
}
