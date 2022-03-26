/* eslint-disable import/prefer-default-export */
import React, { useState, useCallback } from 'react';

type SelectType = [string[], (e: React.ChangeEvent) => void];

export const useSelect = (initialSelected: string[]): SelectType => {
  const [selected, setSelected] = useState<string[]>(initialSelected);
  const handleSelect = useCallback(
    (e: React.ChangeEvent) => {
      const target = e.target as HTMLInputElement;
      if (target.labels) {
        const label = target.labels[0].innerText;
        if (selected.includes(label)) {
          setSelected((prev) => prev.filter((item) => item !== label));
          return;
        }
        setSelected((prev) => [...prev, label]);
      }
    },
    [selected],
  );
  return [selected, handleSelect];
};
