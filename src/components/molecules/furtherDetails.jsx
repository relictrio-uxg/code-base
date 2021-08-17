import React, { Component } from 'react';
import styled from 'styled-components'
import Data from '../../json/hireDeveloper.json';


class FurtherDetails extends Component{
 render(){
    const Body = styled.h1`
    width:100%;
    height:400px;
    padding:100px 0px;
  `;

  const BenigitBody = styled.div`
    background:#3C50E0;
    width:80%;
    margin-left:150px;
    padding:100px 0px 100px 0px;
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
    border-radius: 100px 100px 0px 100px;
  `

  const IconColumn = styled.div`
  max-width: 300px;
  margin: 0px 65px 0;
  text-align: center;
  position: relative;
  `

  const Benifitsheading = styled.h4`
  font-size: 12px;
    line-height: 12px;
    letter-spacing: .5px;
  text-align: center;
  max-width: 600px;
    margin: 0 auto;
    text-transform: uppercase;
  font-family:"Gilroy-Bold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
  color:#8da4ff;
  `

  const Subsheading = styled.h4`
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  color: white;
  margin: 25px auto 15px;
    max-width: 600px;
  font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;;
  `
  const SubHeading = styled.h3`
  font-size: 14px;
  font-weight:500;
  line-height: 22px;
  text-align: center;
  color:#536083b0;
  `
const Img = styled.div`
 text-align:center;
`
const IconHeading = styled.h4`
    font-size: 20px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: .025em;
    color:#00005c;
    margin: 15px 0;
    justify-content: center;
    font-family:"Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
`
const Paragraph = styled.p`
font-size: 16px;
line-height: 24px;
color: #ebf3ff;
max-width: 600px;
margin: 0 auto 15px;
text-align:center;
font-family: "Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
letter-spacing: .214286px;
font-family:400;
`
    return(
      <Body>
        {Data.furthureDetails.map(item => {
         return(
          <>
           <BenigitBody>
            <div>
             <Benifitsheading>{item.title}</Benifitsheading>
             <Subsheading>{item.bigtitle}</Subsheading>
             <Paragraph>{item.smalltitle}</Paragraph>
            </div>
           <div style={{ display: "grid",  padding:'25px 0px 0px 0px', display: 'flex', justifyContent: 'space-around' }}></div>
          </BenigitBody>
                  
          </>
              )
          })}
   
    </Body>
    
    )
 }
}

export default FurtherDetails;