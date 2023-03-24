import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TVGenre from './TVgenre';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ TVGenre',
  component: TVGenre,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof TVGenre>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TVGenre> = (args) => <TVGenre />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
