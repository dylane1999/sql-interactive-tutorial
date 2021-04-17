import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Instructions, {IInstructionsProps} from "../views/components/Instructions";
// value: string
// label: string

export default {
  title: "Editor/Instructions",
  component: Instructions,
} as Meta;

const Template: Story<IInstructionsProps> = (args) => <Instructions {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    instructionsTitle: "Challenge #1",
    instructionsText: "Select all of the People from the People table",
    isCorrect: true
}
