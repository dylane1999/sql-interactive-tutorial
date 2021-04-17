import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import QueryInput from "../views/components/QueryInput";
import {IQueryInputProps} from "../views/components/QueryInput"
// value: string
// label: string

export default {
  title: "Editor/QueryInput",
  component: QueryInput,
} as Meta;

const Template: Story<IQueryInputProps> = (args) => <QueryInput {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    handleChange: function(){},
}
