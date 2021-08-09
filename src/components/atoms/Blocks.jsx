import React from 'react';
import styled from 'styled-components/macro';
import { Content } from './Content';
import { Image } from './Image';
import { Text } from './Text';

const CardWrapper = styled.div`
  width: ${(props) => props.width};
  padding: 40px 30px 35px;
  position: relative;
  border-bottom: 4px solid #fff;
  display: flex;
  flex-flow: column wrap;

  &:hover {
    background: ${(props) => props.bg};
    box-shadow: ${(props) => props.boxShadow};
    border-radius: 2px;
    border-bottom-color: ${(props) => props.borderBottomColor};
  }
`;

const BlockLink = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const Iconcont = styled.span`
  width: 64px;
  height: 64px;
  background: ${(props) => props.imgBg};
  border-radius: 50%;
  display: block;
`;

const ImageWrapper = styled.div`
  width: 48px;
  height: 48px;
  margin: 8px;
`;

const HeadingWrapper = styled.div`
  margin: 30px 0 20px;
  display: flex;
  align-items: center;
`;

export const Blocks = ({
  width,
  bg,
  boxShadow,
  borderBottomColor,
  heading,
  bodyContent,
  imgSrc,
  imgBg,
}) => {
  return (
    <CardWrapper width={width} bg={bg} boxShadow={boxShadow} borderBottomColor={borderBottomColor}>
      <BlockLink href="javascript:void(0);" title="Personalized development team"></BlockLink>
      <Iconcont imgBg={imgBg}>
        <ImageWrapper>
          <Image desktopsrcfile={imgSrc} />
        </ImageWrapper>
      </Iconcont>
      <HeadingWrapper>
        <Text color="#00005C" size="text3" lineHeight="text3" bold="600" text={heading} />
      </HeadingWrapper>
      <Content color="#536083" size="14px" lineHeight="22px" body={bodyContent} />
    </CardWrapper>
  );
};

Blocks.defaultProps = {
  width: 'calc(50% - 60px)',
  bg: 'white',
  boxShadow: '0px 4px 24px rgba(149, 166, 229, 0.16)',
  borderBottomColor: '',
  heading: 'Heading',
  bodyContent: 'Body Content',
  imgSrc: '',
  imgBg: '',
};
