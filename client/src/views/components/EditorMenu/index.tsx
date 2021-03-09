import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuTab from "./MenuTab";
import { IMenuTabProps } from "./MenuTab";
import styled from "styled-components";
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * @interface IEditorMenuProps
 * @field { string } tabsArray - the array of tabs to provide the user
 */
export interface IEditorMenuProps {
  tabsArray: Array<string>;
} // need to get the data and the tab name, if tab name is active then display the cooresponding  table

const EditorMenuRoot = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#1E2B3E",
    color: "#fff",
  },
  indicator: {
    display: "flex",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
}));

const EditorMenu = (props: IEditorMenuProps) => {
  const classes = useStyles();
  const tabs = props.tabsArray;
  type tabsType = typeof tabs[number];
  const [value, setValue] = useState<tabsType>(props.tabsArray[0]);

  return (
    <EditorMenuRoot>
      <Tabs
        value={value}
        classes={{ root: classes.root, indicator: classes.indicator }}
        centered
      >
        {props.tabsArray.map((tabValue) => {
          return <MenuTab value={tabValue} setValue={setValue} />;
        })}
      </Tabs>
    </EditorMenuRoot>
  );
};

export default EditorMenu;
