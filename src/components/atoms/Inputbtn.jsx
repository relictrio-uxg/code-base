import React from 'react';
import styled from 'styled-components/macro';

export const InputWrapper = styled.input`
padding: 15px 20px 15px 0;
margin:10px;
background: 0 0;
mix-blend-mode: normal;
border: none;
border-bottom: 1px solid #ebf3ff;
box-sizing: border-box;
border-radius: 0;
font-size: 16px;
line-height: 28px;
color: rgba(255, 255, 255, 0.6);
width: 100%;
font-family: "Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
color:white !important;
`;

export const InputBtn = ({ bg, color, placeholder, value, type }) => {
  return (
    <InputWrapper bg={bg} placeholder={placeholder} type={type}>
    </InputWrapper>
  );
};


