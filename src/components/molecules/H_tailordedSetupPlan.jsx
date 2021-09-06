import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import HomePageData from '../../json/homePage.json';

const Container = styled.div`
    background: #ffffff;
    float: left;
    width: 100%;
    padding: 100px 0;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const SubHeading = styled.h4`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 2px;
    color: #3C50E0;
    max-width: 500px;
    margin: 0 auto;
`;

const Heading = styled.h2`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 32px;
    line-height: 44px;
    text-align: center;
    color: #00005C;
    margin: 25px auto 15px;
    max-width: 500px;
`;

const Para = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: #536083;
    max-width: 540px;
    margin: 0 auto;
`;

const CardBlock = styled.div`
    display: flex;
    margin: 70px 0;
    justify-content: space-between;
`;

const BlockSubHeading = styled.h4`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #3C50E0;
`;

const BlockHeading = styled.h4`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: #00005C;
    margin: 15px 0 45px;
`;

const UL = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
`;

const LI = styled.li`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #536083;
    background: url('https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/tick__icon.svg') left center no-repeat transparent;
    margin-bottom: 30px;
    padding-left: 35px;
`;

const MoreInfo = styled.p`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1px;
    color: #536083;
    margin-top: 80px;
    float: left;
    width: 100%;
    background: url('https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/right__arrow.svg') right center no-repeat transparent;
`;

const Block = styled.div`
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
    border-radius: 24px;
    width: calc(32% - 90px);
    padding: 55px 45px 35px;
    position: relative;
    &:hover{
        background: #3c50e0;
    }
    &::after{
        background: #e0e4f0;
        width: 100%;
        height: 1px;
        bottom: 95px;
        left: 0;
        content: "";
        position: absolute;
    }
    &:hover ${BlockSubHeading} {
        color: #8da4ff;
    }
    &:hover ${BlockHeading} {
        color: #ffffff;
    }
    &:hover ${LI} {
        color: #ffffff;
    }
    &:hover ${MoreInfo} {
        color: #ffffff;
        background: url('https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/right__arrow__white.svg') right center no-repeat transparent;
    }
    &:hover ${Button} {
        background: #ffffff;
        color: #3C50E0;
    }
`;

const H_tailordedSetupPlan = () => {
    return (
        <Container>
            <InnerContainer>
                {HomePageData.tailordedSetupPlanBlock.map(data => {
                    return (<>
                        <SubHeading>{data.subHeading}</SubHeading>
                        <Heading>{data.heading}</Heading>
                        <Para>{data.para}</Para>
                    </>)
                })}
                <CardBlock>
                    {HomePageData.tailordedSetupPlanCard.map(data => {
                        return (
                            <Block>
                                <BlockSubHeading>{data.subHeading}</BlockSubHeading>
                                <BlockHeading>{data.heading}</BlockHeading>
                                <UL>
                                    <LI>{data.list_1}</LI>
                                    <LI>{data.list_2}</LI>
                                    <LI>{data.list_3}</LI>
                                    <LI>{data.list_4}</LI>
                                </UL>
                                <Button bg="#3C50E0" color="#ffffff" width="100%">{data.btnTxt}</Button>
                                <MoreInfo>{data.moreInfo}</MoreInfo>
                            </Block>
                        )
                    })}
                </CardBlock>
            </InnerContainer>
        </Container>
    )
}

export default H_tailordedSetupPlan;
