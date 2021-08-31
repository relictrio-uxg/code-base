import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderData from '../../json/header.json';
import {Button, Nav_Button} from '../atoms/Button'

const Header_ = styled.header`
    width: 100%;
    background-color: #fbfbfb ;
    background-color: #fbfbfb;
    position: fixed;
    top:0;
    z-index:999;
    @media only screen and (max-width: 600px) {
        display:none;
      }
`;

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoBlock = styled.h1`
    width: 163px;
    height: 58px;
`;

const NavBlock = styled.nav`
    display: flex;
    align-items: center;
`;

const UL = styled.ul`
margin: 0;
padding: 0;
border: 0;
font: inherit;
list-style: none;
`;

const LI = styled.li`
    margin: 0 24px;
    display: inline-block;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
`;

const NavLink = styled.p`
    font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.142857px;
    color: #536083;
    &:hover {
        font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        color: #536083;
        text-shadow: 0 4px 4px rgba(0,0,0,.25);
    }
    `;

const Header = () => {
    return(
        <>
        {HeaderData.headerBlock.map(block => {
            return(
                <>
            <Header_>
                <InnerContainer>
                    <LogoBlock>
                        <img style={{width: '163px',height: '58px'}} src={block.imgURL} />
                    </LogoBlock>
                    <Router>
                    <NavBlock>
                        <UL>
                            <LI>
                                <Link to="/"><NavLink>{block.navLink1}</NavLink></Link>
                            </LI>
                            <LI>
                                <Link to="/"><NavLink>{block.navLink2}</NavLink></Link>
                            </LI>
                            <LI>
                                <Link to="/hire-developers"><NavLink>{block.navLink3}</NavLink></Link>
                            </LI>
                            <LI>
                                <Link to="/aboutus"><NavLink>{block.navLink4}</NavLink></Link>
                            </LI>
                            <LI>
                                <Link to="/careers"><NavLink>{block.navLink5}</NavLink></Link>
                            </LI>
                        </UL>
                        <LI><Nav_Button bg="#3C50E0" color="#ffffff">{block.btnTxt}</Nav_Button></LI>
                    </NavBlock>
                    </Router>
                </InnerContainer>
            </Header_>
            </>
            )
        })}
        </>
    );
};

export default Header;