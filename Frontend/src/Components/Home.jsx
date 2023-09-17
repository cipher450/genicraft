import React, { useState } from "react";
import { Panel, Input, InputGroup } from "rsuite";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@rsuite/icons/Search";

import ToolInfo from "./Controls/ToolInfo";
import { tools } from "../store/strings";
export default function Home() {
  const dispatch = useDispatch();
  const activeTheme = useSelector((state) => state.theme);
  const panelStyle = {
    color:
      activeTheme.active == "dark"
        ? activeTheme.dark.textCol
        : activeTheme.light.textCol,
    backgroundColor:
      activeTheme.active == "dark" ? activeTheme.dark.bg : activeTheme.light.bg,
    display: "flex",
    flexDirection: "column",
    minWidth:'95vw'
  };
  const toolBarStyle = {
    color:
      activeTheme.active == "dark"
        ? activeTheme.dark.textCol
        : activeTheme.light.textCol,
    backgroundColor:
      activeTheme.active == "dark" ? activeTheme.dark.bg : activeTheme.light.bg,
    width: "20%",
  };
  const [Search, SetSearch] = useState(false);
  return (
    <div className="flex flex-col flew-wrap gap-10">
      <div className="flex flex-col gap-5  mt-10">
        <InputGroup style={toolBarStyle}>
          <Input />
          <InputGroup.Addon>
            <SearchIcon />
          </InputGroup.Addon>
        </InputGroup>
      </div>

      {Search ? (
        <div> </div>
      ) : (
        <div className="flex flex-col flew-wrap gap-10">
          <Panel
            shaded
            header={
              <div className="  pt-5 pb-5 rounded p-5 bg-gray-500 flex justify-start ">
                <span className="text-white text-xl text-left ">
                Copywriting
                </span>
              </div>
            }
            style={panelStyle}
          >
            <div className="flex gap-5 lg:flex-row flex-col flex-wrap">
              {tools.copywriting.map((tool)=>(
                <ToolInfo
                description={tool.description}
                icon={tool.icon}
                title={tool.title}
                />
              ))}
            </div>
          </Panel>
          
        </div>
      )}
    </div>
  );
}
