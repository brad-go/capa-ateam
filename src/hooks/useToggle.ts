/* eslint-disable import/prefer-default-export */
import React, { useState, useCallback } from 'react';

type ToggleType = [boolean, (e: React.ChangeEvent) => void];

export const useToggle = (defaultCheck: boolean): ToggleType => {
  const [checked, setChecked] = useState<boolean>(defaultCheck);

  const toggle = useCallback((e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setChecked(target.checked);
  }, []);

  return [checked, toggle];
};
