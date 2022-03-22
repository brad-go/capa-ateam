/* eslint-disable react/prop-types */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useToggle } from '~hooks/useToggle';
import CheckBox from './CheckBox';

export default {
  title: 'common/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = ({ ...args }) => {
  const [checked, toggle] = useToggle(args.checked || false);
  return <CheckBox {...args} checked={checked} onChange={toggle} />;
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Labeled = Template.bind({});
Labeled.args = {
  checked: false,
  label: '알루미늄',
};

export const CheckedLabeled = Template.bind({});
CheckedLabeled.args = {
  checked: true,
  label: '알루미늄',
};
