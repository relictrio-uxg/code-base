import React from 'react';
import styled from 'styled-components';
import RecruitmentPageData from '../../json/recruitmentPage.json';

const Container = styled.div`
    width: 100%;
    background: #F0F5FC;
    padding: 120px 0;
    float: left;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const SubHeading = styled.h6`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #3C50E0;
    margin-bottom: 25px;
`;

const Heading = styled.h3`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 32px;
    line-height: 44px;
    text-align: center;
    color: #00005C;
    max-width: 555px;
    margin: 0 auto;
`;

const ListBlock = styled.div`
    display: flex;
    margin-top: 65px;
    counter-reset: approach;
    list-style-type: none;
`;

const ListBlock_info = styled.div`
    width: calc(100% / 6);
    background: url('https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/approach__divider.svg') right center no-repeat transparent;
    position: relative;
    padding: 170px 25px 40px;
    color: #00005c;
    counter-increment: approach;
    &::before{
        content: counters(approach, ".", decimal-leading-zero);
        position: absolute;
        left: 25px;
        top: 60px;
        font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
        font-size: 32px;
        line-height: 44px;
    }
    &:hover{
        background: url('https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/recruitment__hover') right top no-repeat #ff5670;
        background-size: 135px;
        border-radius: 12px;
        color: #ffffff;
    }
`;

const ListBlock_info_para = styled.p`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    letter-spacing: .015em;
    margin-top: 30px;
`;

const Image = styled.img`
    background-image: ${(props) => props.bg};
    width: 25px;
    height: 25px;
    &:hover{
        background-image: ${(props) => props.hoverBg};
    }
`;


const R_process = () => {
    return (
        <>
            <Container>
                <InnerContainer>
                    {RecruitmentPageData.recruitmentProcessBlock.map(data => {
                        return (
                            <>
                                <SubHeading>{data.subHeading}</SubHeading>
                                <Heading>{data.heading}</Heading>
                            </>
                        )
                    })}
                    <ListBlock>
                        <ListBlock_info>
                            {RecruitmentPageData.hoverBlock1.map(data => {
                                return (<>
                                {/*<Image bg="url('https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/approach__1.png?time=1622425898')" hoverBg="url('https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/approach__hover__1.png?time=1622425898')"></Image>*/}
                                <img src={'https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/approach__1.png?time=1622425898'} />
                                    <ListBlock_info_para>{data.blockInfo}</ListBlock_info_para>
                                </>)
                            })}
                        </ListBlock_info>
                        <ListBlock_info>
                            {RecruitmentPageData.hoverBlock2.map(data => {
                                return (<>
                                <img src={'https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/approach__2.png?time=1622425898'} />
                                    <ListBlock_info_para>{data.blockInfo}</ListBlock_info_para>
                                </>)
                            })}
                        </ListBlock_info>
                        <ListBlock_info>
                            {RecruitmentPageData.hoverBlock3.map(data => {
                                return (<>
                                <img src={'https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Group-708.png?time=1622425898'} />
                                    <ListBlock_info_para>{data.blockInfo}</ListBlock_info_para>
                                </>)
                            })}
                        </ListBlock_info>
                        <ListBlock_info>
                            {RecruitmentPageData.hoverBlock4.map(data => {
                                return (<>
                                 <img src={'https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/approach__6.png?time=1622425898'} />
                                    <ListBlock_info_para>{data.blockInfo}</ListBlock_info_para>
                                </>)
                            })}
                        </ListBlock_info>
                        <ListBlock_info>
                            {RecruitmentPageData.hoverBlock5.map(data => {
                                return (<>
                                <img src={'https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/approach_icon5.png?time=1622425898'} />
                                    <ListBlock_info_para>{data.blockInfo}</ListBlock_info_para>
                                </>)
                            })}
                        </ListBlock_info>
                        <ListBlock_info>
                            {RecruitmentPageData.hoverBlock6.map(data => {
                                return (<>
                                <img src={'https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/approach_icon6.png?time=1622425898'} />
                                    <ListBlock_info_para>{data.blockInfo}</ListBlock_info_para>
                                </>)
                            })}
                        </ListBlock_info>
                    </ListBlock>
                </InnerContainer>
            </Container>
        </>
    );
};

export default R_process;