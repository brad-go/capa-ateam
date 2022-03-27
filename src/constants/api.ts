/* eslint-disable import/prefer-default-export */
import { MaterialType, MethodType } from '~types/api';

const { REACT_APP_API_URL } = process.env;

export const API_URL = `${REACT_APP_API_URL}requests`;

export const METHODS: MethodType[] = ['밀링', '선반'];

export const MATERIALS: MaterialType[] = [
  '알루미늄',
  '탄소강',
  '구리',
  '합금강',
  '강철',
];
