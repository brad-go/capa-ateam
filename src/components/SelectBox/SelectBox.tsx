import React, { useRef } from 'react';
import styled from 'styled-components';
import { MaterialType, MethodType } from '~types/api';
import { ReactComponent as ArrowDownSVG } from '~assets/svg/arrow_drop_down.svg';
import { countSelected, isSelected } from '~utils/index';
import { COLORS, FONTS } from '~constants/styles';
import { useDrawer } from '~hooks/useDrawer';
import { CheckBox } from '~components/common';

interface Props {
  title: string;
  options: MaterialType[] | MethodType[];
  selected: string[];
  onChange: React.ChangeEventHandler;
}

const SelectBox = ({ title, options, selected, onChange }: Props) => {
  const drawerRef = useRef(null);
  const { isOpen, toggleDrawer } = useDrawer(drawerRef);

  return (
    <Wrapper>
      <SelectTitle onClick={toggleDrawer} selected={isSelected(selected)}>
        <span>
          {title}
          {countSelected(selected)}
        </span>
        <ArrowDownSVG
          fill={isSelected(selected) ? COLORS.WHITE : COLORS.GRAY[600]}
        />
      </SelectTitle>
      {isOpen && (
        <SelectItem ref={drawerRef}>
          {options.map((option) => (
            <CheckBox
              key={option}
              label={option}
              checked={selected.includes(option)}
              onChange={onChange}
            />
          ))}
        </SelectItem>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const SelectTitle = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: max-content;
  padding: 8px 18px 7px 11px;
  border: 1px solid ${COLORS.GRAY[600]};
  border-radius: 4px;
  background-color: ${({ selected }) =>
    selected ? COLORS.PRIMARY[700] : COLORS.WHITE};
  color: ${({ selected }) => (selected ? COLORS.WHITE : COLORS.GRAY[900])};
  font-size: 12px;
  line-height: 13px;
  transition: 250ms ease-in-out;

  span {
    display: inline-block;
    padding-bottom: 2px;
    font-weight: ${FONTS.REGULAR};
  }

  &:hover {
    border: 1px solid ${COLORS.PRIMARY[500]};
  }
`;

const SelectItem = styled.span`
  position: absolute;
  top: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: max-content;
  min-width: 130px;
  padding: 16px 12px;
  border: 1px solid ${COLORS.GRAY[600]};
  border-radius: 4px;

  &:hover {
    border: 1px solid ${COLORS.PRIMARY[500]};
  }
`;

export default SelectBox;
