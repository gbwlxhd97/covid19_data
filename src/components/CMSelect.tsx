import ArrowSvg from "@src/assets/imgs/arrow.svg";
import useOutsideClick from '@src/hooks/useOutsideClick';
import { dateFormat } from '@src/utils/date';

import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type Props = {
  optionDatas: Array<string>;
  setFunction: any;
  selectDate: string;
};

const CMSelect = ({ optionDatas, setFunction,selectDate }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const onSelect =  (selectItem: string) => {
    onToggle(false);
    setFunction(selectItem);
  };
  const onToggle = useCallback((value:boolean) => {
    setIsActive(value)
  },[])

  const selectRef = useRef(null);
  useOutsideClick(selectRef, () => onToggle(false));
  return (
    <SelectContainer ref={selectRef}>
      <SelectMenu onClick={() => onToggle(!isActive)}>
        {dateFormat(selectDate)} <ArrowIcon isActive={isActive} />
      </SelectMenu>
      {isActive && (
        <ItemWrap>
          {optionDatas?.map((option: string, i: number) => (
            <Item
              active={selectDate === option}
              key={option}
              onClick={() => {
                onSelect(option);
              }}
            >
              {dateFormat(option)}
            </Item>
          ))}
        </ItemWrap>
      )}
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
`;


const SelectMenu = styled.div`
  cursor: pointer;
`;

const ArrowIcon = styled(({ isActive, ...props }) => <ArrowSvg {...props} />)<{
  isActive: boolean;
}>`
  margin-left: 10px;
  transform: ${({ isActive }) =>
    isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const ItemWrap = styled.ul`
  position: absolute;
  top: 35px;
`;

const Item = styled.li<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#ededed' : '#fff')};
  display: block;
  width: 200px;
  padding: 6px 8px;
  color: ${({ active }) => (active ? 'green' : '#222')};
  cursor: pointer;
`;

export default CMSelect;