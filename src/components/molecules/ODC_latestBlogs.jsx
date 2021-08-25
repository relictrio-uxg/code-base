import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import LatestBlogsData from '../../json/blog.json'

const Container = styled.div`
    background: #ffffff;
    float: left;
    width: 100%;
    padding: 100px 0 100px;
`;

const InnerContainer = styled.div`
    width: 80%;
    padding: 15px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        }
`;

const LeftBlock = styled.div`
    width: 25%;
    @media (max-width: 768px) {
        width: 100%;
        }
`;

const LeftBlock_SubHeading = styled.h4`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    color: #3C50E0;
`;

const LeftBlock_Heading = styled.h2`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 32px;
    line-height: 44px;
    color: #00005C;
    margin: 25px 0 40px;
`;

const RightBlock = styled.div`
    width: 70%;
    overflow: hidden;
`;

const BlogBlock = styled.div`
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
    margin-left: 20px;
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    width: 330px;
    position: relative;
    margin-right: 40px;
    width: 328px;
    height: auto;
    @media (max-width: 768px) {
        margin: 50px 0;
        }
`;

const BlogSubHeading = styled.h4`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.375px;
    text-transform: uppercase;
    color: #3C50E0;
    margin: 25px 25px 15px;
`;

const BlogHeading = styled.h2`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.178571px;
    color: #00005C;
    margin: 0 25px;
    word-wrap: break-word;
`;

const BlogAuthorBy = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
    text-transform: capitalize;
    color: #B8C2DB;
    margin: 45px 25px 10px;
`;

const BlogAuthorName = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: #536083;
    margin: 0 25px 35px;
`;

const options = {
    center: true,
    margin: 10,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 2.6,
        }
    },
};


const ODC_latestBlogs = () => {
    return (
        <>
            <Container>
                <InnerContainer>
                    {LatestBlogsData.BlogSection.map(data => {
                        return (
                            <LeftBlock>
                                <LeftBlock_SubHeading>{data.subHeading}</LeftBlock_SubHeading>
                                <LeftBlock_Heading>{data.heading}</LeftBlock_Heading>
                                <Button color="#3C50E0" bg="#ffffff">{data.btnTxt}</Button>
                            </LeftBlock>
                        )
                    })}
                    <RightBlock>
                        <OwlCarousel className="owl-theme" {...options} nav margin={1} dots={false}>
                            {LatestBlogsData.BlogBlock.map(data => {
                                return (
                                    <BlogBlock>
                                        <img src={data.imgURL} />
                                        <BlogSubHeading>{data.subHeading}</BlogSubHeading>
                                        <BlogHeading>{data.heading}</BlogHeading>
                                        <BlogAuthorBy>{data.authorBy}</BlogAuthorBy>
                                        <BlogAuthorName>{data.authorName}</BlogAuthorName>
                                    </BlogBlock>
                                )
                            })}
                        </OwlCarousel>
                    </RightBlock>
                </InnerContainer>

            </Container>
        </>
    );
};

export default ODC_latestBlogs;