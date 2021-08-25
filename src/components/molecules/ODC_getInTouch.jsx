import React from 'react';
import styled from 'styled-components';
import getInTouchData from '../../json/getintouch.json';
import {Input} from '../atoms/Input';
import {Button} from '../atoms/Button';

const Container = styled.div`
    background: #3C50E0;
    float: left;
    width: 100%;
    padding: 140px 0;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
    flex-direction: column;
    }
`;

const Heading = styled.h2`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 32px;
    line-height: 44px;
    color: #FFFFFF;
`;

const SubPara = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    max-width: 252px;
`;

const LeftCol = styled.div`
    width: 35%;
    @media (max-width: 768px) {
    width: 100%;
    }
`;

const RightCol = styled.div`
    width: 55%;
    @media (max-width: 768px) {
    width: 100%;
    }
`;

const Form = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 100;
padding:0px 0px 0px 0px;
@media (max-width: 768px) {
    display: block;
    }
`;


const ODC_getInTouch = () => {
    return(
        <>
        <Container>
            <InnerContainer>
            {getInTouchData.getInTouch_left.map(info => {
                return (
                    <>
                <LeftCol>
                    <Heading>{info.heading}</Heading>
                    <SubPara>{info.subHeading}</SubPara>
                </LeftCol>
                </>
                )
            })}

            {getInTouchData.getInTouch_right.map(info => {
              return(
                <>
                <RightCol>
                <Form>
                   <>
                   <Input placeholder={info.name}/>
                   <Input placeholder={info.select}/>
                   </>
                   <>
                   <Input placeholder={info.email}/>
                   <Input placeholder={info.number}/>
                   </>
                </Form>
                <Input placeholder={info.msg}/>
                <Button style={{marginTop:"64px"}} color="#3C50E0" bg="#ffffff">{info.btnTxt}</Button>
                </RightCol>
                
                </>
              )
            })}
            
            </InnerContainer>
        </Container>
        </>
    );
}

export default ODC_getInTouch;