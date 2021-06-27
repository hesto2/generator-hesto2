import React from 'react';
import Footer from './Footer';
import { Story } from '@storybook/react';

export default {
  title: 'Footer',
  component: Footer,
};

const Template: Story<{}> = (args: {}) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
