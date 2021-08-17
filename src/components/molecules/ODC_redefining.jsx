import React from 'react';
import styled from 'styled-components';
import RedefiningData from '../../json/redefining.json'

const Container = styled.div`
        background-color: #fbfbfb;
        width: 100%;
`;

const InnerContainer = styled.div`
        background: #FFFFFF;
        box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
        border-radius: 12px;
        width: 80%;
        height: 800px;
        margin: 250px auto 150px auto;
        padding: 85px; 
        `;

const SmallHeading = styled.h6`
        font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #3C50E0;
        `;

const Redefining_heading = styled.h4`
        font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
        font-size: 32px;
        line-height: 44px;
        text-align: center;
        color: #00005C;
        `;

const BlockHeading = styled.p`
        font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
        font-size: 20px;
        line-height: 28px;
        display: flex;
        justify-content: center;
        letter-spacing: 0.025em;
        color: #00005C;
        `;

const BlockPara = styled.p`
        font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #536083;
        width: 264px;
        margin: 0 auto;
        `;

const Row = styled.div`
        &{
        width: 100%;
        }
        &::after{
                clear: both;
                content: "";
                display: table;
        }
        `;

const Col4 = styled.div`
        width: 33.333%;
        float: right;
`;

const Col12 = styled.div`
        width: 100%;
        float: left;
`;


const ODC_redefining = () => {
        return (
                <>
                <Container>
                        <InnerContainer>
                                {RedefiningData.redefiningBlock.map(data => {
                                        return (
                                                <>
                                                        <SmallHeading>{data.subHeading}</SmallHeading>
                                                        <Redefining_heading>{data.heading}</Redefining_heading>
                                                </>
                                        )
                                })}
                                {RedefiningData.block.map(blockData => {
                                        return (
                                                <Col4>
                                                        <Row>
                                                                <Col12>
                                                                        <img style={{margin: "0 auto",display: "block" }} src={blockData.desktopsrcfile} />
                                                                        <BlockHeading>{blockData.heading}</BlockHeading>
                                                                        <BlockPara>{blockData.subHeading}</BlockPara>
                                                                </Col12>
                                                        </Row>
                                                </Col4>
                                        )
                                })}
                        </InnerContainer>
                </Container>
                </>
        );
};

export default ODC_redefining;