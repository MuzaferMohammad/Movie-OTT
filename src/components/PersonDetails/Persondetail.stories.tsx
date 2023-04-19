import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PersonDetails from './Persondetail';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ PersonDetails',
  component: PersonDetails,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof PersonDetails>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PersonDetails> = (args) => (
  <PersonDetails />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
