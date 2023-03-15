import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MovieTray } from './MovieTray';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/MovieTray',
  component: MovieTray,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof MovieTray>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MovieTray> = (args) => <MovieTray />;

export const MovieTrays = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MovieTrays.args = {};
