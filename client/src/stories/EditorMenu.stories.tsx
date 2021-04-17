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

const properties = [
  {
      "PropertyId": 1,
      "Adddress": "28957 wilshire drive",
      "City": "Los Angeles"
  },
  {
      "PropertyId": 2,
      "Adddress": "35473 matador court",
      "City": "Chicago"
  },
  {
      "PropertyId": 3,
      "Adddress": "59245 market street",
      "City": "San Francisco"
  },
  {
      "PropertyId": 4,
      "Adddress": "43811 calder avenue",
      "City": "San Diego"
  }
]

const people = [
  {
      "PersonId": 1,
      "PropertyId": 1,
      "FirstName": "Norry",
      "LastName": "Child",
      "Age": 50
  },
  {
      "PersonId": 2,
      "PropertyId": 1,
      "FirstName": "Sylvester",
      "LastName": "McLaine",
      "Age": 54
  },
  {
      "PersonId": 3,
      "PropertyId": 1,
      "FirstName": "Kristan",
      "LastName": "Rockey",
      "Age": 28
  },
  {
      "PersonId": 4,
      "PropertyId": 2,
      "FirstName": "Yvette",
      "LastName": "Glencrosche",
      "Age": 38
  },
  {
      "PersonId": 5,
      "PropertyId": 2,
      "FirstName": "Marietta",
      "LastName": "Comsty",
      "Age": 66
  },
  {
      "PersonId": 6,
      "PropertyId": 2,
      "FirstName": "Felicdad",
      "LastName": "Inkpen",
      "Age": 42
  },
  {
      "PersonId": 7,
      "PropertyId": 3,
      "FirstName": "Eugen",
      "LastName": "Ventum",
      "Age": 36
  },
  {
      "PersonId": 8,
      "PropertyId": 3,
      "FirstName": "Caritta",
      "LastName": "Harnell",
      "Age": 76
  },
  {
      "PersonId": 9,
      "PropertyId": 3,
      "FirstName": "Arnaldo",
      "LastName": "Rickesies",
      "Age": 65
  },
  {
      "PersonId": 10,
      "PropertyId": 3,
      "FirstName": "Marian",
      "LastName": "Cavanaugh",
      "Age": 75
  }
];


const resultingQuery = [
  {
      "FirstName": "Norry",
      "LastName": "Child",
      "Adddress": "28957 wilshire drive",
      "City": "Los Angeles"
  },
  {
      "FirstName": "Sylvester",
      "LastName": "McLaine",
      "Adddress": "28957 wilshire drive",
      "City": "Los Angeles"
  },
  {
      "FirstName": "Kristan",
      "LastName": "Rockey",
      "Adddress": "28957 wilshire drive",
      "City": "Los Angeles"
  },
  {
      "FirstName": "Yvette",
      "LastName": "Glencrosche",
      "Adddress": "35473 matador court",
      "City": "Chicago"
  },
  {
      "FirstName": "Marietta",
      "LastName": "Comsty",
      "Adddress": "35473 matador court",
      "City": "Chicago"
  },
  {
      "FirstName": "Felicdad",
      "LastName": "Inkpen",
      "Adddress": "35473 matador court",
      "City": "Chicago"
  },
  {
      "FirstName": "Eugen",
      "LastName": "Ventum",
      "Adddress": "59245 market street",
      "City": "San Francisco"
  },
  {
      "FirstName": "Caritta",
      "LastName": "Harnell",
      "Adddress": "59245 market street",
      "City": "San Francisco"
  },
  {
      "FirstName": "Arnaldo",
      "LastName": "Rickesies",
      "Adddress": "59245 market street",
      "City": "San Francisco"
  },
  {
      "FirstName": "Marian",
      "LastName": "Cavanaugh",
      "Adddress": "59245 market street",
      "City": "San Francisco"
  },
  {
      "FirstName": null,
      "LastName": null,
      "Adddress": "43811 calder avenue",
      "City": "San Diego"
  }
]


export const Primary = Template.bind({});
Primary.args = {
tabsArray:["Resulting Query",'People','Properties'],
contentArray: [resultingQuery, people, properties ]
};
