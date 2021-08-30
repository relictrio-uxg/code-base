import React from 'react'
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #e6e6e6;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`;

const CloseIcon = styled(FaTimes)`
color: #000000;
`;

const Icon = styled.div`
position: absolute;
top: 18px;
right: 24px;
background: transparent;
font-size: 32px;
cursor: pointer;
outline: none;
`;

const SidebarWrapper = styled.div`
color: black;
`;

const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;
padding: 0;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
}
`;

const SidebarLink = styled(Link)`
font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #536083;
cursor: pointer;
&:hover{
    text-shadow: 0 4px 4px rgba(0,0,0,.25);
    transition: 0.2s ease-in-out;
}
`;

const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`;

const SidebarRoute = styled(Link)`
padding: 20px 10px;
border: solid 1px transparent;
min-width: 121px;
cursor: pointer;
background: #3C50E0;
box-shadow: 0px 6px 12px rgba(149, 166, 229, 0.16);
border-radius: 8px;
font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.142857px;
color: #ffffff;
margin-left: 24px;
display: block;
text-decoration: none;
`;

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/recruitment">
                        Recruitment
                    </SidebarLink>
                    <SidebarLink to="/odc">
                        Offshore
                    </SidebarLink>
                    <SidebarLink to="/hiredeveloper">
                        Hire Developer
                    </SidebarLink>
                    <SidebarLink to="/aboutus">
                        About us
                    </SidebarLink>
                    <SidebarLink to="/careers">
                        Careers
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/contact'>Get Started</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar;
