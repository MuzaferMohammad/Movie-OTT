import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBar } from './SearchBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = (args) => {
  return <SearchBar />;
};
export const SearchBarInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SearchBarInput.args = {};
