import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavigationBar } from './NavigationBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NavigationBar>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavigationBar> = () => <NavigationBar />;

export const NavigationBars = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavigationBars.args = {};
