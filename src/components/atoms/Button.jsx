import React, { Component } from 'react';
import styled from 'styled-components'



class Button extends Component{
 render(){
    const ButtonWrapper = styled.div`
    color: #ffffff;
    padding: 20px 10px;
    border: solid 1px #3c50e0;
    background: #3c50e0;
    border-radius: 8px;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    letter-spacing: .142857px;
    width:150px;
    cursor: pointer;
    font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;;
  `;
    return(
     <ButtonWrapper>
      Get Started
     </ButtonWrapper>
    )
 }
}

export default Button;