import React from 'react'
import { Whisper,Popover } from 'rsuite'
import InfoOutlineIcon from "@rsuite/icons/InfoOutline";
import { useSelector, useDispatch } from "react-redux";

export default function Info({message}) {
  const activeTheme = useSelector((state) => state.theme);

  return (
    <Whisper
    followCursor
    speaker={
      <Popover
        style={{
          color: "black",
        }}
      >
              
      {message}
      </Popover>
    }
  >
    <InfoOutlineIcon
      style={{ width: 20, height: 20,color:
        activeTheme.active == "dark"
          ? activeTheme.dark.textCol
          : activeTheme.light.textCol, }}
      size="sm"
    />
  </Whisper>

  )
}
