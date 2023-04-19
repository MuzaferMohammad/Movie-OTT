import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SignInPage } from './SignInPage';
import { BrowserRouter } from 'react-router-dom';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/SignInPage',
  component: SignInPage,
} as ComponentMeta<typeof SignInPage>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignInPage> = () => (
  <BrowserRouter>
    <SignInPage />
  </BrowserRouter>
);
export const SignIn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SignIn.args = {};
