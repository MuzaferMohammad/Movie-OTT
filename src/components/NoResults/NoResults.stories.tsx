import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NoResults } from './NoResults';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/NoResults',
  component: NoResults,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NoResults>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NoResults> = (args) => <NoResults />;

export const NoResult = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoResult.args = {};
