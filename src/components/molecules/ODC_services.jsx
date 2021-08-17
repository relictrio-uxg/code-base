import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
        background-color: #fbfbfb;
        width: 100%;
`;

const InnerContainer = styled.div`
        max-width: 80%;
        margin: 0 auto;
`;

const SubHeading = styled.h4`
        font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #3C50E0;
        padding-top: 50px;
`;

const Heading = styled.h2`
        font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
        font-size: 44px;
        line-height: 60px;
        color: #00005C;
        width: 640px;
`;

const SubPara = styled.p`
        font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0.142857px;
        color: #536083;
        width: 640px;
        margin-bottom: 75px;
`;

const ODC_services = ({
    subHeading,
    heading,
    subPara
}) => {
    return (
        <>
            <Container>
                <InnerContainer>
                    <SubHeading>{subHeading}</SubHeading>
                    <Heading>{heading}</Heading>
                    <SubPara>{subPara}</SubPara>
                </InnerContainer>
            </Container>
        </>
    );
};

export default ODC_services;