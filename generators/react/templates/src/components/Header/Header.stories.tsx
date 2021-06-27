import React from 'react';
import Header from './Header';
import { Story } from '@storybook/react';

export default {
  title: 'Header',
  component: Header,
};

const Template: Story<{}> = (args: {}) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
