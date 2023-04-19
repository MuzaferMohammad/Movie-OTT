import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MovieGenreList } from './MoviegenreList';
import { BrowserRouter } from 'react-router-dom';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ MovieGenreList',
  component: MovieGenreList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof MovieGenreList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MovieGenreList> = (args) => (
  <BrowserRouter>
    <MovieGenreList />
  </BrowserRouter>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
