import React, {useState} from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {nanoid } from "nanoid"

export interface IMenuTabProps {
  value: string
  setValue: React.Dispatch<string>
}

const MenuTab = (props: IMenuTabProps) => {
  return (
    <div>
      <Tab value={props.value} label={props.value} onClick={()=> props.setValue(props.value)} />
    </div>
  )
}

export default MenuTab