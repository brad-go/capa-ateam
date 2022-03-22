import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useToggle } from '~hooks/useToggle';
import Toggle from './Toggle';

export default {
  title: 'common/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

// eslint-disable-next-line react/prop-types
const Template: ComponentStory<typeof Toggle> = ({ active = false }) => {
  const [checked, toggle] = useToggle(active);
  return <Toggle active={checked} onChange={toggle} />;
};

export const Default = Template.bind({});
Default.args = {
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};
