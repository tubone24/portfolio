import React from 'react';
import { Story, Meta } from '@storybook/react-vite';
import styled from 'styled-components';
import Publications from './publications';

export default {
  title: 'Components/Publications',
  component: Publications,
} as Meta;

const StoryWrapper = styled.div`
  background: #020d05;
  padding: 40px;
  min-height: 100vh;
`;

const Template: Story = (args) => (
  <StoryWrapper>
    <Publications {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {};