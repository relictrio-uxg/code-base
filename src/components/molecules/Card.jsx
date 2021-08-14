import React from 'react';
import styled from 'styled-components/macro';
import { Image } from '../atoms/Image';
import { Text } from '../atoms/Text';

const CardWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: -80px;
  margin-left: -270px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.bg};
  border-radius: 12px;
  box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
  overflow: hidden;
  display: flex;
`;

const CardImageWrapper = styled.div`
  width: 40%;
  height: 100%;
`;

const CardContentWrapper = styled.div`
  width: 60%;
  padding: 35px;
`;

export const Card = ({ bg, width, height }) => {
  return (
    <CardWrapper bg={bg} width={width} height={height}>
      <CardImageWrapper>
        <Image
          desktopsrcfile={`https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Group-1232.png?time=1622425898`}
          mobilesrcfile={`https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Group-1232.png?time=1622425898`}
          tabletsrcfile={`https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Group-1232.png?time=1622425898`}
        />
      </CardImageWrapper>
      <CardContentWrapper>
        <Text
          lineHeight="text3"
          color="#04080f"
          bold="600"
          text="How to reduce cost & quickly setup Offshore development center in India?"
        />
      </CardContentWrapper>
    </CardWrapper>
  );
};
