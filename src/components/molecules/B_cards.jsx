import React from 'react'
import styled from 'styled-components';
import BlogPageData from '../../json/blogPage.json';

const Container = styled.div`
    background: #ffffff;
    padding: 50px 0 0;
    float: left;
    width: 100%;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
`;

const CardBlock = styled.div`
margin-bottom: 50px;
box-shadow: 0 4px 24px rgba(149,166,229,.16);
background: #ffffff;
border-radius: 12px;
overflow: hidden;
width: 330px;
margin-right: 40px;
`;

const CardSubHeading = styled.h5`
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

const CardHeading = styled.h3`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.178571px;
    color: #00005C;
    margin: 0 25px;
    word-wrap: break-word;
`;

const CardAuthorBy = styled.h3`
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

const CardAuthorName = styled.h3`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: #536083;
    margin: 0 25px 35px;
`;

const B_cards = () => {
    return (
        <>
            <Container>
                <InnerContainer>
                    {BlogPageData.BlogBlock_1.map(data => {
                        return (
                            <CardBlock>
                                <img width='100%' height='auto' src={data.imgURL} />
                                <CardSubHeading>{data.subHeading}</CardSubHeading>
                                <CardHeading>{data.heading}</CardHeading>
                                <CardAuthorBy>{data.authorBy}</CardAuthorBy>
                                <CardAuthorName>{data.authorName}</CardAuthorName>
                            </CardBlock>
                        )
                    })}
                </InnerContainer>
            </Container>
        </>
    )
}

export default B_cards;
