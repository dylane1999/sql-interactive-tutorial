import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import InteractiveSql from "../views/components/InteractiveSql";
import {IInteractiveSqlProps} from "../views/components/InteractiveSql"
// value: string
// label: string

export default {
  title: "Editor/QueryInput",
  component: InteractiveSql,
} as Meta;

const Template: Story<IInteractiveSqlProps> = (args) => <InteractiveSql {...args} />;


export const Primary = Template.bind({});
Primary.args = {

}
