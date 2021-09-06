import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button'
import HomePageData from '../../json/homePage.json';

const Container = styled.div`
    background: #f0f5fc;
    float: left;
    width: 100%;
    position: relative;
    padding: 60px 0;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    background: url('https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/global__circle__left.png') left top no-repeat,url('https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/global__circle__right.png') right bottom no-repeat transparent;
    background-color: transparent;
    background-size: auto, auto;
    background-color: #3c50e0;
    border-radius: 100px 100px 0 100px;
    background-size: 295px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 125px 0;
    text-align: center;
`;

const SubHeading = styled.h5`
    font-family:  "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: .5px;
    color: #8da4ff;
    max-width: 600px;
    margin: 0 auto;
    text-transform: uppercase;
`;

const Heading = styled.h2`
    font-family:  "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 32px;
    line-height: 44px;
    color: #ffffff;
    margin: 25px auto 15px;
    max-width: 600px;
`;

const Para = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #ebf3ff;
    max-width: 600px;
    margin: 0 auto 15px;
    letter-spacing: .214286px;
`;

const H_globalRecruitment = () => {
    return (
        <Container>
            {HomePageData.globalRecruitmentBlock.map(data => {
                return (
                    <InnerContainer>
                        <SubHeading>{data.subHeading}</SubHeading>
                        <Heading>{data.heading}</Heading>
                        <Para>{data.para}</Para>
                        <Button width="165px" top="30px" color="#3C50E0" bg="#ffffff">{data.btnTxt}</Button>
                    </InnerContainer>
                )
            })}
        </Container>
    )
}

export default H_globalRecruitment;
