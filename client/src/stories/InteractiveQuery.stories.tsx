
import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import InteractiveQuery, {IInteractiveQueryProps} from "../views/components/InteractiveQuery";
// value: string
// label: string

export default {
  title: "Editor/InteractiveQuery",
  component: InteractiveQuery,
} as Meta;

const Template: Story<IInteractiveQueryProps> = (args) => <InteractiveQuery {...args} />;


export const Primary = Template.bind({});
Primary.args = {

}
