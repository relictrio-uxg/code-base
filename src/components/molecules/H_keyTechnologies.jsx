import React from 'react';
import styled from 'styled-components';
import HomePageData from '../../json/homePage.json';

const Container = styled.div`
    position: relative;
    background: #f0f5fc;
    float: left;
    width: 100%;
    padding: 70px 0;
    border-radius: 0 0 0 100px;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

const L_Block = styled.div`
    width: 50%;
    text-align: center;
`;

const R_Block = styled.div`
    width: 50%;
`;

const SubHeading = styled.h4`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    color: #3C50E0;
    margin-top: 95px;
`;

const Heading = styled.h4`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 32px;
    line-height: 44px;
    color: #00005C;
    margin: 25px 0;
`;

const Para = styled.h4`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #536083;
`;

const H_keyTechnologies = () => {
    return (
        <Container>
            {HomePageData.keyTechnologiesBlock.map(data => {
                return (
                    <InnerContainer>
                        <L_Block>
                            <img style={{
                                width: '100%',
                                maxWidth: '421px',
                                height: '100%',
                                maxHeight: '450px'
                            }} src={data.imgURL} />
                        </L_Block>
                        <R_Block>
                            <SubHeading>{data.subHeading}</SubHeading>
                            <Heading>{data.heading}</Heading>
                            <Para>{data.para}</Para>
                        </R_Block>
                    </InnerContainer>
                )
            })}
        </Container>
    )
}

export default H_keyTechnologies;
