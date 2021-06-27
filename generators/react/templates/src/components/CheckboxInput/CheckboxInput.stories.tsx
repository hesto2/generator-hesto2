import React from 'react';
import CheckboxInput, { CheckboxInputProps } from './CheckboxInput';
import { Story } from '@storybook/react';
export default {
  component: CheckboxInput,
  title: 'CheckboxInput',
};

const Template: Story<CheckboxInputProps> = (args: CheckboxInputProps) => (
  <CheckboxInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  checked: false,
  label: 'Test label',
  name: 'test name',
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};
