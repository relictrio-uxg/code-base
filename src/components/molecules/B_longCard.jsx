import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import BlogPageData from '../../json/blogPage.json'

const Container = styled.div`
    background: #ffffff;
    width: 100%;
    float: left;
    padding: 60px 0;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Block = styled.div`
    width: 100%;
    max-width: 930px;
    display: flex;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
    border-radius: 12px;
    padding: 60px 40px;
`;

const LeftBlock = styled.div`
    width: 50%;
`;

const SubHeading = styled.h5`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #3C50E0;
`;

const Heading = styled.h2`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 32px;
    line-height: 44px;
    color: #00005C;
    margin: 25px 0 15px;
`;

const RightBlock = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
`;

const LI = styled.li`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    letter-spacing: .025em;
    color: #536083;
    padding-left: 25px;
    background: url('https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/tick__icon__3.svg') no-repeat left 7px transparent;
    margin-bottom: 15px;
`;

const B_longCard = () => {
    return (
        <>
            <Container>
                <InnerContainer>
                    <Block>
                    {BlogPageData.leftCard.map(data => {
                        return (
                        <LeftBlock>
                            <SubHeading>{data.subHeading}</SubHeading>
                            <Heading>{data.heading}</Heading>
                            <Button width="165px" top="30px" block="inline-block" bg="#3C50E0" color="#ffffff">{data.btnText_1}</Button>
                            <Button width="165px" top="30px" block="inline-block" bg="#ffffff" color="#3C50E0">{data.btnText_2}</Button>
                        </LeftBlock>
                        )
                    })}
                        <RightBlock>
                        {BlogPageData.rightCard.map(data => {
                        return (
                            <LI>{data.info}</LI>
                        )
                        })}
                        </RightBlock>
                    </Block>
                </InnerContainer>
            </Container>

        </>
    )
}

export default B_longCard;
