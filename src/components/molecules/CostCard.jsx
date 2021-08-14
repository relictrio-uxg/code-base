import React from 'react';
import styled from 'styled-components/macro';
import { Text } from '../atoms/Text';
import { Content } from '../atoms/Content';

import CostCardData from '../../json/CostCard.json';
import { FormGroup } from '../atoms/FormGroup';
import { Select } from '../atoms/Select';
import { Button } from '../atoms';

const CostCardWrapper = styled.div`
  position: relative;
  background: #fff;
  float: left;
  width: 100%;
  padding: 50px 0;
`;

const CostCardInner = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  background: url(https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/circle__left-top.svg)
      left top no-repeat,
    url(https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/circle__right-bottom.svg)
      right bottom no-repeat transparent;
  background-color: #ff5670;
  border-radius: 0 100px 0 100px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: 125px 0;
`;

const CostCardSecondInner = styled.div`
  width: 100%;
  margin: 0 95px;
  display: flex;
  justify-content: space-between;
`;

const CostCardLeft = styled.div`
  width: 55%;
`;

const SubHeadingWrapper = styled.div`
  margin: 25px 0 15px;
`;

const CostCardInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LabelWrapper = styled.div`
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
`;

const ButtonWrapperRight = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px auto 30px;
`;

const ButtonModifier = styled.div`
  background: #fafcff;
  border-radius: 8px;
  &:hover {
    background: #fff;
    border: 1px solid #e0e4f0;
    box-sizing: border-box;
    box-shadow: 0 6px 16px rgb(149 166 229 / 18%);
    color: #445bff;
  }
`;

const CostCardRight = styled.div`
  min-width: 35%;
  max-width: 45%;
  background: #fff;
  box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
  border-radius: 12px;
  padding: 65px 40px 40px;
  text-align: center;
`;

const EstimateCostWrapper = styled.div`
  margin: 20px 0 15px;
`;

const CostUnitWrapper = styled.span`
  font-size: 24px;
  line-height: 30px;
  color: #3c50e0;
  vertical-align: top;
`;

const CostAmountWrapper = styled.span`
  font-size: 42px;
  line-height: 42px;
  color: #3c50e0;
`;

const SavePercentage = styled.div`
  font-size: 15px;
  line-height: 15px;
  color: #00005c;
`;

const UnorderedList = styled.ul`
  list-style: none;
`;

const CostListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 35px 0;
`;

const CostListLabel = styled.span`
  font-size: 15px;
  line-height: 15px;
  color: #536083;
`;

const CostValue = styled.span`
  font-size: 15px;
  font-weight: 600;
  line-height: 15px;
  text-align: right;
  color: #00005c;
`;

const LinkWrapper = styled.a`
  font-size: 15px;
  font-weight: 600;
  line-height: 15px;
  color: #333;
  text-decoration: none;
`;

const CostCardBottom = styled.div`
  position: absolute;
  background: #f0f5fc;
  width: 100%;
  height: 50%;
  top: 50%;
  left: 0;
`;

export const CostCard = (props) => {
  return (
    <CostCardWrapper>
      <CostCardInner>
        <CostCardSecondInner>
          <CostCardLeft>
            <Text
              size="text6"
              lineHeight="text6"
              letterSpacing="2px"
              color="#ffbcbd"
              bold="800"
              text={CostCardData.left.heading}
            />
            <SubHeadingWrapper>
              <Text
                size="text2"
                lineHeight="text2"
                letterSpacing="2px"
                color="#fff"
                bold="800"
                text={CostCardData.left.subHeading}
              />
            </SubHeadingWrapper>
            <Content
              size="1.6rem"
              lineHeight="2.8rem"
              color="#ebf3ff"
              body={CostCardData.left.content}
            />
            <CostCardInputWrapper>
              <FormGroup width="40%">
                <LabelWrapper>
                  <Text
                    size="text6"
                    lineHeight="text6"
                    letterSpacing="2px"
                    color="#ffbcbd"
                    bold="600"
                    text={CostCardData.left.teamSize.label}
                  />
                </LabelWrapper>
                <Select
                  name={CostCardData.left.teamSize.label}
                  optionData={CostCardData.left.teamSize.data}
                />
              </FormGroup>
              <FormGroup width="40%">
                <LabelWrapper>
                  <Text
                    size="text6"
                    lineHeight="text6"
                    letterSpacing="2px"
                    color="#ffbcbd"
                    bold="600"
                    text={CostCardData.left.teamHourlyCost.label}
                  />
                </LabelWrapper>
                <Select
                  name={CostCardData.left.teamHourlyCost.label}
                  optionData={CostCardData.left.teamHourlyCost.data}
                />
              </FormGroup>
            </CostCardInputWrapper>
            <ButtonWrapper>
              <Button
                bg="#fff"
                color="#3c50e0"
                size="14px"
                lineHeight="16px"
                letterSpacing="0.142857px"
                text={CostCardData.left.buttonText}
              />
            </ButtonWrapper>
          </CostCardLeft>
          <CostCardRight>
            <Content
              size="16px"
              lineHeight="16px"
              color="#00005c"
              body={CostCardData.right.heading}
              margin="20px 0 15px"
            />
            <EstimateCostWrapper>
              <CostUnitWrapper>$</CostUnitWrapper>
              <CostAmountWrapper>12480</CostAmountWrapper>
            </EstimateCostWrapper>
            <SavePercentage>
              <strong>{CostCardData.right.impInfo}</strong> {CostCardData.right.info}
            </SavePercentage>

            <UnorderedList>
              {CostCardData.right.yearlyCost.map((cost) => (
                <CostListItem>
                  <CostListLabel>{cost.label}</CostListLabel>
                  <CostValue>{cost.value}</CostValue>
                </CostListItem>
              ))}
            </UnorderedList>
            <Content
              color="#536083"
              size="14px"
              lineHeight="14px"
              body="Want to know your exact savings?"
            />

            <ButtonWrapperRight>
              <ButtonModifier>
                <Button bg="transparent" color="#3c50e0" text="Get in Touch" />
              </ButtonModifier>
            </ButtonWrapperRight>
            <LinkWrapper href="javascript:void(0);" title="Terms and Conditions?">
              {CostCardData.right.TnC}
            </LinkWrapper>
          </CostCardRight>
        </CostCardSecondInner>
      </CostCardInner>
      <CostCardBottom></CostCardBottom>
    </CostCardWrapper>
  );
};
