/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect, useCallback } from 'react';

export const useDrawer = <T extends HTMLElement>(ref: React.RefObject<T>) => {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setOpen((prev) => !prev);
  }, [setOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          toggleDrawer();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, isOpen, toggleDrawer]);

  return { isOpen, toggleDrawer };
};
