import React from 'react';
import styled from 'styled-components/macro';

import { colors } from '../../theme';
import { Button, Content, Image, Text } from '../atoms';

import OperationData from '../../json/operations.json';
import { Blocks } from '../atoms/Blocks';

const OperationsWrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.bg};
  width: 100%;
  padding: 205px 0;
  display: flex;
  justify-content: center;
`;

const OperationsInner = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const HeadingWrapper = styled.div`
  margin: 25px 0 0;
`;

const TextWrapper = styled.div`
  margin: 30px 0;
`;

const InnerLeft = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: block;
`;

const InnerRight = styled.div`
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  width: 55%;
  max-width: 600px;
`;

const LeftImageContainer = styled.div`
  position: relative;
`;

const LeftImageWrapper = styled.div`
  position: absolute;
  left: -135px;
`;

export const Operations = (props) => {
  return (
    <OperationsWrapper bg={props.bg}>
      <OperationsInner>
        <InnerLeft>
          <Text
            color={colors.primary.blue100}
            size="text6"
            lineHeight="text6"
            letterSpacing="2px"
            bold="600"
            text={OperationData.left.heading}
          />
          <HeadingWrapper>
            <Text
              size="text5"
              lineHeight="text5"
              color="#00005C"
              bold="600"
              text={OperationData.left.subHeading}
            />
          </HeadingWrapper>

          <TextWrapper>
            <Content
              size="1.6rem"
              lineHeight="2rem"
              letterSpacing="0.142857px"
              color="#536083"
              body={OperationData.left.content}
            />
          </TextWrapper>

          <ButtonWrapper>
            <Button
              text={OperationData.left.buttonText}
              bg={colors.primary.blue100}
              color={colors.white}
            />
          </ButtonWrapper>

          <LeftImageContainer>
            <LeftImageWrapper>
              <Image
                desktopsrcfile={OperationData.left.desktopsrcfile}
                mobilesrcfile={OperationData.left.mobilesrcfile}
              />
            </LeftImageWrapper>
          </LeftImageContainer>
        </InnerLeft>
        <InnerRight>
          {OperationData.right.map((operation) => (
            <Blocks
              width="50%"
              imgSrc={operation.imageSrc}
              imgBg={operation.imageBg}
              heading={operation.heading}
              bodyContent={operation.bodyContent}
              borderBottomColor={operation.borderBottomColor}
            />
          ))}
        </InnerRight>
      </OperationsInner>
    </OperationsWrapper>
  );
};
