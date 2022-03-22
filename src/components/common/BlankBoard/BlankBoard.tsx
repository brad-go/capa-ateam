import React from 'react';
import styled from 'styled-components';
import { COLORS, FONTS } from '~constants/styles';

const BlankBoard = () => {
  return <Base>조건에 맞는 견적 요청이 없습니다.</Base>;
};

const Base = styled.section`
  max-width: 1130px;
  width: 100%;
  height: 100%;
  padding: 40px;
  border: 1px solid ${COLORS.BACKGROUND.DARK};
  border-radius: 4px;
  color: ${COLORS.GRAY[600]};
  font-weight: ${FONTS.REGULAR};
  text-align: center;
`;

export default BlankBoard;
