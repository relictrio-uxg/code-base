import React, { Component } from 'react';
import styled from 'styled-components'



class RequestBtn extends Component{
 render(){
    const RequestWrapper = styled.div`
    color: white;
    padding: 20px 10px;
    border: solid 1px #3c50e0;
    background: #3c50e0;
    border-radius: 8px;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    letter-spacing: .142857px;
    min-width: 155px;
    float:left;
    cursor: pointer;
    font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;;
  `;
    return(
     <RequestWrapper>
      Rise Request
     </RequestWrapper>
    )
 }
}

export default RequestBtn;