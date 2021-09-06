import React from 'react';
import styled from 'styled-components';
import HomePageData from '../../json/homePage.json';

const Container = styled.div`
    background: #ffffff;
    float: left;
    width: 100%;
    position: relative;
    padding: 100px 0 60px;
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
    margin: 25px auto;
    max-width: 500px;
`;

const BlockContainer = styled.div`
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Block = styled.div`
    padding: 40px 25px 30px;
    width: calc(32% - 50px);
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
    border-radius: 12px;
    position: relative;
    &::before{
        position: absolute;
        width: 60px;
        height: 1.5px;
        left: 50%;
        bottom: 95px;
        background: #3bbe73;
        margin-left: -30px;
        content: "";
        z-index: 1;
    }
    &::after{
        position: absolute;
        width: 100%;
        height: 1.5px;
        left: 0;
        bottom: 95px;
        background: #f7f8fa;
        content: "";
    }
`;

const IconHolder = styled.div`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
`;

const BlockHeading = styled.h4`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.025em;
    color: #00005C;
    margin: 25px 0 20px;
`;

const BlockPara = styled.h4`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: #536083;
    margin-bottom: 60px;
`;

const BlockBy = styled.h4`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.025em;
    color: #536083;
`;

const H_testimonials = () => {
    return (
        <Container>
            <InnerContainer>
                {HomePageData.testimonialsBlock.map(data => {
                    return (<>
                        <SubHeading>{data.subHeading}</SubHeading>
                        <Heading>{data.heading}</Heading>
                    </>
                    )
                })}
                <BlockContainer>
                {HomePageData.testimonialsCards.map(data => {
                    return (
                    <Block>
                        <IconHolder><img width="100%" height="100%" src={data.iconURL}/></IconHolder>
                        <BlockHeading>{data.CardName}</BlockHeading>
                        <BlockPara>{data.CardPara}</BlockPara>
                        <BlockBy>{data.CardBy}</BlockBy>
                    </Block>
                    )
                })}
                </BlockContainer>
            </InnerContainer>
        </Container>
    )
}

export default H_testimonials;
