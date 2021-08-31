import React from 'react';
import styled from 'styled-components';
import { Link as LinkFooter } from 'react-router-dom';
import FooterData from '../../json/footer.json';

const Container = styled.footer`
    background: #F0F5FC;
    float: left;
    width: 100%;
    padding: 110px 0 80px;
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 768px) {
    flex-direction: column;
    width: calc(100% - 75px);
  }
`;

const Block = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    @media (max-width: 768px) {
        margin-top: 40px;
  }
`;

const Block_address = styled.p`
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #536083;
    float: left;
    width: 200px;
    margin: 0;
`;

const Block_subHeading = styled.h6`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 18px;
    line-height: 27px;
    color: #04080F;
    margin: 0;
`;

const UL = styled.ul`
    margin-right: 0;
    float: left;
    list-style: none;
    padding: 0;
`;

const LI = styled.li`
    margin-top: 25px;
`;

const Link = styled(LinkFooter)`
    font-family: "Gilroy-Medium","Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 16px;
    line-height: 18px;
    color: #536083;
    text-decoration: none;
    margin: 0;
`;

const UL_doubleSide = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 135px;
    float: left;
    margin-right: 40px;
    list-style: none;
    padding: 0;
`;

const LI_doubleSide = styled.li`
    width: 135px;
    margin-top: 25px;
`;

const InnerContainer_bottom = styled.div`
    justify-content: flex-start;
    width: 80%;
    margin: 100px auto 0 auto !important;
    margin-top: 0px;
    display: flex;
    align-items: flex-start;
    background: #F0F5FC;
    @media (max-width: 768px) {
    flex-direction: column;
    width: calc(100% - 75px);
  }
`;

const Link__bottom = styled.p`
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    color: #536083;
    mix-blend-mode: normal;
    margin-right: 55px;
    font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
    opacity: 0.8;
    @media (max-width: 768px) {
        margin-left: 0px !important;
    }
`;

const Footer = () => {
    return (
        <>
            <Container>
                <InnerContainer>
                    {FooterData.footerBlock.map(data => {
                        return (
                            <Block>
                                <img style={{ width: '163px', height: '58px', marginBottom: '10px', display: 'grid' }} src={data.imgURL} />
                                <Block_address>{data.addressBlock}</Block_address>
                            </Block>
                        )
                    })}
                    <Block>
                        {FooterData.contactBlock.map(data => {
                            return (
                                <Block_subHeading>{data.subHeading}</Block_subHeading>
                            )
                        })}
                        <UL>
                            {FooterData.contactBlock_info.map(data => {
                                return (
                                    <LI><Link><img style={{ marginRight: '15px' }} src={data.iconURL} />{data.link}</Link></LI>
                                )
                            })}
                        </UL>
                    </Block>
                    <Block>
                        {FooterData.followUsBlock.map(data => {
                            return (
                                <Block_subHeading>{data.subHeading}</Block_subHeading>
                            )
                        })}
                        <UL>
                            {FooterData.followUsBlock_info.map(data => {
                                return (
                                    <LI><Link><img style={{ marginRight: '15px' }} src={data.iconURL} />{data.link}</Link></LI>
                                )
                            })}
                        </UL>
                    </Block>
                    <Block>
                        {FooterData.quickBlock.map(data => {
                            return (
                                <Block_subHeading>{data.subHeading}</Block_subHeading>
                            )
                        })}
                        <UL_doubleSide>
                            {FooterData.quickBlock_info__left.map(data => {
                                return (
                                    <LI_doubleSide><Link to={data.linkPath}>{data.link}</Link></LI_doubleSide>
                                )
                            })}
                        </UL_doubleSide>
                        <UL_doubleSide>
                            {FooterData.quickBlock_info__right.map(data => {
                                return (
                                    <LI_doubleSide><Link to={data.linkPath}>{data.link}</Link></LI_doubleSide>
                                )
                            })}
                        </UL_doubleSide>
                    </Block>
                </InnerContainer>
                <InnerContainer_bottom>
                {FooterData.bottomBlock.map(data => {
                    return (
                        <>
                            <Link__bottom>{data.info1}</Link__bottom>
                            <Link__bottom style={{marginLeft: '25px'}}>{data.info2}</Link__bottom>
                            <Link__bottom style={{marginLeft: '25px'}}>{data.info3}</Link__bottom>
                        </>
                    )
                })}
            </InnerContainer_bottom>
            </Container>
            
        </>
    );
};

export default Footer;