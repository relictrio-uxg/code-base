import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import BannerData from '../../json/banner.json';

const ContainerInner = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
padding-top: 150px;
@media (max-width: 768px) {
    flex-direction: column;
    }
`;

const Uxgbanner__left = styled.div`
width: 50%;
float: left;
margin-bottom: 110px;
@media (max-width: 768px) {
    width: 100%;
    }
`;

const Uxgbanner__right = styled.div`
width: 50%;
float: right;
@media (max-width: 768px) {
    width: 100%;
    }
`;

const Uxgbanner__MainHeading = styled.h1`
font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
font-size: 52px;
line-height: 72px;
color: #00005C;
`;

const Uxgbanner__SubHeading = styled.p`
font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 32px;
letter-spacing: 0.214286px;
color: #536083;
max-width: 540px;
`;

const ODC_banner = () => {
    return (
        <>
            {BannerData.bannerPage.map(banner => {
                return (
                    <>
                        <ContainerInner>
                            <Uxgbanner__left>
                                <Uxgbanner__MainHeading>
                                    {banner.bannerHeading}
                                </Uxgbanner__MainHeading>
                                <Uxgbanner__SubHeading>
                                    {banner.bannerContent}
                                </Uxgbanner__SubHeading>
                                <Button block="inline-block" bg="#3C50E0" color="#ffffff">Get in Touch</Button>
                            </Uxgbanner__left>
                            <Uxgbanner__right>
                               <img src= {banner.bannerImageURL}/>
                            </Uxgbanner__right>
                        </ContainerInner>
                    </>
                )
            })}
        </>
    );
};


export default ODC_banner;