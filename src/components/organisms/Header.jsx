import React from 'react';
import styled from 'styled-components/macro';
import { Logo, RightHeader } from '../molecules';
import { colors } from '../../theme';

const HeaderContainer = styled.div`
  color: ${colors.primary.black75};
  background: #eff5fc;
  padding: 20px 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = (props) => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
        <RightHeader />
      </HeaderWrapper>
    </HeaderContainer>
  );
};

Header.defaultProps = {};
