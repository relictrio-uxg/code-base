import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import CardData from '../../json/card.json';

const Container = styled.div`
    background-color: #E5E5E5;
    width: 100%;
    float: left;
    padding: 60px 0;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const BlockContainer = styled.div`
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
    border-radius: 12px;
    padding: 60px 40px;
    max-width: 390px;
`;

const SubHeading = styled.h4`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #3C50E0;
`;

const Heading = styled.h2`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 32px;
    line-height: 44px;
    color: #00005C;
    margin: 25px 0 15px;
`;

const UL = styled.ul`
    list-style: none;
    padding: 0;
`;

const LI = styled.li`
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    letter-spacing: .025em;
    color: #536083;
    padding-left: 25px;
    background: url('https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/tick__icon__3.svg') no-repeat left 7px transparent;
    margin-bottom: 15px;
`;



const ODC_card = () => {
    return (
        <>
            <Container>
                <InnerContainer>
                    {CardData.cardInfo_1.map(data => {
                        return (
                            <>
                                <BlockContainer>
                                    <SubHeading>{data.subHeading}</SubHeading>
                                    <Heading>{data.heading}</Heading>
                                    {CardData.cardInfo_1__data.map(cInfo => {
                                        return (
                                            <>
                                                <UL>
                                                    <LI>{cInfo.info}</LI>
                                                </UL>
                                            </>
                                        )
                                    })}
                                    <Button bg="#3C50E0" color="#ffffff">{data.btnText_1}</Button>
                                    <Button color="#3C50E0" bg="#ffffff">{data.btnText_2}</Button>
                                </BlockContainer>
                            </>
                        )
                    })}
                    {CardData.cardInfo_2.map(data => {
                        return (
                            <>
                                <BlockContainer>
                                    <SubHeading>{data.subHeading}</SubHeading>
                                    <Heading>{data.heading}</Heading>
                                    {CardData.cardInfo_2__data.map(cInfo => {
                                        return (
                                            <>
                                                <UL>
                                                    <LI>{cInfo.info}</LI>
                                                </UL>
                                            </>
                                        )
                                    })}
                                    <Button bg="#3C50E0" color="#ffffff">{data.btnText_1}</Button>
                                    <Button color="#3C50E0" bg="#ffffff">{data.btnText_2}</Button>
                                </BlockContainer>
                            </>
                        )
                    })}
                </InnerContainer>
            </Container>

        </>
    );
};

export default ODC_card;