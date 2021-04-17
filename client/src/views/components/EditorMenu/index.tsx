import React, { ReactNode, useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuTab from "./MenuTab";
import { IMenuTabProps } from "./MenuTab";
import styled from "styled-components";
import { makeStyles, Theme } from "@material-ui/core/styles";
import DataContainer from "../DataContainer";
/**
 * @interface IEditorMenuProps
 * @field { string } tabsArray - the array of tabs to provide the user
 * @field { contentArray } - an array of react nodes containing the data containers to display
 */
export interface IEditorMenuProps {
  tabsArray: Array<string>;
  contentArray: Array<any>;
} // need to get the data and the tab name, if tab name is active then display the cooresponding  table

const EditorMenuRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#3A3A3A",
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

  const getCurrentContent = () => {
    if (value === "Resulting Query") {
      return props.contentArray[0];
    }
    if (value === "People") {
      return props.contentArray[1];
    }
    return props.contentArray[2];
  };

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
      <DataContainer tableData={getCurrentContent()} />
    </EditorMenuRoot>
  );
};

export default EditorMenu;
