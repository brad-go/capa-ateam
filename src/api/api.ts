/* eslint-disable import/prefer-default-export */
import type { APIError, APIReturnType } from '~types/api';

const API_END_POINT = 'http://localhost:3001/db';

export const fetchAPI = async () => {
  try {
    const res = await fetch(API_END_POINT);
    if (!res.ok) throw new Error(`서버에 문제가 생겼습니다.`);
    const data: APIReturnType[] = await res.json();
    return data;
  } catch (e) {
    const err = e as APIError;
    throw new Error(`API 요청 실패. ${err.message}`);
  }
};
