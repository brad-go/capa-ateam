import React from 'react';
import styled from 'styled-components';
import { COLORS } from '~constants/styles';

interface Props {
  active: boolean;
  onChange: React.ChangeEventHandler;
}

const Toggle = ({ active, onChange }: Props) => {
  return (
    <Track active={active}>
      <input type="checkbox" checked={active} onChange={onChange} />
      <Knob active={active} />
    </Track>
  );
};

const Track = styled.label<{ active: boolean }>`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 14px;
  border-radius: 34px;
  background-color: ${({ active }) =>
    active ? COLORS.PRIMARY[300] : COLORS.BACKGROUND.DARK};
  cursor: pointer;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }
`;

const Knob = styled.div<{ active: boolean }>`
  position: absolute;
  top: -3px;
  right: ${({ active }) => (active ? -4 : 17)}px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? COLORS.PRIMARY[500] : COLORS.BACKGROUND.LIGHT};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  transition: right 0.3s ease-in-out;
`;

export default Toggle;
