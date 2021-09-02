import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import HomePageData from '../../json/homePage.json';

const Container = styled.div`
    background: #ffffff;
    float: left;
    width: 100%;
    padding: 100px 0;
    position: relative;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

const L_Block = styled.div`
    width: 40%;
`;

const SubHeading = styled.h4`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    color: #3C50E0;
`;

const Heading = styled.h2`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 32px;
    line-height: 44px;
    color: #00005C;
    margin: 25px 0;
`;

const Para = styled.p`
    font-family:  "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #536083;
    margin-bottom: 30px;
`;

const R_Block = styled.div`
    width: 40%;
    margin-right: 8%;
`;

const UL = styled.ul`
    counter-reset: section;
    list-style-type: none;
    padding: 0;
`;

const LI = styled.li`
    padding: 45px 30px 45px 80px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: .025em;
    color:#536083;
    border-bottom: 1px solid #EBF3FF;
    list-style: none;
    counter-increment: section;
    position: relative;
    z-index: 1;
    outline: none;
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    &::before{
        content: counters(section, ".", decimal-leading-zero);
        position: absolute;
        left: 30px;
        font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    }
    &:hover{
        color: #00005C;;
        background: #FFFFFF;
        box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
        border-radius: 12px;
    }
`;

const H_howWeWork = () => {
    return (
        <Container>
            <InnerContainer>
                {HomePageData.howWeWork_LBlock.map(data => {
                    return (
                        <L_Block>
                            <SubHeading>{data.subHeading}</SubHeading>
                            <Heading>{data.heading}</Heading>
                            <Para>{data.para}</Para>
                            <Button bg="#3C50E0" color="#ffffff">{data.btnTxt}</Button>
                        </L_Block>
                    )
                })}
                <R_Block>
                    <UL>
                        {HomePageData.howWeWork_RBlock.map(data => {
                            return (
                                <LI>{data.list}</LI>
                            )
                        })}
                    </UL>
                    <img style={{position:'absolute', right:'0', top:'0'}} src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/work__image.png?time=1622425898"/>
                </R_Block>
            </InnerContainer>
        </Container>
    )
}

export default H_howWeWork;
