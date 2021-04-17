import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import MenuTab from "../views/components/EditorMenu/MenuTab";
import DataContainer from "../views/components/DataContainer";
import { IDataContainerProps } from "../views/components/DataContainer";
// value: string
// label: string

export default {
  title: "Editor/DataContainer",
  component: MenuTab,
} as Meta;

const Template: Story<IDataContainerProps> = (args) => <DataContainer {...args} />;


const rows = [
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

export const Primary = Template.bind({});
Primary.args = {
  tableData: rows,
};


const SecondaryRows = [
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

export const Secondary = Template.bind({});
Secondary.args = {
  tableData: SecondaryRows,
};
