/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckSVG } from '~assets/svg/check.svg';
import { COLORS } from '~constants/styles';

interface Props {
  label?: string;
  checked?: boolean;
  onChange: React.ChangeEventHandler;
}

const CheckBox = ({ label, checked, onChange }: Props) => {
  return (
    <Label>
      <Box type="checkbox" checked={checked} onChange={onChange} />
      <StyledBox checked={checked || false}>
        {checked && <CheckSVG />}
      </StyledBox>
      {label}
    </Label>
  );
};

CheckBox.defaultProps = {
  label: '',
  checked: false,
};

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Box = styled.input`
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
`;

const StyledBox = styled.div<{ checked: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: 2px solid
    ${({ checked }) => (checked ? 'transparent' : COLORS.GRAY[600])};
  border-radius: 2px;
  background-color: ${({ checked }) =>
    checked ? COLORS.PRIMARY[500] : COLORS.WHITE};
  transition: all 0.2s;
  cursor: pointer;
`;

export default CheckBox;
