import react from 'react';
import styled from 'styled-components';
import KnowMoreData from '../../json/knowmore.json';
import { Button } from '../atoms/Button';

const SubHeading = styled.h4`
font-family: "Montserrat";
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 12px;
text-align: center;
letter-spacing: 0.5px;
text-transform: uppercase;
color: #8DA4FF;
padding-top: 80px;
`;

const Heading = styled.h2`
font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
font-size: 32px;
line-height: 44px;
text-align: center;
color: #FFFFFF;
`;

const Para = styled.p`
font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: 0.214286px;
color: #F5F6F9;
max-width: 552px;
margin: 0 auto 36px auto;
`;

const Container = styled.div`
background-color: #ffffff;
width: 100%;
padding: 120px 0;
float: left;
`;

const InnerContainer = styled.div`
background: #3C50E0;
box-shadow: 0px 16px 24px rgba(149, 166, 229, 0.16);
border-radius: 100px 100px 0px 100px;
width: 80%;
height: 392px;
margin: 0 auto;
`;


const ODC_knowMore = () => {
    return (
        <>
            <Container>
                <InnerContainer>
                    {KnowMoreData.knowMore.map(more => {
                        return (
                            <>
                                <SubHeading>{more.subHeading}</SubHeading>
                                <Heading>{more.heading}</Heading>
                                <Para>{more.para}</Para>
                                <Button block="block" color="#3C50E0" bg="#ffffff">{more.btnText}</Button>
                            </>
                        )
                    })}
                </InnerContainer>
            </Container>
        </>
    );

};

export default ODC_knowMore;