import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MethodType, MaterialType } from '~types/index';
import { useSelect } from '~hooks/useSelect';
import SelectBox from './SelectBox';

export default {
  title: 'components/SelectBox',
  component: SelectBox,
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = ({ ...args }) => {
  const [selected, handleSelect] = useSelect(args.selected);
  return <SelectBox {...args} selected={selected} onChange={handleSelect} />;
};

const METHOD_OPTIONS: MethodType[] = ['밀링', '선반'];

const MATERIAL_OPTIONS: MaterialType[] = [
  '알루미늄',
  '탄소강',
  '구리',
  '합금강',
  '강철',
];

export const Method = Template.bind({});
Method.args = {
  title: '가공 방식',
  options: METHOD_OPTIONS,
  selected: [],
};

export const Material = Template.bind({});
Material.args = {
  title: '재료',
  options: MATERIAL_OPTIONS,
  selected: [],
};
