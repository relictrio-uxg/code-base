import React from 'react';
import styled from 'styled-components/macro';
import { Button, Content, Image, Text } from '../atoms';

import { colors } from '../../theme';
import { Card } from './Card';

const BannerWrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.bg};
  width: 100%;
  padding: 20px 0 0;
  display: flex;
  justify-content: center;
`;

const BannerInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 110px;
`;

const BannerInnerLeft = styled.div`
  flex: 1;
  margin-left: 65px;
  display: flex;
  flex-direction: column;
`;

const BannerHeadingWrapper = styled.div`
  margin-top: 100px;
`;

const BannerButtonWrapper = styled.div`
  display: block;
`;

export const Banner = (props) => {
  return (
    <BannerWrapper bg={props.bg}>
      <BannerInner>
        <BannerInnerLeft>
          <BannerHeadingWrapper>
            <Text
              text="Your Personalised Offshore Partner"
              size="text1"
              color="#00005C"
              bold="600"
              lineHeight="text1"
            />
          </BannerHeadingWrapper>
          <Content
            body="If you are worried about your development costs skyrocketing and find it difficult to manage it, then we are here to help you."
            color="#536083"
            lineHeight="3.2rem"
            letterSpacing="0.214286px"
            size="2rem"
          />

          <BannerButtonWrapper>
            <Button text="Get in Touch" bg={colors.primary.blue100} color={colors.white} />
          </BannerButtonWrapper>
        </BannerInnerLeft>
        <Image desktopsrcfile="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2021/03/banner__latest_img.png?time=1622425898" />
      </BannerInner>
      <Card width="540px" bg="white" height="164px" />
    </BannerWrapper>
  );
};
