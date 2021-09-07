import React, { Component } from 'react';
import styled from 'styled-components'


export const Btn = styled.button`
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
    font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
    @media only screen and (max-width: 600px) {
      font-size: 14px!important;
      line-height: 16px!important;
      letter-spacing: .142857px!important;
      padding: 15px;
    min-width: 150px;
}
`

export const HireNow = () => {
  return(
    <Btn>
      Hire Now
    </Btn>
  )
}