import React from 'react';
import styled from 'styled-components';

import BlogPageData from '../../json/blogPage.json'

const Container = styled.div`
    width: 100%;
    background-color: #f0f5fc;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 110px 0;
`;

const Heading = styled.h2`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 44px;
    line-height: 60px;
    color: #00005C;
    max-width: 400px;
`;

const B_banner = () => {
    return (
        <>
            <Container>
                <InnerContainer>
                    {BlogPageData.blogBannerPage.map(data => {
                        return (
                            <Heading>{data.heading}</Heading>
                        )
                    })}
                </InnerContainer>
            </Container>
        </>
    )
}

export default B_banner;
