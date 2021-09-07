import React, { Component } from 'react';
import styled from 'styled-components'



class Send extends Component{
 render(){
    const SendBtnWrapper = styled.div`
    background: #3c50e0;
    border-radius: 8px;
    line-height: 16px;
    text-align: center;
    letter-spacing: .142857px;
    color: white;
    font-size: 16px;
    width: 155px;
    padding: 20px 10px;
    border-color: #3c50e0;
    border: 1px solid #3c50e0;
    font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;;
  `;
    return(
     <SendBtnWrapper>
      Send
     </SendBtnWrapper>
    )
 }
}

export default Send;