import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from './Navbar';

export default {
  title: 'components/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => {
  return <Navbar />;
};

export const Default = Template.bind({});
Default.parameters = {
  viewport: {
    defaultViewport: 'moblie2',
  },
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
