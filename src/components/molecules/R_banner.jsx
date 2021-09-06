import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import RecruitmentPageData from '../../json/recruitmentPage.json';

const Container = styled.div`
width: 100%;
`;

const ContainerInner = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
padding-top: 150px;
@media (max-width: 768px) {
    flex-direction: column;
    }
`;

const R_banner__left = styled.div`
width: 50%;
float: left;
margin-bottom: 110px;
@media (max-width: 768px) {
    width: 100%;
    }
`;

const R_banner__right = styled.div`
width: 50%;
float: right;
@media (max-width: 768px) {
    width: 100%;
    }
`;

const R_banner__MainHeading = styled.h1`
font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
font-size: 52px;
line-height: 72px;
color: #00005C;
`;

const R_banner__SubHeading = styled.p`
font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 32px;
letter-spacing: 0.214286px;
color: #536083;
max-width: 540px;
`;

const R_banner = (
    {
        bannerHeading,
        bannerContent,
        bannerBtnTxt,
        bannerImageURL
    }
) => {
    return (
        <>
            <Container>
                <ContainerInner>
                    <R_banner__left>
                        <R_banner__MainHeading>
                            {bannerHeading}
                        </R_banner__MainHeading>
                        <R_banner__SubHeading>
                            {bannerContent}
                        </R_banner__SubHeading>
                        <Button width="165px" block="inline-block" bg="#3C50E0" color="#ffffff">{bannerBtnTxt}</Button>
                    </R_banner__left>
                    <R_banner__right>
                        <img src={bannerImageURL} />
                    </R_banner__right>
                </ContainerInner>
            </Container>
        </>
    );
};


export default R_banner;