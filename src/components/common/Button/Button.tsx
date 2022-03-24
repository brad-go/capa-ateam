/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import styled from 'styled-components';
import { COLORS, FONTS } from '~constants/styles';

interface Props {
  children: React.ReactChild;
  type?: 'button' | 'submit' | 'reset';
  form?: string;
  contained?: boolean;
  onClick?: React.MouseEventHandler;
}

const Button = ({ children, form, type, contained, onClick }: Props) => {
  return (
    <Base
      type={type}
      form={form}
      contained={contained || false}
      onClick={onClick}
    >
      {children}
    </Base>
  );
};

Button.defaultProps = {
  type: 'button',
  form: 'form',
  contained: false,
  onClick: null,
};

const Base = styled.button<{ contained: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  border: 1px solid ${COLORS.PRIMARY[500]};
  border-radius: 4px;
  background-color: ${({ contained }) =>
    contained ? COLORS.PRIMARY[500] : COLORS.WHITE};
  color: ${({ contained }) => (contained ? COLORS.WHITE : COLORS.PRIMARY[500])};
  font-weight: ${FONTS.MEDIUM};
  line-height: 20px;

  &:active {
    opacity: 0.7;
  }
`;

export default Button;
