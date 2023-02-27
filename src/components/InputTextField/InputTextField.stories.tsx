import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputTextField } from './InputTextField';
import './InputTextField.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/InputTextField',
  component: InputTextField,
} as ComponentMeta<typeof InputTextField>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputTextField> = (args) => {
  const [inputText, setInputText] = React.useState('');

  function handleInputText(event: React.ChangeEvent<HTMLInputElement>) {
    const regexForPeople = /^[0-9]+$/;
    if (event.target.value === '' || regexForPeople.test(event.target.value)) {
      setInputText(event.target.value);
    }
  }

  // function checkForError() {
  //   return inputText === '0' ? 'can not be zero' : null;
  // }

  return (
    <InputTextField
      {...args}
      inputText={inputText}
      handleText={handleInputText}
    />
  );
};

export const InputEmail = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputEmail.args = {
  label: 'Email',
  placeholder: 'Email',
  className: 'input-field',
};

export const InputPassword = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputPassword.args = {
  label: 'Password',
  placeholder: 'Password',
  className: 'input-field',
};

// export const InputFullName = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// InputFullName.args = {
//   label: 'Full Name',
//   placeholder: 'Full Name'
// };

// export const InputConfirmPassword = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// InputConfirmPassword.args = {
//   label: 'Confirm Password',
//   placeholder: 'Confirm Password'
// };
