import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: ${(props => props.bg)};
    width: 100%;
    height: 100%;
    display: flex;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 115px;
`;

const Row = styled.div`
    width: 100%;
`;

const Col6 = styled.div`
    width: 50%;
    float: ${(props => props.position)};
    margin: 0 auto;
    @media (max-width: 768px) {
    width: 100%;
    }
`;

const Heading = styled.h4`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 24px;
    line-height: 32px;
    color: #00005C;
`;

const SubPara = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #536083;
    width: 446px;
`;

const ListBlock = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListBlock_item = styled.li`
    display: flex;
    margin-top: 30px;
`;

const List_para = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.015em;
    color: #00005C;
    margin: 0 36px;
    width: 382px;
`;

const R_whyUsBlock = ({
    bg,
    leftImageURL,
    rightHeading,
    rightSubPara,
    listInfo_1,
    listInfo_2,
    listInfo_3,
    iconURL_1,
    iconURL_2,
    iconURL_3,
    position
}) => {
    return (
        <>
            <Container bg={bg}>
                <InnerContainer>
                    <Row>
                        <Col6 position={position}>
                            <img style={{ height: "517" }} src={leftImageURL} />
                        </Col6>
                        <Col6 position={position}>
                            <Heading>{rightHeading}</Heading>
                            <SubPara>{rightSubPara}</SubPara>
                            <ListBlock>
                                <ListBlock_item>
                                    <img style={{ width: "32px", height: "32px", float: "left", marginTop: "5px" }} src={iconURL_1} />
                                    <List_para>
                                        {listInfo_1}
                                    </List_para>
                                </ListBlock_item>
                                <ListBlock_item>
                                    <img style={{ width: "32px", height: "32px", float: "left", marginTop: "5px" }} src={iconURL_2} />
                                    <List_para>
                                        {listInfo_2}
                                    </List_para>
                                </ListBlock_item>
                                <ListBlock_item>
                                    <img style={{ width: "32px", height: "32px", float: "left", marginTop: "5px" }} src={iconURL_3} />
                                    <List_para>
                                        {listInfo_3}
                                    </List_para>
                                </ListBlock_item>
                            </ListBlock>
                        </Col6>
                    </Row>
                </InnerContainer>
            </Container>
        </>
    );
};

export default R_whyUsBlock;