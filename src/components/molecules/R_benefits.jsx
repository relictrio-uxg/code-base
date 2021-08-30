import React from 'react';
import styled from 'styled-components';
import RecruitmentPageData from "../../json/recruitmentPage.json";

const Container = styled.div`
    background: #ffffff;
    width: 100%;
    //position: relative;
    padding: 60px 0;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 100px 0;
    //position: relative;
    //z-index: 1;
    background: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
    border-radius: 12px;
`;

const SubHeading = styled.h4`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #3C50E0;
`;

const Heading = styled.h4`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 32px;
    line-height: 44px;
    text-align: center;
    color: #00005C;
    margin-top: 25px;
`;

const BenefitBlock = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Block = styled.div`
    max-width: 300px;
    margin: 70px 50px 0;
    text-align: center;
    //position: relative;
`;

const BlockHeading = styled.h4`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.025em;
    color: #00005C;
    margin: 15px 0;
    justify-content: center;
`;

const BlockPara = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #536083;
    
`;

const R_benefits = () => {
    return (
        <>
            <Container>
                <InnerContainer>
                    {RecruitmentPageData.benefitsSection.map(data => {
                        return (
                            <>
                                <SubHeading>{data.subHeading}</SubHeading>
                                <Heading>{data.heading}</Heading>
                            </>
                        )
                    })}
                    <BenefitBlock>
                        {RecruitmentPageData.benefitsBlock.map(data => {
                            return (
                                <Block>
                                    <img src={data.iconURL} />
                                    <BlockHeading>{data.heading}</BlockHeading>
                                    <BlockPara>{data.para}</BlockPara>
                                </Block>
                            )
                        })}
                    </BenefitBlock>
                </InnerContainer>
            </Container>
        </>
    );
};

export default R_benefits;