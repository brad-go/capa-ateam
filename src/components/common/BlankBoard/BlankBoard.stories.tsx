import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BlankBoard from './BlankBoard';

export default {
  title: 'common/BlankBoard',
  component: BlankBoard,
} as ComponentMeta<typeof BlankBoard>;

const Template: ComponentStory<typeof BlankBoard> = () => {
  return <BlankBoard />;
};

export const Default = Template.bind({});
