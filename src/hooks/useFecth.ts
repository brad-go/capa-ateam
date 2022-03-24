/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import type { APIError, APIReturnType } from '~types/api';

export const useFetch = async (url: string) => {
  const [payload, setPayload] = useState<APIReturnType[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAPI = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`서버에 문제가 생겼습니다.`);
      const data: APIReturnType[] = await res.json();
      setPayload(data);
    } catch (e) {
      const err = e as APIError;
      throw new Error(`API 요청 실패. ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  });

  return { payload, loading };
};
