import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MovieCards } from './MovieCards';
import { data } from '../../MovieData';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/MovieCards',
  component: MovieCards,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof MovieCards>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MovieCards> = (args) => (
  <MovieCards {...args} />
);

export const MovieCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MovieCard.args = {
  poster: data[0].poster,
  year: data[0].year,
  title: data[0].title,
  category: data[0].category,
};
