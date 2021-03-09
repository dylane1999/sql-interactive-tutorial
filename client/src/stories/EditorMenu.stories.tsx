import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import MenuTab from "../views/components/EditorMenu/MenuTab"
import EditorMenu from "../views/components/EditorMenu"
import {IEditorMenuProps} from "../views/components/EditorMenu"
// value: string
// label: string

export default {
  title: 'Editor/EditorMenu',
  component: MenuTab,
} as Meta;

const Template: Story<IEditorMenuProps> = (args) => <EditorMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
tabsArray:["dfksdfmds",'fkadsjfkladsjads','jkfdsjf']
};
