import React from 'react';
import styled from 'styled-components';
import ServicesData from '../../json/services.json';

const Container = styled.div`
    background: #EBF3FF;
    width: 100%;
    height: 768px;
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
    float: left;
    margin: 0 auto;
`;

const SubPara = styled.p`
    font-family: Inter;
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

const ODC_services_blue = () => {
    return (
        <>
        {ServicesData.servicesBlueBlock.map(data => {
            return(
        <Container>
            <InnerContainer>
                <Row>
                    <Col6>
                        <img style={{height:"517"}} src={data.leftImageURL} />
                    </Col6>
                    <Col6>
                        <SubPara>{data.rightSubPara}</SubPara>
                        <ListBlock>
                        {ServicesData.servicesListBlueBlock.map(BlueBlock => {
                            return(
                            <ListBlock_item>
                            <img style={{width: "32px",height: "32px", float: "left", marginTop: "5px"}} src={BlueBlock.iconURL}/>
                                <List_para>
                                {BlueBlock.listInfo}
                                </List_para>
                            </ListBlock_item>
                            )
                        })}
                        </ListBlock>
                    </Col6>
                </Row>
            </InnerContainer>
        </Container>
            )
        })}

        </>
    );
};

export default ODC_services_blue;