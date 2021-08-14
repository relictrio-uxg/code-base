import React from 'react';
import styled from 'styled-components/macro';

const SelectWrapper = styled.select`
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #fff;
  -webkit-appearance: none;
  background: url(https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/down__arrow.png)
    no-repeat right center #ff5670;
  border: none;
  border-bottom: solid 1px #fff;
  border-radius: 0;
  padding-bottom: 7px;
  width: 100%;

  &:focus {
    outline: 0;
  }
`;

const OptionWrapper = styled.option``;

export const Select = ({ id, name, optionData }) => {
  return (
    <SelectWrapper id={id} name={name}>
      {optionData.map((option) => (
        <OptionWrapper value={option.value}>{option.label}</OptionWrapper>
      ))}
    </SelectWrapper>
  );
};
