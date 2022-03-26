import React from 'react';
import styled from 'styled-components';
import { FONTS, COLORS } from '~constants/styles';
import { ReactComponent as BuildingSVG } from '~assets/svg/building.svg';

interface Props {
  title: string;
  isOpen?: boolean;
}

const NavItem = ({ title, isOpen }: Props) => {
  return (
    <List>
      <Item>
        <BuildingSVG fill={isOpen ? COLORS.GRAY[900] : COLORS.WHITE} />
        <span>{title}</span>
      </Item>
      <Item>
        <button type="button">로그아웃</button>
      </Item>
    </List>
  );
};

NavItem.defaultProps = {
  isOpen: false,
};

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  font-weight: ${FONTS.MEDIUM};
  cursor: pointer;

  &:first-child {
    gap: 8px;
  }

  button {
    color: ${COLORS.GRAY[900]};
    font-size: 14px;
    font-weight: ${FONTS.MEDIUM};
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 20px;
  }
`;

export default NavItem;
