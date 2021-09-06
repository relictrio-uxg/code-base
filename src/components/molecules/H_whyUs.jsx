import React from 'react';
import styled from 'styled-components';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import HomePageData from '../../json/homePage.json';

const options = {
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 2,
        },
        600: {
            items: 3,
        },
        700: {
            items: 4,
        },
        1000: {
            items: 4,
        }
    },
  };

const Container = styled.div`
    background: #ffffff;
    float: left;
    width: 100%;
    padding: 150px 0 70px;
    border-radius: 0 100px 0 0;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const SubHeading = styled.div`
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    color: #3c50e0;
    margin-bottom: 25px;
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
`;

const Heading = styled.div`
    font-size: 32px;
    line-height: 44px;
    color: #00005c;
    max-width: 580px;
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
`;

const CarouselContainer = styled.div`
    background: #ffffff;
    float: left;
    width: 100%;
    overflow: auto;
`;

const InnerCarouselContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Block = styled.div`
    background: ${(props) => props.bg};
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
    border-radius: 6px;
    max-width: 240px;
    height: 340px;
    border-radius: 12px;
    padding: 65px 30px 55px;
    margin: 25px 40px 25px 0;
    width: 260px;
`;

const BlockHeading = styled.div`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 20px;
    line-height: 28px;
    color: #00005C;
    margin: 45px 0 15px;
`;

const BlockPara = styled.div`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 26px;
    color: #536083;
`;

const H_whyUs = () => {
    return (
        <>
            <Container>
                {HomePageData.whyUsBlock.map(data => {
                    return (
                        <InnerContainer>
                            <SubHeading>{data.subHeading}</SubHeading>
                            <Heading>{data.heading}</Heading>
                        </InnerContainer>
                    )
                })}
                <CarouselContainer>
                    <InnerCarouselContainer>
                        <OwlCarousel className="owl-theme" {...options} items={4} margin={20} dots={false}>
                            {HomePageData.carouselBlock.map(data => {
                                return (
                                    <Block bg={data.bg}>
                                        <img style={{width:'25px'}} src={data.imgURL} />
                                        <BlockHeading>{data.blockTxt}</BlockHeading>
                                        <BlockPara>{data.blockPara}</BlockPara>
                                    </Block>
                                )
                            })}
                        </OwlCarousel>
                    </InnerCarouselContainer>
                </CarouselContainer>
            </Container>

        </>
    );
};

export default H_whyUs;