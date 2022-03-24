import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { APIReturnType } from '~types/api';
import RequestCard from './RequestCard';

export default {
  title: 'components/RequestCard',
  component: RequestCard,
} as ComponentMeta<typeof RequestCard>;

const Template: ComponentStory<typeof RequestCard> = ({ ...args }) => {
  return <RequestCard {...args} />;
};

const requestInfo: APIReturnType = {
  id: 1,
  title: '자동차 시제품 제작',
  client: 'A 고객사',
  due: '2020.12.14까지 납기',
  count: 2,
  amount: 100,
  method: ['밀링', '선반'],
  material: ['알루미늄'],
  status: '대기중',
};

export const Default = Template.bind({});
Default.args = { requestInfo };

export const InBusiness = Template.bind({});
InBusiness.args = {
  requestInfo: {
    ...requestInfo,
    method: ['선반'],
    material: ['탄소강', '강철'],
    status: '상담중',
  },
};
