import React from "react";
import { Panel, Placeholder, Stack, ButtonGroup, Button } from "rsuite";

export default function ToolInfo({ id, icon, title, description  }) {
  
  return (
    <div className=" text-center toolBox ">
      <span className="text-white  m-auto text-xl ">
        {title}
      </span>
      <img src={'../assets/icon/' + icon} alt="" width={"75px"} />
      <p>{description}</p>
    </div>
  );
}
