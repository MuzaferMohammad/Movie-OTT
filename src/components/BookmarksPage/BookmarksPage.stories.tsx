import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { BookmarksPage } from './BookmarksPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/BookmarksPage',
  component: BookmarksPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BookmarksPage>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BookmarksPage> = (args) => (
  <BrowserRouter>
    <BookmarksPage />
  </BrowserRouter>
);

export const BookmarksPages = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BookmarksPages.args = {};
