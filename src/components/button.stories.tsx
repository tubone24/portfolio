import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<any> = (args) => <Button {...args}>Button Text</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
};

export const Small = Template.bind({});
Small.args = {
  small: true,
};

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
};