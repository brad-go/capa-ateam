/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import styled from 'styled-components';
import { COLORS, FONTS } from '~constants/styles';

interface Props {
  children: React.ReactChild;
  type?: 'button' | 'submit' | 'reset';
  contained?: boolean;
  onClick?: React.MouseEventHandler;
}

const Button = ({ children, type, contained, onClick, ...rest }: Props) => {
  return (
    <Base type={type} contained={contained!} onClick={onClick} {...rest}>
      {children}
    </Base>
  );
};

Button.defaultProps = {
  type: 'button',
  contained: false,
  onClick: null,
};

const Base = styled.button<{ contained: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  border: 1px solid ${COLORS.PRIMARY.ACCENT};
  border-radius: 4px;
  background-color: ${({ contained }) =>
    contained ? COLORS.PRIMARY.ACCENT : COLORS.WHITE};
  color: ${({ contained }) =>
    contained ? COLORS.WHITE : COLORS.PRIMARY.ACCENT};
  font-weight: ${FONTS.MEDIUM};
  line-height: 20px;

  &:active {
    opacity: 0.7;
  }
`;

export default Button;
