import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import InteractiveSqlPage from "../views/pages/InteractiveSqlPage";
import {IInteractiveSqlPageProps} from "../views/pages/InteractiveSqlPage"
// value: string
// label: string

export default {
  title: "Editor/QueryInput",
  component: InteractiveSqlPage,
} as Meta;

const Template: Story<IInteractiveSqlPageProps> = (args) => <InteractiveSqlPage {...args} />;


export const Primary = Template.bind({});
Primary.args = {

}
