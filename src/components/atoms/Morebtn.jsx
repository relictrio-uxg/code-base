import React, { Component } from 'react';
import styled from 'styled-components'



class MoreBtn extends Component{
 render(){
    const MoreBtntWrapper = styled.div`
    background: #ffffff;
    border-radius: 8px;
    line-height: 16px;
    text-align: center;
    letter-spacing: .142857px;
    padding: 20px 10px;
    color: #3c50e0;
    float:right;
    font-size: 16px;
    min-width: 155px;
    border-color: #ffffff;
    border: 1px solid #e0e4f0;
    font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;;
  `;
    return(
     <MoreBtntWrapper>
      know More
     </MoreBtntWrapper>
    )
 }
}

export default MoreBtn;