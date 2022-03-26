/* eslint-disable import/prefer-default-export */
import React, { useState, useCallback } from 'react';
import { OptionType } from '~types/api';

type SelectType = [
  OptionType[],
  (e: React.ChangeEvent) => void,
  React.Dispatch<React.SetStateAction<OptionType[]>>,
];

export const useSelect = (initialSelected: OptionType[]): SelectType => {
  const [selected, setSelected] = useState<OptionType[]>(initialSelected);
  const handleSelect = useCallback(
    (e: React.ChangeEvent) => {
      const target = e.target as HTMLInputElement;
      if (target.labels) {
        const label = target.labels[0].innerText;
        if (selected.includes(label as OptionType)) {
          setSelected((prev) => prev.filter((item) => item !== label));
          return;
        }
        setSelected((prev) => [...prev, label as OptionType]);
      }
    },
    [selected],
  );
  return [selected, handleSelect, setSelected];
};
