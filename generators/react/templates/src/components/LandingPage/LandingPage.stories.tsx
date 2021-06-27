import React from 'react';
import LandingPage from './LandingPage';
import { Story } from '@storybook/react';

export default {
  title: 'LandingPage',
  component: LandingPage,
};
const Template: Story<{}> = (args: {}) => <LandingPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
