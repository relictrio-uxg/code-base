import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import HomePageData from '../../json/homePage.json';

const Container = styled.div`
    float: left;
    width: 100%;
    padding: 205px 0;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

const LeftInfo = styled.div`
    width: 35%;
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
    font-size: 44px;
    line-height: 60px;
    color: #00005C;
    margin: 25px 0 0;
`;

const Para = styled.p`   
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.142857px;
    color: #536083;
    margin: 30px 0;
`;

const RightInfo = styled.div`
    display: flex;
    align-content: space-around;
    flex-wrap: wrap;
    width: 55%;
    max-width: 600px;
`;

const Block = styled.div`
    width: calc(50% - 60px);
    padding: 40px 30px 35px;
    border-bottom: solid 4px #ffffff;
    &:hover{
        background: #ffffff;
        box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
        border-radius: 2px;
        border-bottom-color: ${(props) => props.borderColor};
    }
`;

const Span = styled.span`
    width: 64px;
    height: 64px;
    background: ${(props) => props.bgColor};
    border-radius: 50%;
    display: block;
`;

const BlockHeading = styled.h3`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #00005C;
    margin: 30px 0 20px;
`;

const BlockPara = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #536083;
`;

const H_infoODC = () => {
    return (
        <>
            <Container>
                <InnerContainer>
                {HomePageData.infoODC_LBlock.map(data => {
                        return (
                    <LeftInfo>
                        <SubHeading>{data.subHeading}</SubHeading>
                        <Heading>{data.heading}</Heading>
                        <Para>{data.para}</Para>
                        <Button bg="#3C50E0" color="#ffffff">{data.btnTxt}</Button>
                        <img src={data.bgImg} />
                    </LeftInfo>
                    )
                })}
                    <RightInfo>
                    {HomePageData.infoODC_RBlock.map(data => {
                        return (
                        <Block borderColor={data.borderColor}>
                            <Span bgColor={data.bgColor}><img style={{width:'48px', height:'48px', margin:'8px'}} src={data.imgIcon} /></Span>
                            <BlockHeading>{data.heading}</BlockHeading>
                            <BlockPara>{data.para}</BlockPara>
                        </Block>
                        )
                    })}
                    </RightInfo>
                </InnerContainer>
            </Container>
        </>
    )
}

export default H_infoODC;
