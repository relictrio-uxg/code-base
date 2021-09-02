import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button'
import HomePageData from '../../json/homePage.json';

const Container = styled.div`
    background: #f0f5fc;
    float: left;
    width: 100%;
    padding: 180px 0 120px;
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

const L_SubHeading = styled.h5`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #3C50E0;
`;

const L_Heading = styled.h2`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 32px;
    line-height: 44px;
    color: #00005C;
    margin: 25px 0;
`;

const L_Para = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.142857px;
    color: #536083;
    margin-bottom: 30px;
`;

const R_Block = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
`;

const Block = styled.div`
    width: calc(50% - 70px);
    padding: 40px 35px;
    border-bottom: 4px solid transparent;
    position: relative;
    &:hover{
        border-bottom-color: ${(props) => props.borderColor}; 
        background: #FFFFFF;
        box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
        border-radius: 2px;
    }
`;

const Span = styled.span`
    background: ${(props) => props.bg};
    border-radius: 50%;
    padding: 8px;
    display: inline-block;
    position: relative;
    margin-bottom: 25px;
`;

const R_heading = styled.h3`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #00005C;
`;

const H_hireDeveloper = () => {
    return (
        <Container>
            <InnerContainer>
                {HomePageData.hireDeveloper_LBlock.map(data => {
                    return (
                        <L_Block>
                            <L_SubHeading>{data.subHeading}</L_SubHeading>
                            <L_Heading>{data.heading}</L_Heading>
                            <L_Para>{data.para}</L_Para>
                            <Button bg="#3C50E0" color="#ffffff">{data.btnTxt_1}</Button>
                            <Button left="30px" color="#3C50E0" bg="#ffffff">{data.btnTxt_2}</Button>
                        </L_Block>
                    )
                })}
                <R_Block>
                    {HomePageData.hireDeveloper_RBlock.map(data => {
                        return (
                            <Block borderColor={data.borderColor}>
                                <Span bg={data.bg}><img style={{
                                    width: '48px',
                                    height: '48px',
                                    display: 'block'
                                }} src={data.iconURL} /></Span>
                                <R_heading>{data.heading}</R_heading>
                            </Block>
                        )
                    })}
                </R_Block>
            </InnerContainer>
        </Container>
    )
}

export default H_hireDeveloper;
