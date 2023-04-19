import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TVGenreList } from './TVgenrelist';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ TVGenreList',
  component: TVGenreList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof TVGenreList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TVGenreList> = (args) => <TVGenreList />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
