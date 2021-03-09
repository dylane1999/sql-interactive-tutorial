import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import MenuTab from "../views/components/EditorMenu/MenuTab";
import DataContainer from "../views/components/EditorMenu/DataContainer";
import { IDataContainerProps } from "../views/components/EditorMenu/DataContainer";
// value: string
// label: string

export default {
  title: "Editor/DataContainer",
  component: MenuTab,
} as Meta;

const Template: Story<IDataContainerProps> = (args) => <DataContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabsArray: ["dfksdfmds", "fkadsjfkladsjads", "jkfdsjf"],
};
