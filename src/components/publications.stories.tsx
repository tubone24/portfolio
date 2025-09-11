import React from 'react';
import { Story, Meta } from '@storybook/react';
import Publications from './publications';

export default {
  title: 'Components/Publications',
  component: Publications,
} as Meta;

const Template: Story = (args) => (
  <div style={{ background: '#020d05', padding: '40px', minHeight: '100vh' }}>
    <Publications {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};