import React from 'react';
import styled from 'styled-components';
import ServicesData from '../../json/services.json';

const Container = styled.div`
    background: #FFF1F2;
    width: 100%;
    height: 768px;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 120px;
`;

const Row = styled.div`
    width: 100%;
`;

const Col6 = styled.div`
    width: 50%;
    float: left;
    margin: 0 auto;
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
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.015em;
    color: #00005C;
    margin: 0 36px;
    width: 382px;
`;


const ODC_services_pink = () => {
    return (
        <>
            <Container>
                <InnerContainer>
                    <Row>
                        <Col6>
                            <ListBlock>
                                {ServicesData.servicesListPinkBlock.map(PinkBlock => {
                                    return (
                                        <ListBlock_item>
                                            <img style={{width: "32px",height: "32px", float: "left", marginTop: "5px"}} src={PinkBlock.iconURL} />
                                            <List_para>
                                                {PinkBlock.listInfo}
                                            </List_para>
                                        </ListBlock_item>
                                    )
                                })}
                            </ListBlock>
                        </Col6>
                        <Col6>
                            {ServicesData.servicesPinkBlock.map(data => {
                                return (
                                    <img style={{height:"517", marginTop:"-100px"}} src={data.rightImageURL} />
                                )
                            })}
                        </Col6>
                    </Row>
                </InnerContainer>
            </Container>
        </>
    );
};

export default ODC_services_pink;