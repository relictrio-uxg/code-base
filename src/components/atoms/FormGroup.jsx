import React from 'react';
import styled from 'styled-components/macro';

const FormGroupWrapper = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-flow: column wrap;
  align-items: space-between;
`;

export const FormGroup = (props) => {
  return <FormGroupWrapper width={props.width}>{props.children}</FormGroupWrapper>;
};
