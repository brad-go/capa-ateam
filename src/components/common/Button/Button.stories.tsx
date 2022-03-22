/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'common/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => {
  return <Button {...args}>{children}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  contained: false,
  children: '채팅하기',
};

export const Contained = Template.bind({});
Contained.args = {
  contained: true,
  children: '요청 내역 보기',
};
