import styled from "styled-components";

export const Button = styled.button`
padding: 20px 10px;
border: solid 1px transparent;
min-width:  ${(props) => props.width};
cursor: pointer;
background: ${(props) => props.bg};
box-shadow: 0px 6px 12px rgba(149, 166, 229, 0.16);
border-radius: 8px;
font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
font-size: 16px;
line-height: 16px;
text-align: center;
letter-spacing: 0.142857px;
color: ${(props) => props.color};
margin: 0 auto;
margin-top: ${(props) => props.top};
margin-left: ${(props) => props.left};
display: ${(props) => props.block};
`;
