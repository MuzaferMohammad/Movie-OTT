import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomePage } from './HomePage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/HomePage',
  component: HomePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HomePage>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomePage> = (args) => <HomePage />;

export const HomePages = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HomePages.args = {};
