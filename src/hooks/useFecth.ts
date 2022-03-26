/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect, useCallback } from 'react';
import type { APIError, APIReturnType } from '~types/api';

export const useFetch = (url: string) => {
  const [payload, setPayload] = useState<APIReturnType[]>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const fetchAPI = useCallback(async () => {
    setLoading(true);
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
  }, [url]);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI, url]);

  return { payload, isLoading };
};
